'use strict';

const feeds = require('../feeds');
const FeedRead = require('feed-read')
const Slack = require('slack-node');
const config = require('../config');
const mongoose = require('mongoose');
const FeedStatus = require('../models/FeedStatus');

const postToSlack = function(webhook, content, sender, iconUrl) {
  let slack = new Slack();
  const slackChannel = config.slack.channel;

  //console.log("Posting to Slack...");

  slack.setWebhook(webhook);
  slack.webhook({
    channel: slackChannel,
    username: sender,
    text: content 
  }, function(err, response) {
    //console.log(response);
    return false;
  });
}

const listFeeds = function(callback) {
  let responseObject = [];

  for (var i = 0; i < feeds.length; i++) {
    responseObject.push({
      title: feeds[i].title,
      url: feeds[i].url
    });
  }

  callback(responseObject);

};

const updateFeeds = function(callback) {
  let updateStatus = "";

  for (let feed of feeds) {
    const feedTitle = feed.title;
    const feedId = feed.feedId;
    const feedIcon = feed.feedIcon;
    const slackWebhook = feed.feedWebhook;
    
    FeedRead(feed.url, function(err, articles) {
      const postTitle = articles[0].title;
      const postUrl = articles[0].link;
      const postDate = String(articles[0].published);
      const feedStatusQuery = { "feedId": feedId };
      
      FeedStatus.findOne(feedStatusQuery, function(err, feedStatus) {
        if (err) return handleError(err);
        
        if (feedStatus) {
          if (feedStatus.lastUpdated !== postDate) {
            //console.log(feedTitle + ": object exists, date different, posting to slack!");
            
            postToSlack(slackWebhook, postTitle + " " + postUrl, feedTitle, feedIcon);

            FeedStatus.findOneAndUpdate(feedStatusQuery, {$set: { lastUpdated: postDate }}, { new: true }, function(err, doc) {
              if (err) throw err;

              //console.log(feedTitle + ": object updated!");
            });
          } else {
            //console.log(feedTitle + ": object exists, no updates!");
          }
        } else {
           let newFeedStatus = new FeedStatus();

           newFeedStatus.feedId = feedId;
           newFeedStatus.title = feedTitle;
           newFeedStatus.lastUpdated = postDate;
           newFeedStatus.lastUpdatedLink = postUrl;

          newFeedStatus.save(function(err) {
            if (err) throw err;
            //console.log(feedTitle + ": created new object!");
          });
        }
      });
    });
  }

  updateStatus = { 'status': 'done' };
  
  callback(updateStatus);
}

module.exports = {
  list: function(callback) {
    listFeeds(callback);
  },

  update: function(callback) {
    updateFeeds(callback);
  }
};

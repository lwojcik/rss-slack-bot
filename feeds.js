'use strict';

const config = require('./config');
const feedsConfigFile = "./config/" + config.feedsFile;

//const feeds =  require('./config/feeds-polishforces');
const feeds =  require(feedsConfigFile);

module.exports = feeds;
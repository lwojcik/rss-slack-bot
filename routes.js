'use strict';

let FeedActions = require('./actions/FeedActions');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.json({'status': 'ok' });
    res.end();   
  });

  app.get('/update', function(req, res) {
    FeedActions.update(res.json.bind(res));
  });

  app.get('/list', function(req, res) {
    FeedActions.list(res.json.bind(res));
  });

  app.get('*', function (req, res) {
    res.sendStatus('404');
    res.end();
  });

};
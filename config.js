'use strict';

const env = process.env;

const config = {};

config.database = env.PFSLBOT_MONGODB_URL || "mongodb://localhost:27017/polishforces";
config.appHost = 'localhost';
config.appPort = env.PFSLBOT_NODE_PORT || 3000;

config.feedsFile = env.PFSLBOT_FEEDS_FILE || 'feeds-test';

config.slack = {};

config.slack.channel = "#clashroyale-niusy";

module.exports = config;
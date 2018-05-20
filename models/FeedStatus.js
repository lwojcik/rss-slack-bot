const mongoose = require('mongoose');
const findOneOrCreate = require('mongoose-find-one-or-create');

const feedStatusSchema = new mongoose.Schema({
    feedId: String,
    title: String,
    lastUpdated: String,
    lastPublishedLink: String
});

feedStatusSchema.plugin(findOneOrCreate);

module.exports = mongoose.model('FeedStatus', feedStatusSchema);
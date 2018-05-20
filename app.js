'use strict';

const bodyParser   = require('body-parser');
const express   = require('express');
const mongoose = require('mongoose');
const config = require('./config');

let app = express();

mongoose.connect(config.database, { useMongoClient: true, promiseLibrary: global.Promise });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes

require('./routes')(app);

// serving the app

app.listen(config.appPort, config.appHost);

module.exports = app;
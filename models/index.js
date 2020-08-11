const dbConfig = require('../config/db');

const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.ticket = require('./tickect')(mongoose);

module.exports = db;

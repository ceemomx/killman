var mongo = require('mongoskin');
var db = mongo.db('mongodb://127.0.0.1:27017/killman', {"native_parser": true});

db.bind('game');

module.exports = db;
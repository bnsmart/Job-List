// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var usersSchema = new mongoose.Schema({
    userName: String,
    name: String,
    date: String,
    loc: String,
    badgeNum: String,
    problem: String,
    resolved: String,
    resolution: String,
});

// Return model
module.exports = restful.model('users', usersSchema);
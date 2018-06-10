// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    userName: String,
    name: String,
    date: String,
    loc: String,
    badgeNum: Number,
    problem: String,
    resolved: String,
    resolution: String
});

// Return model
module.exports = restful.model('users', productSchema);
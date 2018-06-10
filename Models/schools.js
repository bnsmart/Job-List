// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    fizCode: String,
    School: String,
});

// Return model
module.exports = restful.model('schools', productSchema);
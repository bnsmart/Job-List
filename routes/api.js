// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/users');
//var schoolsFiz = require('../models/users');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/users');
//schoolsFiz.methods(['get', 'put', 'post', 'delete']);
//schoolsFiz.register(router, '/Schools');

// Return router
module.exports = router;
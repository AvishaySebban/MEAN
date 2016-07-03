// MEAN Stack RESTful API Tutorial - Contact List App
var Todos = require('./models/todoModel');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config');
var apiController = require('./public/apiControllers/apiController');

//================DB====================
var mongoose = require('mongoose');
mongoose.connect(config.getDbConnectionString());

//======================================

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


apiController(app);
app.listen(port);
console.log("Server running on port" + port);
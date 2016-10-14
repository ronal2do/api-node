var express    = require('express');
var http       = require('http');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var mongoose   = require('mongoose');
var cors       = require('cors');
var expressValidator = require('express-validator');

var app        = express();
var server     = http.createServer(app);

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//validator
app.use(expressValidator());
// cors
app.use(cors());
// database
require('./db');
// add routes
require('./routes')(app);
// contact
var contactController = require('./contact/services/create');
app.post('/api/contact', contactController.contactPost);
// fire up express
server.listen(3001, function() {
   console.log('Express has been started');
});

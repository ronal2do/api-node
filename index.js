var express    = require('express');
var http       = require('http');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var mongoose   = require('mongoose');
var cors       = require('cors');
var expressValidator = require('express-validator');

var app        = express();
var server     = http.createServer(app);

// database
require('./db');
// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//validator
app.use(expressValidator());
// cors
app.use(cors());
// add routes
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index.html');
});

require('./routes')(app);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// fire up express
server.listen(3001, function() {
   console.log('Express has been started');
});

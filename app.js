
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//Route to the js files
var index = require('./routes/index');

//express
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// URLS that we can use in our html
app.get('/', index.view);
app.get('/index', function(req,res) {
	res.render('index');
})
app.get('/menu', function (req, res) {
	res.render('menu');
})
app.get('/bfast', function (req, res) {
	res.render('bfast');
})
app.get('/colddrinks', function (req, res) {
	res.render('colddrinks');
})
app.get('/contact', function (req, res) {
	res.render('contact');
})
app.get('/events', function (req, res) {
	res.render('events');
})
app.get('/hotdrinks', function (req, res) {
	res.render('hotdrinks');
})
app.get('/sandos', function (req, res) {
	res.render('sandos');
})
app.get('/soups', function (req, res) {
	res.render('soups');
})
app.get('/specialties', function (req, res) {
	res.render('specialties');
})
app.get('/story', function (req, res) {
	res.render('story');
})
app.get('/sweets', function (req, res) {
	res.render('sweets');
})
app.get('/tealist', function (req, res) {
	res.render('tealist');
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
//var handlebars = require('express3-handlebars')
var exphbs  = require('express-handlebars');


var home = require('./routes/home');
// Example route
// var user = require('./routes/user');
var setup = require('./routes/setup');
var ready = require('./routes/ready');
var go = require('./routes/go');
var favorites = require('./routes/favorites');
var login = require('./routes/login');
var signup = require('./routes/signup');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//app.engine('handlebars', handlebars());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', home.view);
// Example route
// app.get('/users', user.list);
app.get('/setup', setup.view);
app.get('/ready', ready.view);
app.get('/go', go.view);
app.get('/favorites', favorites.view);
app.get('/login', login.view);
app.get('/signup', signup.view);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

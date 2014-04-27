var express = require('express'),
	path = require('path'),
	app = express(),
	trace = function(g){ console.log(g);};

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../bower_components')));
app.use(app.router);

app.get('/', function(req, res){ res.render('layout')});
app.get('/tests', function(req, res){ res.render('playground')});
app.get('/partials/:partialName', function(req, res){ res.render('partials/'+req.params.partialName); });

//app.get('*', function(req, res){ res.redirect('/')});

app.listen(app.get('port'));
console.log("SERVER:: init"); 
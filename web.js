
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
var fs = require('fs');
var less = require('less');

var app = module.exports = express.createServer(express.logger(),express.bodyParser());


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.get("*.less", function(req, res) {
    var path = __dirname + req.url;
    fs.readFile(path, "utf8", function(err, data) {
        if (err) throw err;
        less.render(data, function(err, css) {
            if (err) throw err;
            res.header("Content-type", "text/css");
            res.send(css);
        });
    });
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', function(req, res){
    res.render('about', {
        locals: {title: 'Okinawa RailsHackathon2012'}
    });
});

app.get('/about_en', function(req, res){
    res.render('about_en', {
        locals: {title: 'Okinawa RailsHackathon2012'}
    });
});

app.get('/information', function(req, res){
    res.render('information', {
        locals: {title: 'RailsHackathonについて'}
    });
});

app.get('/schedule', function(req, res){
    res.render('schedule', {
        locals: {title: 'RailsHackathonスケジュール'}
    });
});

app.get('/q_and_a', function(req, res){
    res.render('q_and_a', {
        locals: {title: 'RailsHackathon Q & A'}
    });
});

app.get('/teams', function(req, res){
    res.render('teams', {
        locals: {title: 'RailsHackathon Teams'}
    });
});

app.get('/report', function(req, res){
    res.render('report', {
        locals: {title: 'RailsHackathon Report'}
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

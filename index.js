// Simple express app for testing locally
// run with `npm start` and visit `localhost:8080` to view.

// load dependancies
var express = require('express');
var app     = express();
var path = require('path');

// send index.html file for home page
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/build/index.html'));
});

// set main route
app.use(express.static(__dirname + '/build'));

// start server
app.listen(8080);
console.log("There is a hell of a universe on port:8080");

var Express 	= require('express');
var Parser  	= require('body-parser');
var Validator	= require("validator.js");
var fs			= require("fs")
var path		= require("path");

var app     	= Express();

app.use(Parser.urlencoded(
	{
		extended : false
	}
));

app.use('/', 		Express.static(__dirname));
app.use('/fa/css', 	Express.static(__dirname + '/fa/css'));
app.use('/apps', 	Express.static(__dirname + '/apps'));

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/site/index.html');
});

var server = app.listen(3001, function() {
	console.log('listening on *:3001');
});

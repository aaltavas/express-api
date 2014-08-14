var express = require('express');
var app = express();
var http = require('http');
var d = new Date();

app.get('/', function(req, res){
  res.send('Greetings! Today is ' + d);
});

app.get('/:firstname', function (req, res) {
	res.json({'msg': 'hello ' + req.param('firstname')});
});

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(3000, function() {
  console.log('the server is listening on port 3000');
});
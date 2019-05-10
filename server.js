var express = require('express');
var port = 9999;

var app = express();
app.use('/', express.static(__dirname));

app.listen(port, function () {
	console.log('Server started: http://localhost:' + port + '/');
});
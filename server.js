const express = require('express');

var app = express();

//GET / shoould serve the index.html file in the public directory
app.get('/', function (req, res) {
	res.send('Hello World!');
});


var server = app.listen(3000, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server listening at http://%s%s', host, port);
});


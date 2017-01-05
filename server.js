const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.get('/', express.static('public'));

app.get('/buzzword', function (req, res, next) {
	res.json();
});

var server = app.listen(3000, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server listening at http://%s%s', host, port);
});


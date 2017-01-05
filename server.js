const express = require('express');

var app = express();

app.get('/', express.static('public'));

var server = app.listen(3000, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server listening at http://%s%s', host, port);
});


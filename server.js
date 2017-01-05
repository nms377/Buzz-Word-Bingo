const express = require('express');
const bodyParser = require('body-parser');

var app = express();

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', express.static('public'));

app.get('/buzzword', function (req, res, next) {
	res.send({ "buzzword": buzzword(Array)});
});

var server = app.listen(3000, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server listening at http://%s%s', host, port);
});


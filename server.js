const express = require('express');
const bodyParser = require('body-parser');

var app = express();

let buzzWordsArr = [];

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', express.static('public'));

app.get('/buzzword', function (req, res) {
	res.send({ "buzzWord": buzzWordsArr});
});

app.post('/buzzword', function (req, res) {
	res.json({
		buzzWord: String,
		points: Number,
		heard: false
	});
});

var server = app.listen(3000, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server listening at http://%s%s', host, port);
});


const express = require('express');
const bodyParser = require('body-parser');

var app = express();

var buzzWordsArr = [];

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', express.static('public'));

//returns JSON response with array of buzz word objects
app.get('/buzzword', function (req, res) {
	// console.log(buzzWordsArr);
	res.json({"buzzword": buzzWordsArr});
});

//creates buzz word objects and pushes it into the buzzWordsArr
app.post('/buzzword', function (req, res) {
	buzzWordsArr.push(req.body);
	console.log(buzzWordsArr);
	res.json({ "success": true });
});

app.put('/buzzword', function (req, res) {
for (let i = 0; i<buzzWordsArr.length; i++){
	if (req.body.buzzWord === buzzWordsArr[i].buzzWord){
		buzzWordsArr[i].heard = true;
		let newScore = parseInt(buzzWordsArr[i].points);
		console.log(newScore);
	res.send({"success": true, newScore: newScore});
	}
}
});

var server = app.listen(3000, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server listening at http://%s%s', host, port);
});


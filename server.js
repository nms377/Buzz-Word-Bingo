const express = require('express');
const bodyParser = require('body-parser');

var app = express();

var buzzWordsArr = [];

let score = 0;

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
		score += parseInt(buzzWordsArr[i].points);
		console.log('Score', score);
	res.send({"success": true, newScore: score});
	}
}
});

app.delete('/buzzword', function (req, res, next) {
	for (let i=0; i<buzzWordsArr.length; i++){
		if (req.body.buzzWord === buzzWordsArr[i].buzzWord){
			buzzWordsArr.splice(i, 1);
			console.log(buzzWordsArr);
			res.send({"success": true});
		}
	}
});

var server = app.listen(3000, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server listening at http://%s%s', host, port);
});


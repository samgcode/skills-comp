var express = require('express');
var app = express();
var queries = require('./queries.js')
var bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

app.get('/reviews', queries.getReviews);
app.post('/reviews', queries.addReview);

app.listen(port, function () {
    console.log(`Node app is running on port ${port}`);
});
 
module.exports = app;

// CREATE TABLE IF NOT EXISTS reviews (
// 	username text,
// 	review text,
// 	rating int,
// 	id SERIAL PRIMARY KEY
// );

// INSERT INTO reviews (username, review, rating)
// VALUES (
// 	'Jeff',
// 	'This is a review by a person that has a rating and this is a very good company yes yes.',
// 	4
// ),
// (
// 	'Stev',
// 	'Yes yes very good, very cool yes good would spoon again',
// 	5
// );

// SELECT * FROM reviews;
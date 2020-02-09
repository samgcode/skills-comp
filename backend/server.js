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

app.get('/items', queries.getItems);

app.listen(port, function () {
    console.log(`Node app is running on port ${port}`);
});
 
module.exports = app;

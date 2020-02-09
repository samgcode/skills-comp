const express = require('express');
const app = express();
const reviews = require('./reviews/reviews.js');
const items = require('./items/items.js');
const bodyParser = require('body-parser');
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

app.get('/reviews', reviews.getReviews);
app.get('/items', items.getItems);
app.get('/items/:id', items.getItem);
app.post('/reviews', reviews.addReview);

app.listen(port, function () {
    console.log(`Node app is running on port ${port}`);
});

module.exports = app;
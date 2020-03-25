const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

app.use('/', routes)

app.listen(port, function () {
    console.log(`Node app is running on port ${port}`);
});

module.exports = app;
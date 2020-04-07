const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const dbService = require('./databaseService');

console.log("db_host", process.env.DB_HOST);
const host = process.env.DB_HOST

const port = 3000;
let dev_db_url = '';

if(host != 'pg') {
    dev_db_url = `mongodb://admin:123456789@${host}:27017/Reviews`;

    dbService.connectMO(dev_db_url);
}


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', routes);

app.listen(port, function () {
    console.log(`API is running at localhost:${port}`);
});

module.exports = app;
const mongoose = require('mongoose');

exports.intializeDatabase = function(dbURL, serviceLocator) {
    const mongoDB = process.env.MONGODB_URI || dbURL;
    console.log('mongo db: ', mongoDB);
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;

    connectWithAutoRetry(mongoDB, db);

    const itemController = serviceLocator.controllers.itemController;
    itemController.populate();
}

function connectWithAutoRetry(uri, connection) {
    mongoose.connect(uri, { useNewUrlParser: true });
    connection.on('error', (err) => {
        console.error('Mongo failed to connect - trying again in 5 secounds - error: ', err);
        setTimeout(connectWithAutoRetry, 10000, uri, connection);
    });

}
const mongoose = require('mongoose');

exports.intializeDatabase = function(dbURL, serviceLocator) {
    const mongoDB = process.env.MONGODB_URI || dbURL;
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;

    connectWithAutoRetry(mongoDB, db);

    const itemController = serviceLocator.controllers.itemController;
    const reviewController = serviceLocator.controllers.reviewController;
    itemController.populate();
    reviewController.populate();
}

function connectWithAutoRetry(uri, connection) {
    mongoose.connect(uri, { useNewUrlParser: true });
    connection.on('error', (err) => {
        setTimeout(connectWithAutoRetry, 10000, uri, connection);
    });
}
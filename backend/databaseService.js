const mongoose = require('mongoose');

exports.connectMO = function(dbURL) {
    const mongoDB = process.env.MONGODB_URI || dbURL;
    mongoose.connect(mongoDB, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}
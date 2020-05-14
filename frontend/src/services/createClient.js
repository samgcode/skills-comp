const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} = require('mongodb-stitch-browser-sdk');

const client = Stitch.initializeDefaultAppClient('rapidair-gfjbn');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('test');

client.auth.loginWithCredential(new AnonymousCredential());

module.exports = db;
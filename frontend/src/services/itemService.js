const axios = require('axios');

const baseURL = require('../urlConfig');

const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} = require('mongodb-stitch-browser-sdk');

const client = Stitch.initializeDefaultAppClient('rapidair-gfjbn');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('test');

client.auth.loginWithCredential(new AnonymousCredential());

class ItemService {
    async getItems() {
        const response = await db.collection('items').find({}, { limit: 100}).asArray();
        console.log(response);
        return response;
    }
}

export default ItemService;

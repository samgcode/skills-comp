
const ItemController = require('./items/itemController');
const ItemsRepositoryMO = require('./items/itemsRepositoryMO');
const dbService = require('./databaseService');

// const ItemsRepositoryPG = require('./items/itemsRepositoryPG');

const serviceLocator = {
    repositories: { },
    controllers: { }
}

const host = process.env.DB_HOST;

let itemsRepository;
if(host !== 'pg') {
    itemsRepository = new ItemsRepositoryMO();
} else {
    itemsRepository = require('./items/itemsRepositoryPG');
}

serviceLocator.repositories['itemsRepo'] = itemsRepository;

serviceLocator.controllers['itemController'] = new ItemController(serviceLocator);

if(host !== 'pg') {
    //const dev_db_url = `mongodb://${host}:27017/Reviews`;
    const dev_db_url = `mongodb://localhost:27017/Reviews`;

    dbService.intializeDatabase(dev_db_url, serviceLocator);
}
module.exports = serviceLocator;
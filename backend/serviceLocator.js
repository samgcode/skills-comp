const isDocker = require('is-docker');

const ItemController = require('./items/itemController');
const ItemsRepositoryMO = require('./items/itemsRepositoryMO');
const ReviewController = require('./reviews/reviewController');
const ReviewsRepositoryMO = require('./reviews/reviewsRepositoryMO');
const dbService = require('./databaseService');

const serviceLocator = {
    repositories: { },
    controllers: { }
}

let itemsRepository = new ItemsRepositoryMO();
let reviewsRepository = new ReviewsRepositoryMO();

serviceLocator.repositories['itemsRepo'] = itemsRepository;
serviceLocator.repositories['reviewsRepo'] = reviewsRepository;

serviceLocator.controllers['itemController'] = new ItemController(serviceLocator);
serviceLocator.controllers['reviewController'] = new ReviewController(serviceLocator);

let dev_db_url = '/';
if(isDocker()) {
    dev_db_url = `mongodb://mongo:27017/Reviews`;
} else {
    // dev_db_url = `mongodb://localhost:27017/Reviews`;
    dev_db_url = 'mongodb+srv://skills-user-rw:Cq!nC2rE4iEr7b5@cluster01-hibox.mongodb.net/test?retryWrites=true&w=majority';
}

dbService.intializeDatabase(dev_db_url, serviceLocator);

module.exports = serviceLocator;
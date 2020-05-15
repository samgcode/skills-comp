const db = require('./setupStitchDB');

import ItemService from './itemService';
import ReviewService from './reviewService';
import PopulateDatabase from './populateDatabase';

const serviceLocator = {
    collections: { },
    services: { },
}

serviceLocator.collections['reviewCollection'] = db.collection('reviews');
serviceLocator.collections['itemsCollection'] = db.collection('items');

serviceLocator.services['reviewService'] = new ReviewService(serviceLocator);
serviceLocator.services['itemService'] = new ItemService(serviceLocator);

const populateDatabase = new PopulateDatabase(serviceLocator);
populateDatabase.checkEmpty();
// serviceLocator.services.itemService.populate();
// serviceLocator.services.reviewService.populate();

export default serviceLocator;
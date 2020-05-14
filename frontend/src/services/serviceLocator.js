const db = require('./setupStitchDB');

import ItemService from './itemService';
import ReviewService from './reviewService';

const serviceLocator = {
    collections: { },
    services: { },
}

serviceLocator.collections['itemsCollection'] = db.collection('items');
serviceLocator.collections['reviewCollection'] = db.collection('reviews');

serviceLocator.services['itemService'] = new ItemService(serviceLocator);
serviceLocator.services['reviewService'] = new ReviewService(serviceLocator);


serviceLocator.services.itemService.populate();
serviceLocator.services.reviewService.populate();

export default serviceLocator;
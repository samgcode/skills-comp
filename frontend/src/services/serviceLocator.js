const db = require('./setupStitchDB');

import ItemService from './itemService';

const serviceLocator = {
    collections: { },
    services: { },
}

serviceLocator.collections['itemsCollection'] = db.collection('items');

serviceLocator.services['itemService'] = new ItemService(serviceLocator);

serviceLocator.services.itemService.populate();

export default serviceLocator;
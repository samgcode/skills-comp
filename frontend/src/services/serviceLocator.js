import ItemService from './itemService';
import ReviewService from './reviewService';

const serviceLocator = {
    collections: { },
    services: { },
}

serviceLocator.services['reviewService'] = new ReviewService(serviceLocator);
serviceLocator.services['itemService'] = new ItemService(serviceLocator);

export default serviceLocator;
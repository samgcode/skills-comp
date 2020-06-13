import axios from 'axios';
import URL from '../urlConfig';

const baseURL = URL.baseURL;

class ItemService {
    constructor(serviceLocator) {
        this._reviewService = serviceLocator.services.reviewService;
    }

    async getItems() {
        const response = await axios.get(`http://${baseURL}/items`);
        return response.data;
    }
}

export default ItemService;

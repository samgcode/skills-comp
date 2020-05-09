const axios = require('axios');

const baseURL = require('../urlConfig');

class ItemService {
    async getItems() {
        const response = await axios.get(`http://${baseURL}/items`);
        return response.data;
    }
}

// module.exports = ItemService;
export default ItemService;

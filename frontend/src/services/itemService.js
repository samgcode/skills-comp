const baseURL = require('../urlConfig');

const db = require('./createClient');

class ItemService {
    async getItems() {
        const response = await db.collection('items').find({}, { limit: 100}).asArray();
        return response.map((item) => {
            return this._convertItem(item);
        });
    }
    _convertItem(item) {
        const convertedItem = {
            imagename: item.imagename,
            name: item.name,
            onsale: item.onsale,
            price: item.price,
            saleprice: item.saleprice,
            id: item._id.toString(),
        };
        return convertedItem;
    }
}

export default ItemService;

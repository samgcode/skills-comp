import axios from 'axios';
import URL from '../urlConfig';

const baseURL = URL.baseURL;

class ItemService {
    constructor(serviceLocator) {
        this._reviewService = serviceLocator.services.reviewService;
    }

    async getItems() {
        const response = await axios.get(`http://${baseURL}/items`);
        const items = response.data;
        console.log(items);
        const itemsRatingAverage = await this._reviewService._getItemsRatingAverage(items);

        const convertedItems = items.map((item) => {
            const itemId = item.id;
            const ratingAverage = itemsRatingAverage.find((itemRatingAverage) => {
                return itemRatingAverage.id === itemId;
            });
            const convertedItem = this._convertItem(item, ratingAverage);
            return convertedItem;
        });
        return convertedItems;
    }

    _convertItem(item, average) {
        const convertedItem = {
            imagename: item.image,
            name: item.name,
            onsale: item.onsale,
            price: item.price,
            saleprice: item.saleprice,
            average: average.average,
            id: item._id,
        };
        return convertedItem;
    }
}

export default ItemService;

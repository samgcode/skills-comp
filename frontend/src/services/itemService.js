import itemData from './populationData/items.json';

class ItemService {
    constructor(serviceLocator) {
        this._collection = serviceLocator.collections.itemsCollection;
        this._reviewService = serviceLocator.services.reviewService;
    }

    async getItems() {
        const items = await this._collection.find().asArray();
        const itemsRatingAverage = await this._reviewService._getItemsRatingAverage(items);

        const convertedItems = items.map((item) => {
            const itemId = item._id.toString();
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
            id: item._id.toString(),
        };
        return convertedItem;
    }
}

export default ItemService;

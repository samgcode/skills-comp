import itemData from './populationData/items.json';
import reviewData from './populationData/reviews.json';

class PopulateDatabase {
    constructor(serviceLocator) {
        this._itemsCollection = serviceLocator.collections.itemsCollection;
        this._reviewCollection = serviceLocator.collections.reviewCollection;
    }

    async checkEmpty() {
        const items = await this._itemsCollection.find().asArray();
        if(items.length <= 0) {
            await this._populateItems();
            await this._populateReviews();
        }
    }

    async _populateItems() {
        const data = itemData;
        console.log('populating items');
        data.forEach((item) => {
            this._itemsCollection.insertOne(item); 
        });
    }

    async _populateReviews() {
        const items = await this._itemsCollection.find().asArray();
        const data = reviewData;
        console.log('populating reviews');
        data.forEach((review) => {
            const itemIndex = Math.floor(Math.random() * items.length);
            review.product = items[itemIndex]._id.toString();
            console.log(items[itemIndex]._id.toString());
            this._reviewCollection.insertOne(review); 
        });
    }
}

export default PopulateDatabase;
//5ebe16bf0c1b4a728bd8af12 
//5ebe16bf0c1b4a728bd8af12

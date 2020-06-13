const itemData = require('./itemData.json');

class ItemController {	
    constructor(serviceLocator) {	
        this._itemsRepository = serviceLocator.repositories.itemsRepo;	
        this._reviewController = serviceLocator.controllers.reviewController;	
    }	

    async getItems(req, res, next) {	
        setTimeout(async() => {	
            try {	
                const items = await this._itemsRepository.getItems();
                const itemsRatingAverage = await this._reviewController._getItemsRatingAverage(items);
                console.log(itemsRatingAverage);
                const convertedItems = items.map((item) => {
                    const itemId = item._id.toString();
                    const ratingAverage = itemsRatingAverage.find((itemRatingAverage) => {
                        return itemRatingAverage.id === itemId;
                    });
                    const convertedItem = this._convertItem(item, ratingAverage);
                    return convertedItem;
                });
                return res.status(200).json(convertedItems);	
            } catch(err) {	
                next(new Error('Error occured'));	
                console.log(err);	
            }	
        }, 2000);	
    }	

    async getItem(req, res, next) {	
        try {	
            const id = req.params.id;	
            const data = await this._itemsRepository.getItem(id);	
            const convertedItem = this._convertItem(data);	
            return res.status(200).json(convertedItem);	
        } catch(err) {	
            next(new Error('Error occured'));	
            console.log(err);	
        }	
    }	

    async addItem(req, res, next) {	
        try {	
            const { name, image, onsale, price, saleprice } = req.body;	
            await this._itemsRepository.addItem(name, image, onsale, price, saleprice);	
            return res.status(201).send(`Item added with name: ${name}`);	
        } catch(err) {	
            next(new Error('Error occured'));	
            console.log(err);	
        }	
    }	

    async populate() {	
        const data = itemData;
        const databaseItems = await this._itemsRepository.getItems();	
        if(!databaseItems || databaseItems.length <= 0) {	
            console.log('populating items');	
            data.forEach((item) => {	
                this._itemsRepository.addItem(item.name, item.image, item.onsale, item.price, item.saleprice);	
            });   	
        }	
    }	

    _convertItem(item, average) {
        return {	
            name: item.name,	
            imagename: item.image,	
            onsale: item.onsale,	
            price: item.price,	
            saleprice: item.saleprice,	
            average: average.average,
            id: item._id	
        };	
    }	
}

module.exports = ItemController;

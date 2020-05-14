

class ItemService {
    constructor(serviceLocator) {
        this._collection = serviceLocator.collections.itemsCollection;
    }

    async getItems() {
        const response = await this._collection.find().asArray();
        return response.map((item) => {
            return this._convertItem(item);
        });
    }

    async populate() {
        const data = [
            {
                name: '10L Premium Oxygen - Single',
                image: 'plastic_bottle',
                onsale: true,
                price: 29.00,
                saleprice: 24.99
            }, {
                name: 'Twin Pack of Premium Oxygen 10L',
                image: 'plastic_bottles_2',
                onsale: true,
                price: 240.00,
                saleprice: 180.00
            }, {
                name: 'Five Pack of Premium Oxygen 10L',
                image: 'glass_bottles_line_5',
                onsale: true,
                price: 125.00,
                saleprice: 100.00
            }, {
                name: 'Ten Pack of Premium Oxygen 10L',
                image: 'glass_bottles_line',
                onsale: true,
                price: 125.00,
                saleprice: 100.00
            }, {
                name: '4.5L Oxygen - Twin Pack',
                image: 'two_bottles_2',
                onsale: false,
                price: 30.00,
                saleprice: 30.00
            }, {
                name: 'Tri Pack - 4.5L Premium Oxygen',
                image: 'three_glass_bottles',
                onsale: true,
                price: 55.00,
                saleprice: 45.00
            }, {
                name: 'Five Pack - 4.5L Premium Oxygen',
                image: 'five_plastic_bottles',
                onsale: false,
                price: 64.99,
                saleprice: 64.99
            }, {
	            name: 'Six Pack - 4.5L Premium Oxygen',
                image: 'glass_bottles_line_2',
                onsale: true,
                price: 110.00,
                saleprice: 80.00
            }, {
                name: 'Tri Pack - 3L Premium Flavored Oxygen',
                image: 'three_glass_bottles_2',
                onsale: false,
                price: 64.00,
                saleprice: 64.00
            }, {
                name: '3L Premium Strawberry Flavored Oxygen',
                image: 'red_bottle',
                onsale: false,
                price: 32.00,
                saleprice: 32.00
            }, {
                name: 'Tri Pack - 3L Premium Flavored Oxygen',
                image: 'red_bottles_3',
                onsale: false,
                price: 45.00,
                saleprice: 45.00
            }, {
                name: 'Twin Pack - 10L Premium Strawberry Flavoured Oxygen',
                image: 'red_bottles_2',
                onsale: false,
                price: 55.00,
                saleprice: 55.00
            },
        ];
        const currentItems = await this.getItems();
        if(!currentItems || currentItems.length <= 0) {
            console.log('populating items');
            data.forEach((item) => {
                this._collection.insertOne(item); 
            });
        }
    }

    _convertItem(item) {
        const convertedItem = {
            imagename: item.image,
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

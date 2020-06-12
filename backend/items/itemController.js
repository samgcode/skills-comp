class ItemController {	
    constructor(serviceLocator) {	
        this._itemsRepository = serviceLocator.repositories.itemsRepo;	
    }	

    async getItems(req, res, next) {	
        setTimeout(async() => {	
            try {	
                const data = await this._itemsRepository.getItems();	
                let convertedItems = data.map((item) => {	
                    return this._convertItem(item);	
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
        ]	
        const databaseItems = await this._itemsRepository.getItems();	
        if(!databaseItems || databaseItems.length <= 0) {	
            console.log('populating items');	
            data.forEach((item) => {	
                this._itemsRepository.addItem(item.name, item.image, item.onsale, item.price, item.saleprice);	
            });   	
        }	
    }	

    _convertItem(item) {	
        return {	
            name: item.name,	
            image: item.image,	
            onsale: item.onsale,	
            price: item.price,	
            saleprice: item.saleprice,	
            id: item._id	
        };	
    }	
}

module.exports = ItemController;
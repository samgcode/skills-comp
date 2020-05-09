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
            const { name, description, image } = req.body;
            await this._itemsRepository.addItem(name, description, image);
            return res.status(201).send(`Item added with name: ${name}`);
        } catch(err) {
            next(new Error('Error occured'));
            console.log(err);
        }
    }

    async populate() {
        const data = [
            {
                name: 'Bio degradable spoons pack',
                desc: 'A pack of ten spoons, that are all high quality and energy efficient.',
                image: 'manySpoons'
            }, {
                name: 'Colored spoons pack',
                desc: 'A packadge containing ten bio degradable spoons of all different colors.',
                image: 'rainbowSpoons'
            }, {
                name: 'Single spoon',
                desc: 'Uno spoon',
                image: 'SPOON'
            }, {
                name: 'Colored spoon',
                desc: 'A packadge containing one bio degradable spoon of any different color.',
                image: 'rainbowSpoons'
            }
        ]
        const databaseItems = await this._itemsRepository.getItems();
        if(!databaseItems || databaseItems.length <= 0) {
            data.forEach((item) => {
                this._itemsRepository.addItem(item.name, item.desc, item.image);
            });   
        }
    }

    _convertItem(item) {
        return {
            name: item.name,
            description: item.description,
            imagename: item.imagename,
            id: item._id
        };
    }
}

module.exports = ItemController;
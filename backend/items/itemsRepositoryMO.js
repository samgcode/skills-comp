const Item = require('./itemModel');	

class ItemsRepositoryMO {	
    async getItems() {	
        const items = await Item.find(function(items) {	
            return items;	
        });	
        return items;	
    }	

    async getItem(id) {	
        const items = await Item.findById(id, function(items) {	
            return items;	
        });	
        return items;	
    }	

    async addItem (name, image, onsale, price, saleprice) {	
        const newItem = new Item({	
            name: name,	
            image: image,	
            onsale: onsale,	
            price: price,	
            saleprice: saleprice,	
        });	
        const res = await newItem.save();	
        return res;	
    }	
}	

module.exports = ItemsRepositoryMO;
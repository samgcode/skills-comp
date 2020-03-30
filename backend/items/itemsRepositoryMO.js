const Item = require('./itemModel');

exports.getItems = async () => {
    const items = await Item.find(function(items) {
        return items;
    });
    return items;
};

exports.getItem = async (id) => {
    const items = await Item.findById(id, function(items) {
        return items;
    });
    return items;
};

exports.addItem = async (name, description, image) => {
    const newItem = new Item({
        name: name,
        description: description,
        imagename: image
    });
    const res = await newItem.save();
    return res;
}

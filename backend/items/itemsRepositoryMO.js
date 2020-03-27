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

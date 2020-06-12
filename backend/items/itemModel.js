const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    onsale: {type: Boolean, required: true},
    price: {type: Number, required: true},
    saleprice: {type: Number, required: true}
})

module.exports = mongoose.model('Item', itemSchema);
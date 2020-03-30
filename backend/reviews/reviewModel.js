const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reviewSchema = new Schema({
    username: {type: String, required: true},
    review: {type: String, required: true},
    rating: {type: Number, required: true, max: 5},
    item: {type: String, required: true},
})

module.exports = mongoose.model('Review', reviewSchema);
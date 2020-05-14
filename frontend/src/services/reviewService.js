const mongoose = require('mongoose');

const baseURL = require('../urlConfig');
const db = require('./createClient');

class ReviewService {
    async getReviewByItemId(itemId) {
        const response = await db.collection('reviews').find({product: itemId}, { limit: 100}).asArray();
        console.log(itemId);
        console.log(response);
        return response;
    }

    async addReview(username, rating, review, product) {
        const newReview = {
            "username": username,
            "rating": rating,
            "review": review,
            "product": product
        }
        console.log(newReview);
        await db.collection('reviews').insertOne(newReview);
    }
}

export default ReviewService;
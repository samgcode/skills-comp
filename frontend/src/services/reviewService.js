const db = require('./setupStitchDB');

const reviewsCollection = 'reviews';

class ReviewService {
    async getReviewsByItemId(itemId) {
        const response = await db.collection(reviewsCollection).find({product: itemId}).asArray();
        return response;
    }

    async addReview(username, rating, review, product) {
        const newReview = {
            username,
            rating,
            review,
            product
        }
        await db.collection('reviews').insertOne(newReview);
    }
}

export default ReviewService;
import axios from 'axios';
import URL from '../urlConfig';

const baseURL = URL.baseURL;

class ReviewService {
    constructor(serviceLocator) {
        this._collection = serviceLocator.collections.reviewCollection;
    }

    async getReviews() {
        const response = await axios.get(`http://${baseURL}/reviews`);
        return response;
    }

    async getReviewsByItemId(itemId) {
        const response = await axios.get(`http://${baseURL}/reviews/${itemId}`);
        return response;
    }

    async addReview(username, rating, review, product) {
        const newReview = {
            username,
            rating,
            review,
            product
        }
        await this._collection.insertOne(newReview);
    }
}

export default ReviewService;
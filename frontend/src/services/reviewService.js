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

    async addReview(username, rating, review, item) {
        // const newReview = {
        //     username,
        //     rating,
        //     review,
        //     product
        // }
        await axios.post(`http://${baseURL}/reviews`, {
            username,
            rating,
            review,
            item
        });
    }
}

export default ReviewService;
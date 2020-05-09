const axios = require('axios');

const baseURL = require('../urlConfig');

class ReviewService {
    async getReviewByItemId(itemId) {
        const response = await axios.get(`http://${baseURL}/reviews/${itemId}`);
        return response.data;
    }
}

export default ReviewService;
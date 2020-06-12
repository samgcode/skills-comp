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
        console.log(response.data);
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

    async _getItemsRatingAverage(items) {
        const itemsRatingAverage = await Promise.all(items.map(async (item) => {
            const itemId = item.id.toString();
            const reviews = await this.getReviewsByItemId(itemId);
            let reviewAverage = 0;
            if(reviews.length >= 1) {
                reviews.forEach((review) => {
                    reviewAverage += review.rating;
                })
                reviewAverage = reviewAverage / reviews.length;
            }
            return {
                id: itemId,
                average: reviewAverage,
            }
        }));
        return itemsRatingAverage;
    }
}

export default ReviewService;
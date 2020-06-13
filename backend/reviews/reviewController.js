const reviews = require('./reviewData.json');

class ReviewController {
    constructor(serviceLocator) {
        this._reviewsRepository = serviceLocator.repositories.reviewsRepo;
        this._itemsRepository = serviceLocator.repositories.itemsRepo;
    }

    async getReviews(req, res, next) {
        try {
            const data = await this._reviewsRepository.getReviews();
            return res.status(200).json(data);
        } catch(err) {
            next(new Error('Error occured'));
        }
    }

    async getReviewsByItem(req, res, next) {
        setTimeout(async() => {
            try {
                const id = req.params.id;
                const data = await this._reviewsRepository.getReviewsByItem(id);
                return res.status(200).json(data);
            } catch(err) {
                next(new Error('Error occured'));
            }
        }, 2000);
    }

    async addReview(req, res, next) {
        setTimeout(async() => {
            try {
                const { username, rating, review, item } = req.body;
                await this._reviewsRepository.addReview(username, rating, review, item, next);
                return res.status(201).send(`Review added for: ${username}`);
            } catch(err) {
                next(new Error('Error occured'));
            }
        }, 2000);
    }

    async populate() {
        const databaseReviews = await this._reviewsRepository.getReviews();
        if(!databaseReviews || databaseReviews.length <= 0) {
            console.log('populating reviews')
            const items = await this._itemsRepository.getItems();
            const data = reviews;
            data.forEach((review) => {
                const itemIndex = Math.floor(Math.random() * items.length);
                review.product = items[itemIndex]._id.toString();
                this._reviewsRepository.addReview(review.username, review.rating, review.review, review.product);
            });
        }
    }

    async _getItemsRatingAverage(items) {
        const itemsRatingAverage = await Promise.all(items.map(async (item) => {
            const itemId = item._id.toString();
            const reviews = await this._reviewsRepository.getReviewsByItem(itemId);
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

module.exports = ReviewController;



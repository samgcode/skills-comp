class ReviewController {
    constructor(serviceLocator) {
        this._reviewsRepository = serviceLocator.repositories.reviewsRepo;
    }

    async getReviews(req, res, next) {
        try {
            const data = await this._reviewsRepository.getReviews();
            return res.status(200).json(data);
        } catch(err) {
            console.log(err);
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
                console.log(err);
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
                console.log(err);
                next(new Error('Error occured'));
            }
        }, 2000);
    }
}

module.exports = ReviewController;



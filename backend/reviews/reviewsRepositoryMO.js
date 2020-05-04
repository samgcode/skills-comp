var Review = require('./reviewModel');

class ReviewsRepositoryMO {
    async test(res) {
        res.send('Test succesfull!');
    };

    async getReviews() {
        const reviews = await Review.find(function(reviews) {
            return reviews;
        });
        return reviews;
    };

    async getReviewsByItem(itemId) {
        const reviews = await Review.find({'item': itemId}, function (reviews) {
            return reviews;
        });
        return reviews;
    };

    async addReview(username, rating, review, itemId){
        var newReview = new Review(
            {
                username: username,
                review: review,
                rating: rating,
                item: itemId
            }
        );
        const res = await newReview.save();
        return res;
    };
}

module.exports = ReviewsRepositoryMO;
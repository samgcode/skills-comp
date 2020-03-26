var Review = require('./reviewModel');

exports.test = function(res) {
    res.send('Test succesfull!');
}

exports.getReviews = async () => {
    const reviews = await Review.find(function(reviews) {
        return reviews;
    });
    return reviews;
};

exports.addReview = async (username, rating, review, itemId) => {
    var newReview = new Review(
        {
            username: username,
            review: review,
            rating: rating,
            item: itemId
        }
    );
    const res = await newReview.save(function (err) {
        return 'Review successfully added';
    });
    return res;
};
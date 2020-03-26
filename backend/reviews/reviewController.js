// const queries = require('./reviewsRepositoryPG');
const queries = require('./reviewsRepositoryMO');

async function getReviews(req, res, next) {
    try {
        const data = await queries.getReviews();
        return res.status(200).json(data);
    } catch(err) {
        console.log(err);
        next(new Error('Error occured'));
    }
}

// async function getReviewsById(req, res, next) {
//     try {
//         const id = req.params.id;
//         const data = await queries.getReviewsById(id);
//         return res.status(200).json(data);
//     } catch(err) {
//         console.log(err);
//         next(new Error('Error occured'));
//     }
// }

async function addReview(req, res, next) {
    //
    try {
        const { username, rating, review, item } = req.body;
        await queries.addReview(username, rating, review, item, next);
        return res.status(201).send(`Review added for: ${username}`);
    } catch(err) {
        console.log(err);
        next(new Error('Error occured'));
    }
    
}

module.exports = {
    getReviews,
    // getReviewsById,
    addReview
};



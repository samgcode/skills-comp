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

async function getReviewsByItem(req, res, next) {
    setTimeout(async() => {
        try {
            const id = req.params.id;
            const data = await queries.getReviewsByItem(id);
            return res.status(200).json(data);
        } catch(err) {
            console.log(err);
            next(new Error('Error occured'));
        }
    }, 2000);
}

async function addReview(req, res, next) {
    //
    setTimeout(async()=>{
        try {
            const { username, rating, review, item } = req.body;
            await queries.addReview(username, rating, review, item, next);
            return res.status(201).send({
                    message: `Review added for: ${username}`,
                    succesfull: true,
                    error: null
                }
            );
        } catch(err) {
            console.log(err);
            next(new Error('Error occured'));
            return res.status(500).send({
                    message: `problem adding review`,
                    succesfull: false,
                    error: err
                }
            );
        }
    },2000);
    
}

module.exports = {
    getReviews,
    getReviewsByItem,
    addReview
};



const express = require('express');
const router = express.Router();

const reviewController = require('./reviews/reviewController');
const itemController = require('./items/itemController');

router.get('/', function (req, res) {
    return res.send({ error: true, message: 'The api seems to be up and running! go to /reviews or /items to see more.' })
});

router.get('/reviews', reviewController.getReviews);
router.get('/reviews/:id', reviewController.getReviewsByItem);
router.post('/reviews', reviewController.addReview);

router.get('/items', itemController.getItems);
router.get('/items/:id', itemController.getItem);

module.exports = router;
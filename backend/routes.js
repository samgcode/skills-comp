const express = require('express');

const serviceLocator = require('./serviceLocator');

const router = express.Router();

const reviewController = serviceLocator.controllers.reviewController;
const itemController = serviceLocator.controllers.itemController;

router.get('/', function (res) {
    return res.send({ error: true, message: 'The api seems to be up and running! go to /reviews or /items to see more.' })
});

router.get('/reviews', reviewController.getReviews.bind(reviewController));
router.get('/reviews/:id', reviewController.getReviewsByItem.bind(reviewController));
router.post('/reviews', reviewController.addReview.bind(reviewController));

router.get('/items', itemController.getItems.bind(itemController));
router.get('/items/:id', itemController.getItem.bind(itemController));
router.post('/items', itemController.addItem.bind(itemController));

module.exports = router;
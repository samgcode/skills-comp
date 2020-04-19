const express = require('express');

const serviceLocator = require('./serviceLocator');
const reviewController = require('./reviews/reviewController');

const router = express.Router();

const itemController = serviceLocator.controllers.itemController;

router.get('/', function (res) {
    return res.send({ error: true, message: 'The api seems to be up and running! go to /reviews or /items to see more.' })
});

router.get('/reviews', reviewController.getReviews);
router.get('/reviews/:id', reviewController.getReviewsByItem);
router.post('/reviews', reviewController.addReview);

router.get('/items', itemController.getItems.bind(itemController));
router.get('/items/:id', itemController.getItem.bind(itemController));
router.post('/items', itemController.addItem.bind(itemController));

module.exports = router;
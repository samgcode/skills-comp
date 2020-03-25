const express = require('express');
const router = express.Router();

const reviewController = require('./reviews/reviewController');
const itemController = require('./items/itemController');

router.get('/reviews', reviewController.getReviews);
router.get('/reviews/:id', reviewController.getReviewsById);
router.post('/reviews', reviewController.addReview);

router.get('/items', itemController.getItems);
router.get('/items/:id', itemController.getItem);

module.exports = router;
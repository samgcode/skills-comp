class ReviewService {
    constructor(serviceLocator) {
        this._collection = serviceLocator.collections.reviewCollection;
    }

    async getReviews() {
        const response = await this._collection.find().asArray();
        return response;
    }

    async getReviewsByItemId(itemId) {
        const response = await this._collection.find({product: itemId}).asArray();
        console.log(response);
        return response;
    }

    async addReview(username, rating, review, product) {
        // throw new Error('test');
        const newReview = {
            username,
            rating,
            review,
            product
        }
        console.log(newReview);
        await this._collection.insertOne(newReview);
    }

    async populate() {
        const data = [
            {
                username: "Steven",
                rating: 5,
                review: "wow 11/10 product quite amazing i would recommend to my mom wow truly the best",
                product:"5ebb2d30e8c99544d932193b"
            }, {
                username: "Selena Roberts",
                rating: 4,
                review: "I purchased the premium strawberry flavoured oxygen. The extra flavour really adds to my breathing experience:) Great product, I think the flavour is a little strong, but other than that; it’s a nice addition to the store. ",
                product: "5ebdad9a342c408e45ac53ce"
            }, {
                username: "Robert Thatcher",
                rating: 5,
                review: "I believe the quantity of oxygen supplied is a great amount. The oxygen lasts a long time before I run out, which is nice as you don’t need to repurchase often. I like the idea of having extra flavours, I’m a simple guy, however, so the original flavour suits me fine!",
                product: "5ebdad9a342c408e45ac53c8"
            }, {
                username: "Benjamin Wellington",
                rating: 4,
                review: "Love the product! The shipping was slightly slow as I live in the UK, but pretty fast nonetheless. I appreciate the costumer support, it made me feel involved in what I was purchasing.",
                product: "5ebdad9a342c408e45ac53c4"
            }, {
                username: "Joe",
                rating: 4,
                review: "Love the product! The shipping was slightly slow as I live in the UK, but pretty fast nonetheless. I appreciate the costumer support, it made me feel involved in what I was purchasing.",
                product: "5ebdad9a342c408e45ac53c4"
            }, {
                username: "Bob Evans",
                rating: 5,
                review: "Best oxygen I’ve ever purchased! You won’t find air this good of quality for such a reasonable price anywhere else. Truly amazing work",
                product: "5ebdad9a342c408e45ac53c3"
            }, {
                username: "Benjamin",
                rating: 3,
                review: "Great value for the price, bought this pack for the family and they all love it. My one complaint is my husband is slightly bigger so the oxygen doesn’t suffice sometimes. Other than that, great stuff",
                product: "5ebdad9a342c408e45ac53c9"
            }, {
                username: "Beth",
                rating: 3,
                review: "I was slightly confused as to what the flavours were because they weren’t clearly labeled. Whatever they are, they taste and smell great:) Good quality air",
                product: "5ebdad9a342c408e45ac53cd"
            }
        ];
        const currentReviews = await this.getReviews();
        if(!currentReviews || currentReviews.length <= 0) {
            console.log('populating reviews');
            data.forEach((review) => {
                this._collection.insertOne(review); 
            });
        }
    }

    async _getItemsRatingAverage(items) {
        const itemsRatingAverage = await Promise.all(items.map(async (item) => {
            const itemId = item._id.toString()
            const reviews = await this.getReviewsByItemId(itemId);
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

export default ReviewService;
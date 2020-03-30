<template>
    <div class="row">
        <div class="col-md-4" v-for="item in items" :key="item.id">
           <div class="card mb-4 shadow-sm" :id="item.id">
                <img id="product-image" :src="''+getImage(item.imagename)" alt="Image of one of our spoons" class="bd-placeholder-img" width="100%" height="300">
                <div class="card-body">
                    <h4>{{ item.name }}</h4>
                    <p>{{ item.description }}</p>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#reviewModal" @click="getReviews(item.id)">
                        See some reviews
                    </button>

                    <div class="modal fade" id="reviewModal" tabindex="-1" role="dialog" aria-labelledby="reviewModalLable" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="reviewModalLable">Reviews for {{ activeItem.name }}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <ReviewList :reviews="reviewsList" />
                            <div class="col-md-12">
                                <div class="card mb-4 shadow-sm" :class="{ 'collapse': reviewsList[0] }">
                                    <div class="card-body">
                                        <h6 class="card-text">No reviews were found for this item</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>   
                </div>             
            </div>
        </div>
    </div>
</template>

<script>
    import ReviewList from './ReviewList';
    import axios from 'axios';
    export default {
        name: 'itemList',
        props: ['items'],
        data: function() {
            return {
                activeItem: 1,
                reviewsList: []
            }
        },

        components: {
            ReviewList,
        },

        methods: {
            getImage: function(imageName) {
                var images = require.context('@/assets/', false, /\.jpg$/);
                return images('./' + imageName + ".jpg");
            },
            getReviews: function(itemId) {
                this.items.forEach((item) => { 
                    if(item.id === itemId) { 
                        this.activeItem = item; 
                    }
                })
                axios.get(`http://localhost:3000/reviews/${itemId}`)
                .then( 
                    response => (this.reviewsList = response.data.map( item => {
                        item.Id = this.reviewId;
                        return item;
                    }))
                );
            }
        }
    }
</script>
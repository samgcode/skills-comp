<template>
    <div class="row">
        <div class="col-md-4" v-for="item in items" :key="item.id">
           <div class="card mb-4 shadow-sm product-card" :class="{'sale' : item.onsale}" :id="item.id">
                <div class="containter">
                    <h5 class="sale-text col-sm-12" v-if="item.onsale">On sale!</h5>
                    <img id="product-image" :src="''+getImage(item.imagename)" :alt="'Image of our ' + item.name" class="bd-placeholder-img" width="100%" height="300">
                </div>
                <div class="card-body">
                    <h4>{{ item.name }}</h4>
                    <div class="row">
                        <p class="lead price" v-if="item.onsale"><s>${{ item.price }}</s></p>
                        <p class="lead price">${{ item.saleprice }}</p>
                    </div>
                    <div class="row">
                        <StarRating 
                            class="left-spacer"
                            :increment="0.5"
                            :rating="item.average"
                            :show-rating="true"
                            :round-start-rating="true"
                            :read-only="true"
                            :star-size="20"
                        />
                        <button type="button" class="btn btn-blue left-spacer" data-toggle="modal" data-target="#reviewModal" @click="getReviews(item.id)">
                            Reviews
                        </button>
                    </div>
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
                            <div class="loading col-sm-12">
                                <OrbitLoader :loading="loading"/>
                            </div>
                            <ErrorDisplay :errorData="errorData" :class="{ 'd-none' : !errorOccured }"/>
                            <ReviewList :reviews="reviewsList" :class="{ 'd-none': loading}"/>
                            <div class="col-md-12">
                                <div class="card mb-4 shadow-sm" :class="{ 'collapse': !showNoReviws}">
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
import ReviewList from './Reviews/ReviewList';
import ErrorDisplay from '../Error/ErrorDisplay';
import OrbitLoader from '../Loading/OrbitLoader';
import serviceLocator from '../../services/serviceLocator';
import StarRating from 'vue-star-rating';
// import ReviewService from '../../services/reviewService';

const reviewService = serviceLocator.services.reviewService;
// const reviewService = new ReviewService();

export default {
    name: 'itemList',
    props: ['items'],
    data: function() {
        return {
            activeItem: 1,
            reviewsList: [],
            loading: true,
            showNoReviws: false,
            errorOccured: false,
            errorData: {}
        }
    },
    components: {
        ReviewList,
        OrbitLoader,
        ErrorDisplay,
        StarRating
    },
    methods: {
        getImage: function(imageName) {
            var images = require.context('@/assets/', false, /\.jpg$/);
            return images('./' + imageName + ".jpg");
        },
        getReviews: async function(itemId) {
            this.loading = true;
            this.showNoReviws = false;
            this.errorOccured = false;
            this.items.forEach((item) => { 
                if(item.id === itemId) { 
                    this.activeItem = item; 
                }
            })
            try {
                this.reviewsList = await reviewService.getReviewsByItemId(itemId);
                this.loading = false;
            } catch(err) {
                this.loading = false;
                this.errorOccured = true;
                this.errorData = {
                    message: 'Error occured while trying to fetch reviews',
                }
                console.log(err);
            }
            this.loading = false;
            if(!this.reviewsList[0] && !this.errorOccured) {
                this.showNoReviws = true;
            }
        },
    }
}
</script>

<style scoped>
.product-card {
    margin-left: -1em;
    margin-bottom: 1em;
    width: 105%;
    height: 97%;
}
.price {
    margin-left: 0.6em;
}
.sale {
    border: solid 3px #7DFF31;
}
.sale-text {
    color: #7DFF31;
    background-color: rgba(125, 125, 125, 0.7);
    padding-top: 0.5em;
    padding-bottom: 0.4em;
}
.left-spacer {
    margin-left: 0.8em;
}
</style>
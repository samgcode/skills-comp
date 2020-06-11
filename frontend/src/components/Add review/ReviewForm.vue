<template>
    <div class="top-spacer">
        <div class="jumbotron light-jumbotron">
            <div class="container">
            <h2><u>Write a review</u></h2>
            <h5>Review one of Rapid Air products</h5>
            </div>
        </div>
        <form @submit.prevent="requestAdd()" @change="valid">
            <div class="from-row row">
                <div class="from-group col-md-5">
                    <label for="usernameInput">Username</label>
                    <validation-provider rules="required" v-slot="{ errors }">
                        <input 
                            type="text" 
                            name="username" 
                            id="usernameInput" 
                            class="form-control" 
                            :class="{'border-danger': validationErrors[0] }"
                            placeholder="Enter your name"
                            v-model="formdata.username" 
                        >
                        <span>{{ errors[0] }}</span>
                    </validation-provider>
                </div>
                <div class="from-group col-md-4"> 
                    <label for="productInput">Product</label>
                    <validation-provider rules="required" v-slot="{ errors }">
                        <select 
                            id="productInput" 
                            class="form-control"
                            :class="{'border-danger': validationErrors[1] }"
                            v-model="formdata.product"
                            >
                                <option v-for="product in products" :key="product.id" :value="product.id" >{{ product.name }}</option>
                                
                        </select>
                    <span>{{ errors[0] }}</span>
                    </validation-provider>
                </div>
                <div class="from-group col-md-3"> 
                    <label for="ratingInput">Rating</label>
                    <validation-provider rules="required" v-slot="{ errors }">
                        <star-rating 
                        v-model="formdata.rating"
                        :star-size="30"
                        :border-color="ratingBorderColor"
                        :border-width="2"
                        :show-rating="false"
                        :active-color="'#7DFF31'"
                        @rating-selected="ratingSelected"
                        > </star-rating>
                    <span>{{ errors[0] }}</span>
                    </validation-provider>
                </div>
            </div>
            <div class="form-group">
                <label for="reviewInput">Review</label>
                <validation-provider rules="required" v-slot="{ errors }">
                    <textarea 
                        class="form-control" 
                        :class="{'border-danger': validationErrors[2] }"
                        id="reviewInput" 
                        rows="5" 
                        placeholder="Write your review..."
                        v-model="formdata.review"
                        >
                    </textarea>
                <span>{{ errors[0] }}</span>
                </validation-provider>
            </div>
            <div class="form-row row">
                <div class="container">
                    <div class="text-center">
                        <button class="btn btn-blue text-white" type="submit" v-if="!loading">{{ submitText }}</button>
                        <SyncLoader :loading="loading" class="top-spacer-sm"/>
                    </div>
                </div>    
            </div>
        </form>
        <ErrorDisplay :errorData="errorData" :class="{ 'd-none' : !errorOccured }"/>
    </div>
</template>

<script>
    import { ValidationProvider, extend } from 'vee-validate';
    import { required } from 'vee-validate/dist/rules';

    import StarRating from 'vue-star-rating';
    import SyncLoader from'../Loading/SyncLoad';
    import ErrorDisplay from '../Error/ErrorDisplay';
    import serviceLocator from '../../services/serviceLocator';
    
    const reviewService = serviceLocator.services.reviewService;

    extend('required', {
      ...required,
      message: 'This field is required'
    });

    export default {
        name: "ReviewForm",
        props: ['products'],
        data() {
            return {
                formdata: {
                    rating: 0,
                    product: '5ebe185e3a273b12f6c742b5',
                    hasSubmitted: false
                },
                validationErrors: [],
                ratingBorderColor: '',
                loading: false,
                errorOccured: false,
                errorData: {},
                submitText: 'Submit'
            }
        },
        components: {
            ValidationProvider,
            StarRating,
            SyncLoader,
            ErrorDisplay,
        },
        methods: {
            requestAdd: async function() {
                this.hasSubmitted = true;
                this.errorOccured = false;
                if(this.valid()) {
                    this.loading = true;
                    try {
                        await reviewService.addReview(
                            this.formdata.username, 
                            this.formdata.rating, 
                            this.formdata.review, 
                            this.formdata.product
                        );
                        this.loading = false;
                        this.$router.push({
                            name: 'Store'
                        });
                    } catch(err) {
                        this.loading = false;
                        this.errorOccured = true;
                        this.submitText = 'Try again';
                        this.errorData = {
                            message: 'Error occured while trying send the review to the server',
                        }
                    }
                }
            },
            valid: function() {
                this.validationErrors = [
                    false,
                    false,
                    false
                ];
                if(this.hasSubmitted === true) {
                    var valid = true;
                
                    if(this.formdata.username == null) {
                        this.validationErrors[0] = true;
                        valid = false;
                    }

                    if(this.formdata.product == null) {
                        this.validationErrors[1] = true;
                        valid = false;
                    } 

                    if(this.formdata.rating === 0) {
                        this.ratingBorderColor = '#DC3545';
                        valid = false;
                    }

                    if(this.formdata.review == null) {
                        this.validationErrors[2] = true;
                        valid = false;
                    }

                    return valid;
                }
            },
            ratingSelected: function() {
                this.ratingBorderColor = '';
            }
        }
    }
</script>

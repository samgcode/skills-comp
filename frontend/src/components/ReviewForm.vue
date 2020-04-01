<template>
    <div class="top-spacer">
        <h2>Write a review</h2>
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
                        <button class="btn btn-primary text-white" type="submit">{{ submitText }}</button>
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
    import StarRating from 'vue-star-rating';
    import SyncLoader from'./SyncLoad';
    import ErrorDisplay from './ErrorDisplay';

    import { required } from 'vee-validate/dist/rules';

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
                    product: '5e7e27373063d33329015b93',
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
            ErrorDisplay
        },

        methods: {
            requestAdd: function() {
                this.hasSubmitted = true;
                this.errorOccured = false;
                if(this.valid()) {
                    this.loading = true;
                    //create a new http request
                    let xhr = new XMLHttpRequest();
                    
                    xhr.open('POST', 'http://localhost:3000/reviews');
                    
                    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    xhr.send(
                        `username=${this.formdata.username}
                        &rating=${this.formdata.rating}
                        &review=${this.formdata.review}
                        &item=${this.formdata.product}`
                    );
                    xhr.onload = () => {
                        if(xhr.status != 201) {
                            this.loading = false;
                            this.errorOccured = true;
                            this.submitText = 'Try again';
                            this.errorData = {
                                message: 'Error occured while trying send the review to the server',
                            }
                        } else {
                            this.loading = false;
                            window.location.replace('http://localhost:8080/#/Store');
                        }
                    };
                    console.log('xhr:', xhr);
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
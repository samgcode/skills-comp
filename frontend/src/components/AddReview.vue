<template>
    <div class="top-spacer">
        <h2>Write a review</h2>
        <form @submit.prevent="requestAdd()">
            <div class="from-row row">
                <div class="from-group col-md-6">
                    <label for="usernameInput">Username</label>
                    <validation-provider rules="required" data-vv-validate-on="submit" v-slot="{ errors }">
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
                <div class="from-group col-md-3"> 
                    <label for="productInput">Product</label>
                    <validation-provider rules="required" data-vv-validate-on="submit" v-slot="{ errors }">
                        <select 
                            id="productInput" 
                            class="form-control"
                            :class="{'border-danger': validationErrors[1] }"
                            v-model="formdata.product"
                            >
                                <option selected>Bio degradable spoons pack</option>
                                <option>Colored spoons pack</option>
                                <option>Single spoon</option>
                                <option>Colored spoon</option>
                        </select>
                    <span>{{ errors[0] }}</span>
                    </validation-provider>
                </div>
                <div class="from-group col-md-3"> 
                    <label for="ratingInput">Rating</label>
                    <validation-provider rules="required" data-vv-validate-on="submit" v-slot="{ errors }">
                        <select 
                            id="ratingInput" 
                            class="form-control"
                            :class="{'border-danger': validationErrors[2] }"
                            v-model="formdata.rating"
                            >
                                <option selected>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                        </select>
                    <span>{{ errors[0] }}</span>
                    </validation-provider>
                </div>
            </div>
            <div class="form-group">
                <label for="reviewInput">Review</label>
                <validation-provider rules="required" data-vv-validate-on="submit" v-slot="{ errors }">
                    <textarea 
                        class="form-control" 
                        :class="{'border-danger': validationErrors[3] }"
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
                        <button class="btn btn-primary text-white" type="submit">Submit</button>
                    </div>
                </div>    
            </div>
        </form>
    </div>
</template>

<script>
    import { ValidationProvider, extend } from 'vee-validate';
    
    import { required } from 'vee-validate/dist/rules';

    extend('required', {
      ...required,
      message: 'This field is required'
    });

    export default {
        name: "AddReview",
        data() {
            return {
                formdata: [],
                validationErrors: []
            }
        },

        components: {
            ValidationProvider
        },

        methods: {
            requestAdd: function() {
                if(this.valid()) {
                    //create a new http request
                    let xhr = new XMLHttpRequest();

                    xhr.open('POST', 'http://localhost:3000/reviews');
                    
                    this.formatData();

                    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    xhr.send(
                        `username=${this.formdata.username}
                        &rating=${this.formdata.rating}
                        &review=${this.formdata.review}
                        &product=${this.formdata.product}`
                    );

                    xhr.onload = () => {
                        if(xhr.status != 201) {
                            alert(`Error ${xhr.status}: ${xhr.statusText}`);
                        } else {
                            window.location.replace('http://localhost:8080/#/Store');
                        }
                    };
                }
            },

            formatData: function() {
                switch(this.formdata.product) {
                    case 'Bio degradable spoons pack': 
                        this.formdata.product = 1;
                        break;
                    case 'Colored spoons pack': 
                        this.formdata.product = 2;
                        break;
                    case 'Single spoon': 
                        this.formdata.product = 3;
                        break;
                    case 'Colored spoon': 
                        this.formdata.product = 4;
                        break;
                }
            },

            valid: function() {
                this.validationErrors = [
                    false,
                    false,
                    false,
                    false
                ];
                var valid = true;
                
                if(this.formdata.username == null) {
                    this.validationErrors[0] = true;
                    valid = false;
                }

                if(this.formdata.product == null) {
                    this.validationErrors[1] = true;
                    valid = false;
                } else {

                }

                if(this.formdata.rating == null) {
                    this.validationErrors[2] = true;
                    valid = false;
                }

                if(this.formdata.review == null) {
                    this.validationErrors[3] = true;
                    valid = false;
                }

                return valid;
            }
        }
    }
</script>
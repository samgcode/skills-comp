<template>
    <div class="root top-spacer">
        <LoadingIndicator :loading="loading"/>
        <ReviewForm :products="products" :class="{ 'd-none': loading }"/>
        <Error :error="databaseError" :class="{ 'd-none': !isError }"/>
    </div>      
</template>

<script>
import ReviewForm from './ReviewForm';
import Error from './Error';
import axios from 'axios';
import LoadingIndicator from './LoadingIndicator';

export default {
    name: 'AddReview',
    data: function() {
        return {
            products: [],
            isError: false,
            databaseError: {},
            loading: true
        }
    },

    components: {
        ReviewForm,
        Error,
        LoadingIndicator
    },
    mounted() {
        axios.get("http://localhost:3000/items")
        .then( 
            response => (this.products = response.data.map( item => {
                item.Id = this.itemid;
                this.itemid++;
                this.loading = false;
                return item;
            }))
        ).catch((err) => {
            this.isError = true;
            this.databaseError = err.message;
        });

    }
}
</script>
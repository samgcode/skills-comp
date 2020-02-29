<template>
    <div class="root">
        <ReviewForm :products="products" :class="{ 'd-none': isError }"/>
        <Error :error="databaseError" :class="{ 'd-none': !isError }"/>
    </div>      
</template>

<script>
import ReviewForm from './ReviewForm';
import Error from './Error';
import axios from 'axios';

export default {
    name: 'AddReview',
    data: function() {
        return {
            products: [],
            isError: true,
            databaseError: {}
        }
    },

    components: {
        ReviewForm,
        Error
    },
    mounted() {
        axios.get("http://localhost:3000/items")
        .then( 
            response => (this.products = response.data.map( item => {
                item.Id = this.itemid;
                this.itemid++;
                this.isError = false;
                return item;
            }))
        ).catch((err) => {
            this.isError = true;
            this.databaseError = err.message;
        });

    }
}
</script>
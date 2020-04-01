<template>
    <div class="root top-spacer">
        <OrbitLoader :loading="loading"/>
        <ReviewForm :products="products" :class="{ 'd-none': loading }"/>
    </div>      
</template>

<script>
import ReviewForm from './ReviewForm';
import axios from 'axios';
import OrbitLoader from './OrbitLoader';

export default {
    name: 'AddReview',
    data: function() {
        return {
            products: [],
            loading: true
        }
    },

    components: {
        ReviewForm,
        Error,
        OrbitLoader
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
        );

    }
}
</script>
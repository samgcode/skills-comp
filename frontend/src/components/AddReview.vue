<template>
    <div class="root top-spacer">
        <OrbitLoader :loading="loading"/>
        <ReviewForm :products="products" :class="{ 'd-none': !displayForm }"/>
        <ErrorDisplay :errorData="errorData" :class="{ 'd-none' : !errorOccured }"/>
    </div>      
</template>

<script>
import ReviewForm from './ReviewForm';
import axios from 'axios';
import ErrorDisplay from './ErrorDisplay';
import OrbitLoader from './OrbitLoader';

export default {
    name: 'AddReview',
    data: function() {
        return {
            products: [],
            loading: true,
            displayForm: false,
            errorOccured: false,
            errorData: {}
        }
    },
    components: {
        ReviewForm,
        ErrorDisplay,
        OrbitLoader
    },
    async mounted() {
        this.errorOccured = false;
        await axios.get(`http://localhost:3000/items`)
        .then( 
            response => (this.products = response.data.map( item => {
                item.Id = this.itemid;
                this.itemid++;
                this.loading = false;
                return item;
            }))
        ).catch((err) => {
            this.loading = false;
            this.errorOccured = true;
            this.errorData = {
                message: 'Error occured while trying to fetch review form'
            }
        });
        if(!this.errorOccured && !this.loading) {
            this.displayForm = true;
        }
    }
}
</script>
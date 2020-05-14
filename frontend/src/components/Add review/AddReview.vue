<template>
    <div class="root top-spacer">
        <OrbitLoader :loading="loading"/>
        <ReviewForm :products="products" :class="{ 'd-none': !displayForm }"/>
        <ErrorDisplay :errorData="errorData" :class="{ 'd-none' : !errorOccured }"/>
    </div>      
</template>

<script>
import ReviewForm from './ReviewForm';
import ErrorDisplay from '../Error/ErrorDisplay';
import OrbitLoader from '../Loading/OrbitLoader';
import serviceLocator from '../../services/serviceLocator';

const itemService = serviceLocator.services.itemService;

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
        try {
            this.products = await itemService.getItems();
            this.loading = false;
        } catch(err) {
            this.loading = false;
            this.errorOccured = true;
            this.errorData = {
                message: 'Error occured while trying to fetch review form'
            }
        }
        if(!this.errorOccured && !this.loading) {
            this.displayForm = true;
        }
    }
}
</script>
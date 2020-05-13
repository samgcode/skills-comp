<template>
    <div class="container top-spacer-md">
      <div class="jumbotron light-jumbotron">
        <div class="container">
          <h2>Rapid Air</h2>
          <h5>Products</h5>
          <div class="text-center">
            <router-link :to="{ name: 'AddReview' }" class="lead btn btn-primary">Write a review</router-link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-7">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h4>A little about us</h4>
              <p>We are dedicated to fast delivery, and high quality air</p>
            </div>
          </div>
        </div>
      </div>
      
      <ErrorDisplay :errorData="errorData" :class="{ 'd-none' : !errorOccured }"/>

      <OrbitLoader :loading="loading"/>

      <div class="container">
        <ItemList :items="this.items"/>
      </div>
    </div>
</template>

<script>
  import ItemList from './ItemList';
  import ErrorDisplay from '../Error/ErrorDisplay';
  import OrbitLoader from '../Loading/OrbitLoader';
  import ItemService from '../../services/itemService';
  
  const itemService = new ItemService();

  export default {
    name: 'Store',
    data: function() {
      return {
        items: [],
        frontendId: 0,
        loading: true,
        errorOccured: false,
        errorData: {}
      }
    },
    components: {
      ItemList,
      ErrorDisplay,
      OrbitLoader
    },
    async mounted() {
      try {
        this.items = await itemService.getItems();
        this.loading = false;
      } catch(err) {
        this.loading = false;
        this.errorOccured = true;
        this.errorData = {
          message: 'Error occured while trying to fetch items',
        }
        console.log(err);
      }
    },
  }
</script>

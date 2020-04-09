<template>
    <div class="container top-spacer small">
      <div class="jumbotron light-jumbotron">
        <div class="container">
          <h2>Bio-spoons</h2>
          <h4>Products</h4>
          <div class="text-center">
            <router-link :to="{ name: 'AddReview' }" class="lead btn btn-primary" style="color: white;">Write a review</router-link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-7">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h4>A little about us</h4>
              <p>We are dedicated to fast delivery, and high quality spoons</p>
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
  import axios from 'axios';
  import ErrorDisplay from './ErrorDisplay';
  import OrbitLoader from './OrbitLoader';

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
    mounted() {
      axios.get(`http://localhost:3000/items`)
      .then( 
        response => (this.items = response.data.map( item => {
          item.Id = this.frontendId;
          this.frontendId++;
          this.loading = false;
          return item;
        }))
      ).catch((err) => {
        this.loading = false;
        this.errorOccured = true;
        this.errorData = {
          message: 'Error occured while trying to fetch items',
        }
        console.log(this.errorData);
      });
    },
    methods: {
      
    }
  }
</script>
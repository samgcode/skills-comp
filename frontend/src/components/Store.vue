<template>
    <div class="container top-spacer small">
      <div class="jumbotron">
        <div class="container">
          <h2>Bio-spoons</h2>
          <h4>Reviews</h4>
          <div class="text-center">
            <router-link :to="{ name: 'AddReview' }" class="lead btn btn-primary" style="color: white;">Write a review</router-link>
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col-md-7">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h4>Bio-spoons information</h4>
              <p>We are dedicated to fast delivery, and high quality spoons</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <ItemList :items="this.items"/>
      </div>
    </div>
</template>

<script>
  import ItemList from './ItemList';
  import axios from 'axios';

  export default {
    name: 'Store',
    data: function() {
      return {
        items: [],
        itemid: 0
      }
    },
    
    components: {
      ItemList
    },
    mounted() {
      axios.get("http://localhost:3000/items")
      .then( 
        response => (this.items = response.data.map( item => {
          item.Id = this.itemid;
          this.itemid++;
          return item;
        }))
      );

    },
    methods: {
      
    }
  }
</script>
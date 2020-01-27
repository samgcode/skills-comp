<template>
    <div class="container" style="margin-top: 3em">
      <div class="jumbotron">
        <div class="container">
          <h2>Bio-spoons</h2>
          <h4>Reviews</h4>
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

      <div class="row"> 
        <ReviewList :reviews="this.reviews"/>
      </div>
    </div>
</template>

<script>
  import ReviewList from './ReviewList';
  import axios from 'axios';

  export default {
    name: 'Store',
    data: function() {
      return {
        reviews: [
            {
                "username": "Jeff",
                "review": "This is a review by a person that has a rating and this is a very good company yes yes.",
                "rating": 4,
                "id": 0
            },

            {
                "username": "Stev",
                "review": "Yes yes very good, very cool yes good would spoon again",
                "rating": 5,
                "id": 1
            }
        ],
        reviewId: 0,
      }
    },
    
    components: {
      ReviewList
    },
    mounted() {
      // axios.get("file://./")
      // .then( 
      //   response => (this.reviews = response.data.map( item => {
      //     item.Id = this.reviewId;
      //     this.reviewId++;
      //     return item;
      //   }))
      // );

    }
  }
</script>
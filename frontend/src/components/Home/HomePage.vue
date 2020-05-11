<template>
  <div class="container top-spacer small">

    <HomeCarousel />

    <hr class="featurette-divider top-spacer bottom-spacer">
    <div class="row">
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading"><u>Learn about our company</u></h2>
          <p class="lead">See what we are about on our about page</p>
          <router-link :to="{ name: 'About' }" class="lead btn btn-primary">About us</router-link>
        </div>
        <div class="col-md-5">
          <img src="@/assets/rainbowSpoons.jpg" alt="Image of one of our spoons" 
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500">
        </div>
      </div>
    </div>
    <hr style="margin-top: 5em; margin-bottom: 5em;" class="featurette-divider">
    <div class="row">
      <div class="row featurette">
        <div class="col-md-5">
          <img src="@/assets/manySpoons.jpg" alt="Image of one of our spoons" 
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500">
        </div>
        <div class="col-md-7 right-align">
          <h2 class="featurette-heading"><u>See some of our reviews</u></h2>
          <p class="lead">See what people are saying about our company</p>
          <router-link :to="{ name: 'Store' }" class="lead btn btn-primary">Reviews</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from './HomeCarousel';

  export default {
    name: 'Home',
    components: {
      HomeCarousel,
    }
  }
</script>

<style scoped>
.right-align {
  text-align: right;
}
</style>
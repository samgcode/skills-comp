<template>
  <div class="container top-spacer-md">
    <div class="title-card">
      <section class="jumbotron text-center light-jumbotron">
        <div class="container">
          <h1><u>RapidAir</u></h1>
          <p class="lead"><b>A better way to breathe</b></p>
        </div>
      </section>
    </div>
    
    <HomeCarousel />

    <hr class="featurette-divider top-spacer-md bottom-spacer-md">
    <div class="container marketing">
      <section class="text-center">
          <h4 class="text-center"><u>We are committed to delivering the best air possible.</u></h4>
          <p>
            Remember the days when people laughed off bottled water?
            <br>
            “It comes out of the tap, why would I want a bottle?”
            <br>
            The truth is we have begun to appreciate the clean, pure and refreshing taste of quality water.
          </p>
          <p class="lead"><b>Air is going the same direction.</b></p>
      </section>
    </div>
    <BottlingLocations />
    
    <hr class="featurette-divider top-spacer-md bottom-spacer-md">
    <div class="row">
      <div class="row featurette">
        <div class="col-md-5">
          <img src="@/assets/manySpoons.jpg" alt="Image of one of our spoons" 
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500">
        </div>
        <div class="col-md-7 right-align">
          <h2 class="featurette-heading"><u>Read our customers reviews</u></h2>
          <p class="lead">See what people are saying about our company</p>
          <router-link :to="{ name: 'Store' }" class="lead btn btn-primary">Reviews</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from './HomeCarousel';
import BottlingLocations from './BottlingLocations'

  export default {
    name: 'Home',
    components: {
      HomeCarousel,
      BottlingLocations,
    }
  }
</script>

<style scoped>
.right-align {
  text-align: right;
}
</style>
<template>
  <div class="container">
    <div id="homeCarousel" class="carousel slide top-spacer" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#homeCarousel" data-slide-to="0" class="active"><img src="@/assets/plateIcon.png" class="d-block w-10" height="6" alt="..."></li>
        <li data-target="#homeCarousel" data-slide-to="1"><img src="@/assets/plateIcon.png" class="d-block w-8" height="6" alt="..."></li>
        <li data-target="#homeCarousel" data-slide-to="2"><img src="@/assets/plateIcon.png" class="d-block w-10" height="6" alt="..."></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/horizontalColored.jpeg" class="d-block w-100" height="350" alt="...">
          <div class="carousel-caption text-black">
            <h1 class="text-white"><u>Learn about our company</u></h1>
            <h4>See what our comapany is about on our about page</h4>
            <router-link :to="{ name: 'About' }" class="lead btn btn-primary top-spacer-sm" style="color: white;">Right here</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/horizontalManySpoons.jpg" class="d-block w-100" height="350" alt="...">
          <div class="carousel-caption text-black text-right">
            <h1><u>See some reviews</u></h1>
            <h4>Check out our products and see some reviews of our comapany</h4>
            <div class="text-center">
              <router-link :to="{ name: 'Store' }" class="lead btn btn-primary top-spacer" style="color: white;">Store page</router-link>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/horizontalSpoon.jpg" class="d-block w-100" height="350" alt="...">
          <div class="carousel-caption text-black">
            <h1><u>Get in contact</u></h1>
            <h4>See our operating hours or send us an email</h4>
            <router-link :to="{ name: 'Contact' }" class="lead btn btn-primary top-spacer-md" style="color: white;">Contact page</router-link>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
        <img src="@/assets/forkIcon.png" class="d-block w-40" height="25" alt="...">
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
        <img src="@/assets/spoonIcon.png" class="d-block w-40" height="25" alt="...">
        <span class="sr-only">Next</span>
      </a>
    </div>

    <hr class="featurette-divider top-spacer bottom-spacer">
    <div class="row">
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading"><u>Learn about our company</u></h2>
          <p class="lead">See what we are about on our about page</p>
          <router-link :to="{ name: 'About' }" class="lead btn btn-primary" style="color: white;">About us</router-link>
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
        <div class="col-md-7">
          <h2 class="featurette-heading"><u>See some of our reviews</u></h2>
          <p class="lead">See what people are saying about our company</p>
          <router-link :to="{ name: 'Store' }" class="lead btn btn-primary" style="color: white;">Reviews</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>
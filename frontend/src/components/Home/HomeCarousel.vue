<template>
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
            <router-link :to="{ name: 'About' }" class="lead btn btn-primary top-spacer-sm">About us</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/horizontalManySpoons.jpg" class="d-block w-100" height="350" alt="...">
          <div class="carousel-caption text-black text-right">
            <h1><u>See some reviews</u></h1>
            <h4>Check out our products and see some reviews of our comapany</h4>
            <div class="text-center">
              <router-link :to="{ name: 'Store' }" class="lead btn btn-primary top-spacer">Store page</router-link>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/horizontalSpoon.jpg" class="d-block w-100" height="350" alt="...">
          <div class="carousel-caption text-black">
            <h1><u>Get in contact</u></h1>
            <h4>See our operating hours or send us an email</h4>
            <router-link :to="{ name: 'Contact' }" class="lead btn btn-primary top-spacer-md">Contact page</router-link>
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
</template>

<script>
export default {
    name: "HomeCarousel"
}
</script>
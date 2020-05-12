<template>
    <div id="homeCarousel" class="carousel slide top-spacer" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#homeCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#homeCarousel" data-slide-to="1"></li>
        <li data-target="#homeCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
         <img src="@/assets/glass_bottles_line_2.jpg" class="d-block w-100" height="400" alt="...">
          <div class="carousel-caption text-black">
            <h1 class="light-text"><u>Our bottles</u></h1>
            <h4>Our specially designed bottle allows us to capture and retain the freshness of the contents inside.
            No CFC’s, no propellants.</h4>
            <router-link :to="{ name: 'Store' }" class="lead btn btn-primary top-spacer-sm">Products</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/guy_running_forest_carousel.jpg" class="d-block w-100" height="400" alt="...">
          <div class="carousel-caption text-white">
            <h1><u>our products are good for the environment</u></h1>
            <h4>All RapidAir products are recycleable!</h4>
            <div class="text-center">
              <router-link :to="{ name: 'Store' }" class="lead btn btn-primary top-spacer">Store page</router-link>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/calgary_skyline_carousel_2.jpg" class="d-block w-100" height="400" alt="...">
          <div class="carousel-caption text-white">
            <h1><u>Get in contact</u></h1>
            <h4>See our operating hours or send us an email</h4>
            <router-link :to="{ name: 'Contact' }" class="lead btn btn-primary top-spacer-md">Contact page</router-link>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
        <img src="@/assets/prev_icon.png" class="d-block w-40" height="25" alt="...">
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
        <img src="@/assets/next_icon.png" class="d-block w-40" height="25" alt="...">
        <span class="sr-only">Next</span>
      </a>
    </div>
</template>

<script>
export default {
    name: "HomeCarousel"
}
</script>

<style scoped>
.light-text {
  color: black;
}
</style>
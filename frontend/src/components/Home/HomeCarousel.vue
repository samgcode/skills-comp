<template>
  <!-- <div id="homeCarousel" class="carousel slide top-spacer" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#homeCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#homeCarousel" data-slide-to="1"></li>
      <li data-target="#homeCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
      <img src="@/assets/glass_bottles_line_carousel.jpg" class="d-block img-fluid img-responsive" height="400" alt="Glass bottles in a line">
        <div class="carousel-caption text-black">
          <h1 class="light-text"><u>Our bottles</u></h1>
          <h4>Our specially designed bottle allows us to capture and retain the freshness of the contents inside.
          No CFC’s, no propellants.</h4>
          <router-link :to="{ name: 'Store' }" class="lead btn btn-blue top-spacer-sm">Products</router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/guy_running_forest_carousel.jpg" class="d-block img-fluid  img-responsive" height="400" alt="guy running through a forest">
        <div class="carousel-caption text-white">
          <h2><u>Our products are good for the environment</u></h2>
          <h4>All RapidAir products are recycleable!</h4>
          <div class="text-center">
            <router-link :to="{ name: 'Store' }" class="lead btn btn-blue top-spacer-xsm">Store page</router-link>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/calgary_skyline_carousel_2.jpg" class="d-block img-fluid  img-responsive " height="400" alt="Skyline of the city of calgary">
        <div class="carousel-caption text-white">
          <h1><u>Get in contact</u></h1>
          <h4>See our operating hours or send us an email</h4>
          <router-link :to="{ name: 'Contact' }" class="lead btn btn-blue top-spacer-sm">Contact page</router-link>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
      <img src="@/assets/prev_icon.png" class="d-block w-40" height="25" alt="bottle icon">
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
      <img src="@/assets/next_icon.png" class="d-block w-40" height="25" alt="bottle icon">
      <span class="sr-only">Next</span>
    </a>
  </div> -->
  <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="@/assets/glass_bottles_line_carousel.jpg" width="1100" height="500" alt="Glass bottles in a line">
        <div class="carousel-caption text-black">
          <h1 class="light-text"><u>Our bottles</u></h1>
          <h4>Our specially designed bottle allows us to capture and retain the freshness of the contents inside.
          No CFC’s, no propellants.</h4>
          <router-link :to="{ name: 'Store' }" class="lead btn btn-blue top-spacer-sm">Products</router-link>
        </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/guy_running_forest_carousel.jpg" width="1100" height="500" alt="guy running through a forest">
      <div class="carousel-caption text-white">
        <h2><u>Our products are good for the environment</u></h2>
        <h4>All RapidAir products are recycleable!</h4>
        <div class="text-center">
          <router-link :to="{ name: 'Store' }" class="lead btn btn-blue top-spacer-xsm">Store page</router-link>
        </div>
      </div>  
    </div>
    <div class="carousel-item">
      <img src="@/assets/calgary_skyline_carousel_2.jpg" width="1100" height="500" alt="Skyline of the city of calgary">
      <div class="carousel-caption text-white">
        <h1><u>Get in contact</u></h1>
        <h4>See our operating hours or send us an email</h4>
        <router-link :to="{ name: 'Contact' }" class="lead btn btn-blue top-spacer-sm">Contact page</router-link>
      </div>  
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" role="button" data-slide="prev">
    <img src="@/assets/prev_icon.png" class="d-block w-40" height="25" alt="bottle icon">
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#demo" role="button" data-slide="next">
    <img src="@/assets/next_icon.png" class="d-block w-40" height="25" alt="bottle icon">
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>
export default {
    name: "HomeCarousel",
    mounted() {
      this.$forceUpdate();
      console.log('updated');
    }
}
</script>

<style scoped>
.light-text {
  color: black;
}
.top-spacer-xsm {
  margin-top: 1em
}
.carousel-inner img {
    width: 100%;
    height: 100%;
  }

/* .img-responsive {
  /* width: 100%;
  max-width: 100%;
  max-height: 400px;
  height: auto;
} */
</style>
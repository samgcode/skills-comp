<template>
    <div style="margin-top: 3em">
      <div class="title-card">
        <section class="jumbotron text-center" style="background-color: #5a5a5a; color: #fff">
          <div class="container">
            <h1><u>Bio-spoons</u></h1>
            <p class="lead">Saveing the environment, one spoon at a time.</p>
            <router-link :to="{ name: 'Store' }" class="btn btn-primary">Store page</router-link>
            <router-link :to="{ name: 'Store' }" class="btn btn-secondary">Contact us</router-link>
          </div>
        </section>
      </div>

      <div class="container marketing">
        <div class="row">
          <div class="col-lg-4 text-center">
            <img src="@/assets/SPOON.jpg" alt="Image of one of our spoons" class="bd-placeholder-img rounded-circle" width="140" height="140">
            <h2>Environmental stuff</h2>
            <p>Some stuff about stuff thats environmental</p>
          </div>

          <div class="col-lg-4 text-center">
            <img src="@/assets/usbSpoon.jpg" alt="Image of one of our spoons" class="bd-placeholder-img rounded-circle" width="140" height="140">
            <h2>Energy efficient</h2>
            <p>Some stuff about stuff thats energy efficient</p>
          </div>

          <div class="col-lg-4 text-center">
            <img src="@/assets/rainbowSpoons.jpg" alt="Image of one of our spoons" class="bd-placeholder-img rounded-circle" width="140" height="140">
            <h2>They come in many colors</h2>
            <p>Some stuff about the many colors</p>
            <router-link :to="{ name: 'Store' }" class="btn btn-primary">Store page</router-link>
          </div>
        </div>

        <hr style="margin-top: 5em; margin-bottom: 5em;" class="featurette-divider">
        <div class="row">
          <div class="row featurette">
            <div class="col-md-7">
              <h1 class="featurette-heading"><u>The history of bio-spoons</u></h1>
              <p class="lead">Bio-spoons, first opened its doors in late 2018, and the rest is history.</p>
            </div>
            <div class="col-md-5">
              <img src="@/assets/manySpoons.jpg" alt="Image of one of our spoons" 
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500">
            </div>
          </div>
        </div>
      </div>      
    </div>
</template>

<script>
  export default {
    name: 'About',
    
  }
</script>
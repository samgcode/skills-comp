<template>
    <div>
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
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'About',
    
  }
  // <div class="row">
  //       <h2><u>Bio-spoons</u></h2>
  //       <span style="font-size: 15px">®</span>
  //     </div>
  //     <hr/>
  //     <div class="container">
  //       <h4><u>Our goal</u></h4>
  //       <span>Save the environment, one spoon at a time.</span>
  //       <br>
  //       <img style="margin-top: 1em" src="@/assets/SPOON.jpg" alt="Image of one of our spoons">
  //     </div>

  //     <div class="container">
  //        <div class="">
  //         <h4><u>The history of bio-spoons</u></h4>
  //       </div>
  //       <span>Bio-spoons, first opened its doors in late 2018, and the rest is history.</span>
  //       <br>
  //     </div>

  //     <div class="container"  style="margin-top: 2em">
  //       <h4><u>Where can I buy these spoons?</u></h4>
  //       <span>
  //         You can purchase these spoons in our 
  //         <router-link :to="{ name: 'Store' }" ><u>online store,</u></router-link>
  //         or in select retailers. 
  //         <br> more information, email us at
  //         <router-link :to="{ name: 'Contact' }" ><u>the contact page.</u></router-link>
  //       </span>
  //     </div>
</script>
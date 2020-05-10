<template>
  <div class="container top-spacer">
    <div class="container">
      <div class="jumbotron light-jumbotron">
        <div class="container">
          <h2><u>Contact Bio-spoons</u></h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="card mb-4 shadow-sm col-sm-6 form-card">
        <div class="card-body">
           <form>
            <div class="form-row row">
              <div class="form-group col">
                <label for="nameInput">Name:</label>
                <input 
                  class="form-control" 
                  type="text" 
                  name="nameInput" 
                  id="name-input"
                >
              </div>
            </div>
            <div class="form-row row">
              <div class="form-group col">
                <label for="emailInput">Email:</label>
                <input 
                  class="form-control" 
                  type="email" 
                  name="emailInput" 
                  id="email-input"
                >
              </div>
            </div>
            <div class="form-row row">
              <div class="form-group col">
                <label for="emailInput">Message:</label>
                <textarea 
                  class="form-control" 
                  id="message-input"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div class="container">
              <div class="text-center">
                  <router-link :to="{ name: 'Home' }" class="lead btn btn-primary">Send</router-link>
              </div>
            </div> 
          </form>
        </div>
      </div>
      <div class="card mb-4 shadow-sm col-sm-5">
        <div class="card-body">
          <h3><u>Operating hours</u></h3>
          <h5><u>mon-fri</u> 5am-10pm</h5>
          <h5><u>sat-sun</u> 7am-8pm</h5>
          <br>
          <h3><u>Address</u></h3>
          <h5>19480 45 St SE</h5>
          <h5>Calgary, AB T3M 2P9</h5>
          <embed
            :src="mapSrc"
            class="map"
            frameborder="0"
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data() {
      return {
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.8654037497017!2d-113.94623734358488!3d50.87780320483478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53719d6934f5b179%3A0xf2018c8cb1331291!2sJoane%20Cardinal-Schubert%20High%20School%20%7C%20Calgary%20Board%20of%20Education!5e0!3m2!1sen!2sca!4v1589044397110!5m2!1sen!2sca'
      }
    },
    methods: {
      getImage: function(imageName) {
          var images = require.context('@/assets/', false, /\.png$/);
          return images('./' + imageName + ".png");
      },
    }
  }
</script>

<style scoped>
.form-card {
  margin-right: 2em;
  margin-left: 1.9em;
}
.map {
  width: 80%; 
  height: 18rem;
  border: 0;
}
</style>
<template>
  <div class="container top-spacer">
    <div class="container">
      <div class="jumbotron light-jumbotron">
        <div class="container">
          <h2><u>Contact RapidAir</u></h2>
          <h6>Bottling perfection out in the wilderness is a painstaking and lengthy process, and we'd love to hear from you!</h6>
          <h6>Please use the form to send us your message or ideas. Or simply pop in and say, hi!</h6>
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
          <h5>22 1139 AVE NW</h5>
          <h5>Edmonton AB T5M 2N0</h5>
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
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.07189689373257!2d-113.40038821045306!3d53.58649781587241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a03cc35ab3ac2d%3A0x8d2961a4644eccb2!2s22%20Henry%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5A%202X9!5e0!3m2!1sen!2sca!4v1589327327470!5m2!1sen!2sca'
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

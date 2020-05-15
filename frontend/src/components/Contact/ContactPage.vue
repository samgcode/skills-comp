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
           <form @submit.prevent="submitForm()" @change="validateForm">
            <div class="form-row row">
              <div class="form-group col">
                <label for="nameInput">Name:</label>
                <input 
                  class="form-control" 
                  :class="{'border-danger' : validation[0]}"
                  type="text" 
                  name="nameInput" 
                  id="name-input"
                  v-model="formdata.name"
                >
                <p v-if="validation[0]">Tell us your name so we can know whos emailing us</p>
              </div>
            </div>
            <div class="form-row row">
              <div class="form-group col">
                <label for="emailInput">Email:</label>
                <input 
                  class="form-control" 
                  :class="{'border-danger' : validation[1]}" 
                  name="emailInput" 
                  id="email-input"
                  v-model="formdata.email"
                >
                <p v-if="validation[1]">Please specify a valid email</p>
              </div>
            </div>
            <div class="form-row row">
              <div class="form-group col">
                <label for="emailInput">Message:</label>
                <textarea 
                  class="form-control" 
                  :class="{'border-danger' : validation[2]}"
                  id="message-input"
                  rows="5"
                  v-model="formdata.message"
                ></textarea>
                <p v-if="validation[2]">Give us a suggestion or just say hi!</p>
              </div>
            </div>
            <div class="container">
              <div class="text-center">
                  <button class="btn btn-blue text-white" type="submit">Send</button>
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
            <StoreLocations :btnText="'Other locations'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import StoreLocations from '../Home/StoreLocations';

  export default {
    name: 'Contact',
    components: {
      StoreLocations,
    },
    data() {
      return {
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.07189689373257!2d-113.40038821045306!3d53.58649781587241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a03cc35ab3ac2d%3A0x8d2961a4644eccb2!2s22%20Henry%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5A%202X9!5e0!3m2!1sen!2sca!4v1589327327470!5m2!1sen!2sca',
        formdata: {
          name: '',
          email: '',
          message: '',
        },
        validation: [],
      }
    },
    methods: {
      getImage: function(imageName) {
          var images = require.context('@/assets/', false, /\.png$/);
          return images('./' + imageName + ".png");
      },
      submitForm() {
        if(this.validateForm()) {
          this.$router.push({
            name: 'Home'
          });
        }
      },
      validateForm() {
        this.validation = [
          false,
          false,
          false
        ]
        let valid = true;

        if(this.formdata.name === '') {
          this.validation[0] = true;
          valid = false
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.formdata.email) === false)
        {
          this.validation[1] = true;
          valid = false;
        }
        if(this.formdata.message === '') {
          this.validation[2] = true;
          valid = false;
        }

        return valid;
      }
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

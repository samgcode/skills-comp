<template>
  <div class="container top-spacer">
    <h2>Contact us</h2>
    <div class="row">
      <form class="text-center top-spacer col-md-6">
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
          <div class="col-md-6">
              <router-link :to="{ name: 'Home' }" class="lead btn btn-primary text-white">Send</router-link>
          </div>
        </div> 
      </form>
      <div class="card mb-4 shadow-sm col-md-5 top-spacer">
        <div class="card-body">
          <h3><u>Operating hours</u></h3>
          <h5><u>mon-fri</u> 5am-10pm</h5>
          <br>
          <h5><u>sat-sun</u> 7am-8pm</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    
  }
</script>
<template>
  <div class="container" style="margin-top:5em;">
    <h2>Contact us</h2>
    <form class="text-center" style="margin-top: 3em;">
    <div class="form-row row">
      <div class="form-group col-md-6">
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
      <div class="form-group col-md-6">
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
      <div class="form-group col-md-6">
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
          <router-link :to="{ name: 'Home' }" class="lead btn btn-primary" style="color: white;">Send</router-link>
      </div>
    </div> 
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    
  }
</script>
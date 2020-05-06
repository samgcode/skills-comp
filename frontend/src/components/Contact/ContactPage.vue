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
                  <router-link :to="{ name: 'Home' }" class="lead btn btn-primary text-white">Send</router-link>
              </div>
            </div> 
          </form>
        </div>
      </div>
      <div class="card mb-4 shadow-sm col-sm-5">
        <div class="card-body">
          <h3><u>Operating hours</u></h3>
          <h5><u>mon-fri</u> 5am-10pm</h5>
          <br>
          <h5><u>sat-sun</u> 7am-8pm</h5>
          <br>
          <h3><u>Address</u></h3>
          <h5>420 Spoons road</h5>
          <h5>Spoon town Canada</h5>
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

<style scoped>
.form-card {
  margin-right: 2em;
  margin-left: 1.9em;
}
</style>
<template>
  <div id="main-app" class="container">
    <nav class="navbar navbar-expand-sm navbar-dark fixed-top bg-primary">
      <router-link :to="{ name: 'Home' }" class="navbar-brand">Rapid Air</router-link>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="navbar-collapse collapse" id="mainNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="router-nav-link link-small">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Store' }" class="router-nav-link link-small">Store</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Contact' }" class="router-nav-link link-small">Contact us</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'About' }" class="router-nav-link link-small">About us</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <div class="logo">
            <img src="@/assets/logo.png" class="d-block logo" height="40" alt="logo">
          </div>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
    
    <footer>
      <hr class="top-spacer">
      <div class="bottom-spacer">
        <span>
          If you would like to know more about 
          <router-link :to="{ name: 'About' }"><u>our company,</u></router-link>
             or want to recive aditional information, email us at
          <router-link :to="{ name: 'Contact' }" ><u>the contact page.</u></router-link>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'MainApp',
  }
</script>

<style scoped>
.navbar {
  font-size: 120%;
}
.navbar-brand {
  color: #7DFF31;
  font-size: 160%;
}
.navbar-brand:focus {
  color: #7DFF31;
}
.router-nav-link {
  padding-left: 0.2em;
  padding-right: 0.2em;
  color: #0044ff;
}
.router-link-exact-active.link-small {
  color: #7DFF31;
  font-size: 105%;
  text-decoration: underline;
  border-left: 1px grey;
  border-left-style: dotted;
  border-right: 1px grey;
  border-right-style: dotted;
  padding-left: 0.3em;
  padding-right: 0.3em;
}
</style>

<style>
.router-link {
  color: white;
}
.dark-jumbotron {
    background-color: #008cff;
    color: #fff;
}
.light-jumbotron {
    background-color: #7DFF31;
    color: #000;
}
.light-bg {
  background-color: #7DFF31;
}
.top-spacer {
    margin-top: 6em;
}
.top-spacer-md {
    margin-top: 3.8em;
}
.top-spacer-sm {
    margin-top: 2em;
}
.bottom-spacer {
    margin-bottom: 5em;
}
.bottom-spacer-md {
    margin-bottom: 3.5em;
}
.bottom-spacer-sm {
    margin-bottom: 2em;
}
.text-white {
    color: white;
}
.text-black {
    color: black;
}
.center-page {
    margin-left: 45%;
    margin-right: 55%;
}
.btn-blue {
  color: black;
  background-color: #007bff;
}
</style>

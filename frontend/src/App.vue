<template>
  <div id="main-app" class="container">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Bio-spoons</a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="mainNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Store' }" class="nav-link">Store</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Contact' }" class="nav-link">Contact us</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'About' }" class="nav-link">About us</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
    <footer>
      <hr class="top-spacer">
      <div class="bottom-spacer">
        <span>
          If you would like to know more about 
          <router-link :to="{ name: 'About' }" ><u>our company,</u></router-link>
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

<style>
router-link {
  color: white;
}

.dark-jumbotron {
    background-color: #3CBF11;
    color: #fff;
}
.light-jumbotron {
    background-color: #7DFF31;
    color: #000;
}
.top-spacer {
    margin-top: 5em;
}
.top-spacer-md {
    margin-top: 3em;
}
.top-spacer-sm {
    margin-top: 1.5em;
}
.bottom-spacer {
    margin-bottom: 5em;
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
</style>

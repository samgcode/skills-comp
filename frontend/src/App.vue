<template>
  <div id="main-app" class="container">
    <nav class="navbar navbar-expand-lg navbar-secondary" style="background-color: #E6E6E6">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'Home' }" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
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
      <hr style="margin-top: 5em">
      <div>
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
    data: function() {
      return {

      }
    }
  }
</script>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import StarRating from 'vue-star-rating';

import App from './App';
import router from './router';
import mainCSS from './main.css'; //this is required untill styles are added in their own components

Vue.config.productionTip = false;

extend('required', {
  ...required,
  message: 'This field is required'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App,
    ValidationProvider,
    StarRating 
  },
  template: '<App/>'
});

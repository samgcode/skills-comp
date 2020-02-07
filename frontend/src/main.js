// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import mainCSS from './main.css';

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
    ValidationProvider 
  },
  template: '<App/>'
});

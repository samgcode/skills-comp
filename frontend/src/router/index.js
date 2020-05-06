import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home/HomePage';
import Store from '@/components/Store/StorePage';
import Contact from '@/components/Contact/ContactPage'
import About from '@/components/About/AboutPage';
import AddReview from '@/components/Add review/AddReview';

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Store',
        name: 'Store',
        component: Store
    },
    {
      path: '/AddReview',
      name: 'AddReview',
      component: AddReview
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/About',
        name: 'About',
        component: About
    }
  ]
});

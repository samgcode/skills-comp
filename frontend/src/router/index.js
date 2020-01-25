import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Store from '@/components/Store';
import Contact from '@/components/Contact'
import About from '@/components/About';

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

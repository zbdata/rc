
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('bootstrap');
require('admin-lte');

window.Vue = require('vue');
import { Form, HasError, AlertError } from 'vform';
import moment from 'moment';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

window.axios = require('axios');
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

const swal = require('sweetalert2');
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
window.toast = toast;
window.swal = swal;  

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

Vue.filter('upText', function (text) {
    return text.toUpperCase();
});

Vue.filter('myDate', function(formatDate){
    return moment(formatDate).format('MMMM Do YYYY');
    }
);

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue') },
    { path: '/profile', component: require('./components/Profile.vue') },
    { path: '/users', component: require('./components/Users.vue') },
    { path: '/contracts', component: require('./components/Contracts.vue') },
    { path: '/companies', component: require('./components/Companies.vue') }
];

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    router
});

//import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue';
import Login from './Login.vue';
import Delivery from './Delivery.vue';
import Finish from './Finish.vue';
import CustomerInfo from './CustomerInfo.vue';
//import store from './store';
// import SearchCustomer from './components/SearchCustomer.vue';

Vue.use(Router);
// const routes = [
//   {path: '/searchCustomer', component: SearchCustomer}
// ];
 
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
     
      
    },
    {
      path: '/Delivery',
      name: 'Delivery',
      component: Delivery
    },
    {
      path: '/Finish',
      name: 'Finish',
      component: Finish
    },
    {
      path: '/CustomerInfo',
      name: 'CustomerInfo',
      component: CustomerInfo
    }
  ]
})
  
export default router;
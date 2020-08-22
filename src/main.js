import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire';
import 'firebase/firestore'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store.js'
import firebase from 'firebase'
import vSelect from 'vue-select'
import 'vuetify/dist/vuetify.min.css'




Vue.use(VueFire);
Vue.use(Vuetify);
Vue.use(BootstrapVue)
Vue.component('vue-select', vSelect)

import 'vue-select/dist/vue-select.css';

let app

const initialize = () => {
  if (!app) {
    app = new Vue({
    router,
    store,
    render: h => h(App)
    }).$mount('#app')
  } 
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
  } else {
    store.commit('setCurrentUser', null)
  }
  initialize()
})

// โหลด App มาแสดง ละให้ App ไปโหลดไฟล์อื่นใส่ router-view
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




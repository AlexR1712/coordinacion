// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import jQuery from 'jquery'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

/* eslint-disable no-new */
window.$ = jQuery
window.jQuery = jQuery
Bootstrap
Vue.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

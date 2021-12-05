import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueTheMask from 'vue-the-mask'
import VueToast from 'vue-toast-notification';
import Clipboard from 'v-clipboard'
 

import 'vue-toast-notification/dist/theme-sugar.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(VueTheMask)
Vue.use(BootstrapVue);
Vue.use(VueToast);
Vue.use(Clipboard)


axios.defaults.baseURL = 'http://localhost:5000/api';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

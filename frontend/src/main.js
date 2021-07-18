import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueTheMask from 'vue-the-mask'


import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueTheMask)
Vue.use(BootstrapVue);


axios.defaults.baseURL = 'http://localhost:5000/api';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

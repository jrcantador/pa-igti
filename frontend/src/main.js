import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueTheMask from 'vue-the-mask'
import VueToast from 'vue-toast-notification';


import 'vue-toast-notification/dist/theme-sugar.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueTheMask)
Vue.use(BootstrapVue);
Vue.use(VueToast);


axios.defaults.baseURL = 'http://localhost:5000/api';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

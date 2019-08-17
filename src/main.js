import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/index';
import vuetify from './plugins/vuetify';

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import './assets/style.scss'

Vue.use(Vuetify);
Vue.config.productionTip = false;



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');

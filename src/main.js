import Vue from 'vue';
import App from './App';
import router from './router';
import { createProvider } from './vue-apollo';

import './assets/styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

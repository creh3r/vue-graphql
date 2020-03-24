import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/Home';
import Details from '@/Details';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details,
      props: true,
    },
  ],
});

import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/views/TheHome.vue';
import vue from './vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  ...vue,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(Vue.$myProperty);
  Vue.$myProperty = to.name;
  next();
});

export default router;

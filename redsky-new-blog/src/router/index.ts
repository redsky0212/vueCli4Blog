import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/views/TheHome.vue';
import vue from './vue';
import javascript from './javascript';
import project from './project';
import test from './test';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
  },
  ...vue,
  ...javascript,
  ...project,
  ...test,
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  Vue.$pageTitle = to.name || '';
  console.log(Vue.$pageTitle);
  next({ params: { title: Vue.$pageTitle } });
});

export default router;

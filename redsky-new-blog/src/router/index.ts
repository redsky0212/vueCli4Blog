import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/views/TheHome.vue';
import Frontend from './frontend';
import vue from './vue';
import javascript from './javascript';
import project from './project';
import test from './test';
import css from './css';
import htmldom from './htmldom';
import vscode from './vscode';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
  },
  ...Frontend,
  ...vue,
  ...css,
  ...htmldom,
  ...javascript,
  ...project,
  ...test,
  ...vscode,
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  Vue.$pageTitle = to.name || '';
  console.log(Vue.$pageTitle);
  console.log(to.path);
  console.log(to.query.eventId);
  // next({ params: { title: Vue.$pageTitle } });
  next();
});

export default router;

export default [
  {
    path: '/vue/tip/singlefilecomponent/data',
    name: 'data-tip',
    component: () => import('../views/vue/tip/singleFileComponent/TheData.vue'),
  },
  {
    path: '/vue/tip/etc/globalproperty',
    name: '전역 메소드 및 속성',
    component: () => import('../views/vue/tip/etc/전역메소드변수.vue'),
  },
];

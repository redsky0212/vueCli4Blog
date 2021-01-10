export default [
  {
    path: '/vue/start/preferences',
    name: '환경설정',
    component: () => import('@/views/vue/start/ThePreferences.vue'),
  },
  {
    path: '/vue/tip/singlefilecomponent/data',
    name: '컴포넌트 Data',
    component: () => import('@/views/vue/tip/singleFileComponent/TheData.vue'),
  },
  {
    path: '/vue/tip/skill/slot',
    name: 'Slot',
    component: () => import('@/views/vue/skill/TheSlot.vue'),
  },
  {
    path: '/vue/tip/etc/globalproperty',
    name: '전역 메소드 및 속성',
    component: () => import('@/views/vue/tip/etc/전역메소드변수.vue'),
  },
];

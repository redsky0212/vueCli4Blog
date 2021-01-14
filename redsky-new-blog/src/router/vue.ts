export default [
  {
    path: '/vue/start/preferences',
    name: '환경설정',
    component: () => import('@/views/vue/start/ThePreferences.vue'),
  },
  {
    path: '/vue/singlefilecomponent/data',
    name: '컴포넌트 Data',
    component: () => import('@/views/vue/tip/singleFileComponent/TheData.vue'),
  },
  {
    path: '/vue/skill/slot',
    name: 'Slot',
    component: () => import('@/views/vue/skill/TheSlot.vue'),
  },
  {
    path: '/vue/skill/classAndStyle',
    name: 'class 와 style 적용',
    component: () => import('@/views/vue/skill/ClassAndStyle.vue'),
  },
  {
    path: '/vue/skill/computedAndWatch',
    name: 'computed 와 watch',
    component: () => import('@/views/vue/skill/ComputedAndWatch.vue'),
  },
  {
    path: '/vue/skill/ifElseShow',
    name: '조건문(v-if, v-show)',
    component: () => import('@/views/vue/skill/IfElseShow.vue'),
  },
  {
    path: '/vue/skill/for',
    name: '반복문(v-for)',
    component: () => import('@/views/vue/skill/For.vue'),
  },
  {
    path: '/vue/tip/etc/globalproperty',
    name: '전역 메소드 및 속성',
    component: () => import('@/views/vue/tip/etc/전역메소드변수.vue'),
  },
];

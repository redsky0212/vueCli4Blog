export default [
  {
    path: '/project/2020/hyundaicard3',
    name: '현대카드 앱 3.0',
    component: () => import('@/views/project/2020/HyundaiCardApp3_0.vue'),
  },
  {
    path: '/project/2020/VueUI',
    name: 'vue.js UI 컴포넌트 개발',
    component: () => import('@/views/project/2020/VueUI.vue'),
  },
  {
    path: '/project/2020/NHNonghyupBank',
    name: 'NH농협은행 개인종합 자산관리(PFM)',
    component: () => import('@/views/project/2020/NHNonghyupBank.vue'),
  },
  {
    path: '/project/2021/hyundaicardadvancement',
    name: '현대카드앱 NextApp (고도화, 고메위크)',
    component: () => import('@/views/project/2021/HyundaiCardAdvancement.vue'),
  },
];

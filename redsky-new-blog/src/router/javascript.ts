export default [
  {
    path: '/javascript/standard/array',
    name: 'javascript Array 객체',
    component: () => import('@/views/javascript/standard/TheArray.vue'),
  },
  {
    path: '/javascript/events/standardevent',
    name: 'javascript 표준 이벤트',
    component: () => import('@/views/javascript/events/StandardEvent.vue'),
  },
  {
    path: '/javascript/events/bubbling',
    name: '이벤트 버블링, 캡처링에 대하여',
    component: () => import('@/views/javascript/events/BubblingCapturing.vue'),
  },
  {
    path: '/javascript/events/touchevent',
    name: '모바일 터치 이벤트 관련',
    component: () => import('@/views/javascript/events/TouchEvent.vue'),
  },
];

export default [
  {
    path: '/frontend/understanddevelop',
    name: '프론트앤드 개발환경이해',
    component: () => import('@/views/frontend/UnderstandDevelop.vue'),
  },
  {
    path: '/frontend/understandwebpack',
    name: '웹팩이해하기',
    component: () => import('@/views/frontend/UnderstandWebpack.vue'),
  },
];

export default [
  {
    path: '/vue/start/preferences',
    name: '환경설정',
    component: () => import('@/views/vue/start/ThePreferences.vue'),
  },
  {
    path: '/vue/start/dotenv',
    name: '.env',
    component: () => import('@/views/vue/start/DotEnv.vue'),
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
    path: '/vue/skill/plugin',
    name: '전역기능 만들기(Plugin)',
    component: () => import('@/views/vue/skill/ThePlugin.vue'),
  },
  {
    path: '/vue/skill/vmodel',
    name: 'v-model이란?, 사용법',
    component: () => import('@/views/vue/skill/VModel.vue'),
  },
  {
    path: '/vue/skill/dynamicComponent',
    name: '동적, 비동기 콤포넌트',
    component: () => import('@/views/vue/skill/DynamicComponent.vue'),
  },
  {
    path: '/vue/router/navigationGuards',
    name: '라우터 네비게이션 가드',
    component: () => import('@/views/vue/router/NavigationGuards.vue'),
  },
  {
    path: '/vue/router/meta',
    name: '라우트 메타 필드',
    component: () => import('@/views/vue/router/Meta.vue'),
  },
  {
    path: '/vue/tip/etc/globalproperty',
    name: '전역 메소드 및 속성',
    component: () => import('@/views/vue/tip/etc/전역메소드변수.vue'),
  },
  {
    path: '/vue/tip/etc/buildtip',
    name: 'Vue 프로젝트 빌드',
    component: () => import('@/views/vue/tip/etc/BuildTip.vue'),
  },
  {
    path: '/vue/tip/etc/ajaxDeduplication',
    name: 'Ajax 중복요청 대처방법',
    component: () => import('@/views/vue/tip/etc/AjaxDeduplication.vue'),
  },
  {
    path: '/vue/tip/etc/setScss',
    name: 'VueCLI4에서 SCSS설치 과정중 에러 관련',
    component: () => import('@/views/vue/tip/etc/SetScssError.vue'),
  },
  {
    path: '/vue/tip/etc/vue_i18n',
    name: 'Vue에서 다국어 처리',
    component: () => import('@/views/vue/tip/etc/VueI18n.vue'),
  },
  {
    path: '/vue/ui/dialog/alert',
    name: 'Ui Component : Alert',
    component: () => import('@/views/vue/uiComponent/dialog/AlertEx.vue'),
  },
  {
    path: '/vue/ui/dialog/confirm',
    name: 'Ui Component : confirm',
    component: () => import('@/views/vue/uiComponent/dialog/ConfirmEx.vue'),
  },
  {
    path: '/vue/ui/notification/toast',
    name: 'Ui Component : toast',
    component: () => import('@/views/vue/uiComponent/notification/ToastEx.vue'),
  },
  {
    path: '/vue/test/asyncAwait',
    name: 'async await 테스트',
    component: () => import('@/views/vue/test/AsyncAwaitTest.vue'),
  },
  {
    path: '/vue/test/kakaoMap',
    name: '카카오 맵 테스트',
    component: () => import('@/views/vue/test/KakaoMapTest.vue'),
  },
  {
    path: '/vue/test/callKakaoMapApp',
    name: '카카오맵 앱 호출 테스트',
    component: () => import('@/views/vue/test/KakaoMapAppTest.vue'),
  },
  {
    path: '/vue/test/shortUrl',
    name: 'Short Url 사용 테스트',
    component: () => import('@/views/vue/test/ShortUrlTest.vue'),
  },
  {
    path: '/vue/test/swiperCssEffectTest',
    name: 'Swiper Css 효과 테스트',
    component: () => import('@/views/vue/test/SwiperCssEffectTest.vue'),
  },
];

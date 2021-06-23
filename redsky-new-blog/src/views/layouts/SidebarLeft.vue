<template>
  <aside id="sidebar-left" class="sidebar-left">
    <div class="sidebar-header">
      <div class="sidebar-title">
        Navigation
      </div>
      <div class="sidebar-toggle hidden-xs" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
        <i class="fa fa-bars" aria-label="Toggle sidebar"></i>
      </div>
    </div>
    <div class="nano">
      <div class="nano-content">
        <nav id="menu" class="nav-main" role="navigation">
          <ul class="nav nav-main">
            <li>
              <router-link to="/" @click.native="onRouterLink">
                <i class="fa fa-home" aria-hidden="true"></i>
                <span>Home</span>
              </router-link>
            </li>
            <li class="nav-parent">
              <a>
                <i class="fa fa-code" aria-hidden="true"></i>
                <span>FrontEnd개발관련</span>
              </a>
              <ul class="nav nav-children">
                <li>
                  <router-link to="/frontend/understanddevelop" @click.native="onRouterLink">
                    개발환경이해정리(작업중)
                  </router-link>
                </li>
                <li>
                  <router-link to="/frontend/understandwebpack" @click.native="onRouterLink">
                    Webpack이해(작업중)
                  </router-link>
                </li>
                <li>
                  <router-link to="/frontend/webpackconfig" @click.native="onRouterLink">
                    Webpack설정(작업중)
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-parent">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="vuejs"
                  class="svg-inline--fa fa-vuejs fa-w-14"
                  role="img"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="18px"
                  style="margin-right: 0.5em;text-align: center;vertical-align: middle;"
                >
                  <path fill="currentColor" d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z" />
                </svg>
                <span>Vue.Js</span>
              </a>
              <ul class="nav nav-children">
                <li class="nav-parent">
                  <a>
                    시작하기
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/vue/start/preferences" @click.native="onRouterLink">
                        작업환경 셋팅
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/start/dotenv" @click.native="onRouterLink">
                        .env
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/start/vueconfig" @click.native="onRouterLink">
                        vue.config.js(작업중)
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-parent">
                  <a>
                    SingleFileComponent
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/vue/singlefilecomponent/data" @click.native="onRouterLink">
                        Data(화면상태값)(미완료)
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-parent">
                  <a>
                    기능이해
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/vue/skill/slot" @click.native="onRouterLink">
                        Slot
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/skill/classAndStyle" @click.native="onRouterLink">
                        class와 style 적용
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/skill/computedAndWatch" @click.native="onRouterLink">
                        computed와 watch
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/skill/ifElseShow" @click.native="onRouterLink">
                        조건문(v-if, v-show)
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/skill/for" @click.native="onRouterLink">
                        반복문(v-for)
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/skill/plugin" @click.native="onRouterLink">
                        전역 기능(Plugin)
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/skill/vmodel" @click.native="onRouterLink">
                        v-model 사용
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/skill/dynamicComponent" @click.native="onRouterLink">
                        동적, 비동기 콤포넌트(작업중)
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-parent">
                  <a>
                    Vue Router
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/vue/router/navigationGuards" @click.native="onRouterLink">
                        네비게이션 가드
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/router/meta" @click.native="onRouterLink">
                        라우트 메타(meta)필드(작업중)
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-parent">
                  <a>
                    Vue에서 axios사용
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/vue/axios/howToUse" @click.native="onRouterLink">
                        vue에서 기본 사용법(미완료)
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/axios/interceptors" title="interceptors 사용(미완료) headers에 Authorization에 토큰 넣어보기 추가필요" @click.native="onRouterLink">
                        interceptors 사용(미완료) headers에 Authorization에 토큰 넣어보기 추가필요
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-parent">
                  <a>
                    UI Component 개발
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/vue/ui/dialog/alert" @click.native="onRouterLink">
                        Dialog / Alert(미완료)
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/ui/dialog/confirm" @click.native="onRouterLink">
                        Dialog / Confirm(미완료)
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/ui/notification/toast" @click.native="onRouterLink">
                        notifications / Toast(미완료)
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-parent">
                  <a>
                    기타 팁
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/vue/tip/etc/globalproperty" @click.native="onRouterLink">
                        전역 메소드 등록
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/tip/etc/buildtip" @click.native="onRouterLink">
                        프로젝트 빌드(일부완성)
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/tip/etc/ajaxDeduplication" @click.native="onRouterLink">
                        ajax중복요청 대처방법(작업중)
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/tip/etc/..." @click.native="onRouterLink">
                        router이동시 로그인체크 관련(작업중)
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/tip/etc/setScss" @click.native="onRouterLink">
                        VueCli4, SCSS 오류관련
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/tip/etc/vue_i18n" @click.native="onRouterLink">
                        Vue 다국어처리
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-parent">
                  <a>
                    테스트
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/vue/test/asyncAwait" @click.native="onRouterLink">
                        async await 테스트
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/test/kakaoMap" @click.native="onRouterLink">
                        카카오맵 테스트
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/test/callKakaoMapApp" @click.native="onRouterLink">
                        카카오맵 앱 호출 테스트
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/test/shortUrl" @click.native="onRouterLink">
                        Short Url 테스트
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/vue/test/swiperCssEffectTest" @click.native="onRouterLink">
                        swiperjs css 효과 테스트
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-parent">
              <!-- nav-expanded nav-active -->
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="react"
                  class="svg-inline--fa fa-react fa-w-16"
                  role="img"
                  viewBox="0 0 512 512"
                  width="20px"
                  height="18px"
                  style="margin-right: 0.5em;text-align: center;vertical-align: middle;"
                >
                  <path
                    fill="currentColor"
                    d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                  />
                </svg>
                <span>React.Js</span>
              </a>
              <ul class="nav nav-children">
                <li>
                  <a href="pages-signup.html">
                    ...
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-parent">
              <a>
                <svg
                  fill="none"
                  viewBox="0 0 27 26"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  data-icon="typescript"
                  width="20px"
                  height="18px"
                  style="margin-right: 0.5em;text-align: center;vertical-align: middle;"
                >
                  <path
                    clip-rule="evenodd"
                    d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z"
                    fill="#fff"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span>TypeScript</span>
              </a>
              <ul class="nav nav-children">
                <li>
                  <a href="ui-elements-typography.html">
                    ...
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-parent">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="node-js"
                  class="svg-inline--fa fa-node-js fa-w-14"
                  role="img"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="18px"
                  style="margin-right: 0.5em;text-align: center;vertical-align: middle;"
                >
                  <path
                    fill="currentColor"
                    d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"
                  />
                </svg>
                <span>Node.Js</span>
              </a>
              <ul class="nav nav-children">
                <li>
                  <a href="forms-basic.html">
                    ...
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-parent">
              <a>
                <i class="fa fa-css3" aria-hidden="true"></i>
                <span>CSS</span>
              </a>
              <ul class="nav nav-children">
                <li>
                  <a>
                    Basic
                  </a>
                </li>
                <li class="nav-parent">
                  <a>
                    참조소스
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/css/reference/sktdcss" @click.native="onRouterLink">
                        SKTD.css
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-parent">
              <a>
                <i class="fa fa-git" aria-hidden="true"></i>
                <span>GIT</span>
              </a>
              <ul class="nav nav-children">
                <li>
                  <a>
                    Basic
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-parent">
              <a>
                <i class="fa fa-html5" aria-hidden="true"></i>
                <span>HTML &amp; DOM 객체</span>
              </a>
              <ul class="nav nav-children">
                <li class="nav-parent">
                  <a>
                    history 객체
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/htmlDom/history/api" @click.native="onRouterLink">
                        HTML5 History API(미완료)
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-parent">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="js-square"
                  class="svg-inline--fa fa-js-square fa-w-14"
                  role="img"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="18px"
                  style="margin-right: 0.5em;text-align: center;vertical-align: middle;"
                >
                  <path
                    fill="currentColor"
                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
                  />
                </svg>
                <span>JavaScript</span>
              </a>
              <ul class="nav nav-children">
                <li class="nav-parent">
                  <a>
                    표준 내장 객체
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/javascript/standard/array" @click.native="onRouterLink">
                        Array
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-parent">
                  <a>
                    Events
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/javascript/events/standardevent" @click.native="onRouterLink">
                        표준이벤트 종류(미완료)
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/javascript/events/bubbling" @click.native="onRouterLink">
                        버블링과 캡처링(미완료)
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/javascript/events/touchevent" @click.native="onRouterLink">
                        터치 이벤트 관련(미완료)
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-parent">
                  <a>
                    Network
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/javascript/network/ajax" title="ajax request, response(CORS, proxy, 응답코드)" @click.native="onRouterLink">
                        ajax request, response(CORS, proxy, 응답코드)
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-parent">
              <a>
                <i class="fa fa-tasks" aria-hidden="true"></i>
                <span>UI Elements</span>
              </a>
              <ul class="nav nav-children">
                <li>
                  <a>
                    ...
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-parent">
              <a>
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <span>Project</span>
              </a>
              <ul class="nav nav-children">
                <li class="nav-parent">
                  <a>
                    2020
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/project/2020/hyundaicard3" @click.native="onRouterLink">
                        현대카드앱3.0
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/project/2020/VueUI" @click.native="onRouterLink">
                        Redsky UI개발
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/project/2020/NHNonghyupBank" @click.native="onRouterLink">
                        NH농협은행 개인종합 자산관리(PFM)
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-parent">
                  <a>
                    2021
                  </a>
                  <ul class="nav nav-children">
                    <li>
                      <router-link to="/project/2021/hyundaicardadvancement" @click.native="onRouterLink">
                        현대카드앱 Next App
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-parent">
              <a>
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <span>IT용어</span>
              </a>
              <ul class="nav nav-children">
                <li>
                  <a>
                    ...
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-parent">
              <a>
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <span>기타</span>
              </a>
              <ul class="nav nav-children">
                <li>
                  <router-link to="/vue/test/plugintest" @click.native="onRouterLink">
                    Plugin 테스트
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SidebarLeft extends Vue {
  private onRouterLink(event: Event) {
    this.removeActiveClass();
    // 클릭한 anchor태그의 부모li태그에 class명 넣기
    const elem: HTMLElement = event.target as HTMLElement;
    (elem.parentNode as HTMLElement).className = 'nav-active';
  }

  // 화면상의 특정 class명을 삭제하기.
  private removeActiveClass() {
    // 좌측메뉴 닫기
    (document.getElementsByTagName('html') as HTMLCollectionOf<HTMLHtmlElement>)[0].classList.remove('sidebar-left-opened');
    //
    const elemArr: HTMLCollectionOf<Element> = document.getElementsByClassName('nav-active') as HTMLCollectionOf<Element>;
    Array.from(elemArr).map(elem => {
      elem.classList.remove('nav-active');
    });
  }
}
</script>

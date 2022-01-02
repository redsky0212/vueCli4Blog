<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>Vue Router가 설치된 Vue 프로젝트에서 <code>동적 가져오기(dynamic import)</code>를 이용한 코드 스플리팅 방법.</strong><br />
        <a href="https://kr.vuejs.org/v2/guide/components-dynamic-async.html#%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8" target="_blank">공식문서 : 비동기 컴포넌트</a><br />
        <a href="https://ui.toast.com/weekly-pick/ko_20200128" target="_blank">코드 스플리팅 참조 블로그</a><br />
        <a href="https://code-hoon.tistory.com/163" target="_blank">prefetch 참조 블로그</a><br />
        <a href="https://joshua1988.github.io/vue-camp/advanced/code-splitting.html" target="_blank">Code Splitting | Cracking Vue.js</a><br />
        <a href="https://joshua1988.github.io/vue-camp/advanced/code-splitting.html" target="_blank">Lazy loading and code splitting in Vue.js</a><br />
        <a href="https://yunzema.tistory.com/274" target="_blank">코드 스플리팅(prefetch비활성)</a><br />
      </p>
    </blockquote>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <!-- <div class="panel-actions"> -->
            <!-- <a href="javascript:void(0)" class="fa fa-caret-up"></a> -->
            <!-- <a href="#" class="fa fa-times"></a> -->
            <!-- </div> -->

            <h2 class="panel-title"><strong>라우터 레벨 코드 스플리팅</strong></h2>
            <p class="panel-subtitle">
              앱 빌드 시 JS 번들이 프로젝트 규모 및 상황에 따라 커질 수 있으므로 각 경로 구성요소를 별도의 청크로 분할한다.
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong><code>vue CLI</code>로 설정한 프로젝트</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">만약 Vue CLI로 설치된 프로젝트라면 따로 설치할 플러그인은 없다.</span>
                  </li>
                  <li>
                    <span class="text-dark">라우터에 'webpackChunkName'으로 빌드 후 생성될 js파일명을 정할 수 있다. 각 청크명은 라우터 그룹별로 나눠 프로젝트 상황에 맞게 그룹화 할 수 있다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (청크명.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "청크명" */ '../views/About.vue')
  }
]</pre
                >
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <!-- <div class="panel-actions"> -->
            <!-- <a href="javascript:void(0)" class="fa fa-caret-up"></a> -->
            <!-- <a href="#" class="fa fa-times"></a> -->
            <!-- </div> -->

            <h2 class="panel-title">
              <strong>prefetch</strong>
            </h2>
            <p class="panel-subtitle">prefetch란 당장 사용하지 않을 컴포넌트 및 path의 리소스를 미리 다운받아 캐싱하는 속성이다.</p>
            <p class="panel-subtitle"><strong>Vue.js Cli 3 부터</strong> prefetch 기능이 추가</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong><code>prefetch</code>란?</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">pre + fetch 로, <code>fetch를 선행</code>한다는 뜻</span>
                  </li>
                  <li>
                    <span class="text-dark">
                      기본적으로 Vue.js에서는 <strong>prefetch = true</strong>로 설정되어져 있고, 이를 <strong>vue.config.js</strong> 에서 수정이 가능하다. 브라우저가 미리
                      <strong>캐시(cache)</strong> 하는 것으로, 사용하는데에 빠르다고 느낄 수 있다.
                    </span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');  // prefetch 삭제
  }
};</pre
                >
                <ul>
                  <li>기본적으로는 캐싱이 <code>true</code>로 설정 되어 있으나 <code>prefetch를 삭제</code> 설정하면 <code>렌더링 시간이 증가</code>할 수 있다.</li>
                  <li>하지만 초기 진입 시 모든 비동기 컴포넌트는 캐시하고 마지막으로 화면을 다운로드 하므로 <code>초기화면은 prefetch를 사용하지 않는 것</code>이 더 빠르다.</li>
                  <li><code>Vue Application 개발 시</code> 기본적으로 prefetch는 끄는 것을 권장한다.</li>
                  <li>
                    <code>vue-router</code>에서 주석으로 처리된 <code>"webpackPrefetch: true"</code> 를 넣어주면 prefetch가 적용된다.
                    <pre class="prettyprint linenums">
{
  path: '/about',
  name: 'About',
  component: () => import(/* webpackPrefetch: true */ '../views/About.vue')
}</pre
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'DynamicComponent',
})
export default class DynamicComponent extends Vue {
  private message = '';
  private checked = false;
  private checkedNames = [];
  private picked = '';
  private selected = '';
  private selected2 = [];
  private firstName = 'first';
  private lastName = 'last';
  private selected3 = 'A';
  private options3 = [
    { text: 'One', value: 'A' },
    { text: 'Two', value: 'B' },
    { text: 'Three', value: 'C' },
  ];

  private get reversedMessage() {
    return this.message
      .split('')
      .reverse()
      .join('');
  }

  private get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  private set fullName(newValue: string) {
    const names = newValue.split(' ');
    this.firstName = names[0];
    this.lastName = names[names.length - 1];
  }

  private callSetterFn() {
    this.fullName = 'John Doe';
  }

  @Watch('lastName')
  private changeLastName(newVal: string, oldVal: string): void {
    console.log(`call watch ------> ${newVal}_${oldVal}`);
  }

  private mounted() {
    window.prettyPrint();
  }
}
</script>
<style scoped>
.panel-actions a {
  font-size: 22px;
}
</style>

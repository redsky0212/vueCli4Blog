<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>전역 기능을 Vue에 추가. (전역메서드, 전역속성, 전역 디렉티브/필터/트랜지션, 전역컴포넌트 전역Mixin 등)</strong></p>
    </blockquote>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <!-- div class="panel-actions">
              <a href="#" class="fa fa-caret-down"></a>
              <a href="#" class="fa fa-times"></a>
            </div -->

            <h2 class="panel-title">
              <strong>플러그인</strong>만들기(기본)
              <!-- <span class="text-danger">(사라질 예정)</span> -->
            </h2>
            <p class="panel-subtitle">기본 형식</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>플러그인 작성하기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">Vue 플러그인은 <code>install메소드</code>를 노출 해줘야 한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// MyPlugin.js
export default {
  install(Vue, options) {
    // 1. 전역 메소드 또는 속성 추가
    Vue.myGlobalMethod = function () {
      // 필요한 로직 ...
    }

    // 2. 전역 에셋 추가
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 필요한 로직 ...
      }
      ...
    })

    // 3. 컴포넌트 옵션 주입
    Vue.mixin({
      created: function () {
        // 필요한 로직 ...
      }
      ...
    })

    // 4. 인스턴스 메소드 추가
    Vue.prototype.$myMethod = function (methodOptions) {
      // 필요한 로직 ...
    }
  },
}</pre
                >
              </li>
              <li>
                <h4>
                  <strong>만든 플러그인 <code>사용등록</code>하기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">new Vue() 생성 전에 <code>Vue.use()</code>를 이용한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// MyPlugin.js
import MyPlugin from '@/plugins/MyPlugin.js';
// MyPlugin.install()을 호출
Vue.use(MyPlugin);

new Vue({
  // ...
});</pre
                >
              </li>
              <li>
                <h4>
                  <strong>사용하기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">화면 script에서 사용하는 방법</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
module.exports = {
  mounted() {
    // 전역 플러그인 사용
    this.$myMethod();
    // 또는
    Vue.myGlobalMethod();
  }
}</pre
                >
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <!-- div class="panel-actions">
              <a href="#" class="fa fa-caret-down"></a>
              <a href="#" class="fa fa-times"></a>
            </div -->

            <h2 class="panel-title">
              <strong>플러그인</strong>만들기(vue-property-decorator, TypeScript 환경에서)
              <!-- <span class="text-danger">(사라질 예정)</span> -->
            </h2>
            <p class="panel-subtitle">vue-property-decorator를 사용한 class컴포넌트 환경에서 플러그인 만드는 법</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>플러그인 작성하기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>plugins</code> 폴더를 생성하고 그 안에 플러그인 파일을 만든다.</span>
                  </li>
                  <li>
                    <span class="text-dark">plugins 폴더를 생성하는건 강제적인건 아니다.</span>
                  </li>
                  <li>
                    <span class="text-dark">Vue 플러그인은 <code>install메소드</code>를 노출 해줘야 한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// plugins/common.js
import alert from '@/components/rayui/alert';
// 추가...

const common = {
  install() {

    // 전역 컴포넌트
    // 전역 Dialog관련 코드 (BEGIN) ===========================
    const popupStatusValue = {
      key: 0, // 팝업 생성시 고유의 키값을 생성하기 위한 일련번호
      list: [], // 생성된 팝업 컴포넌트들을 저장하는 리스트
      popupContainerVm: null, // 팝업이 열릴 컨테이너 div의 인스턴스
    };
    // alert, confirm, popup이 띄워질 container div 태그 만들기.
    Vue.component('popup-container', {
      name: 'PopupContainer',
      created() {
        popupStatusValue.popupContainerVm = this;
      },
      render(createElement: CreateElement) {
        const children = popupStatusValue.list.map((popup: any) => {
          return createElement(popup.component, {
            key: popup.key,
            props: popup.params ? popup.params : {},
            hook: {
              create(_: any, vnode: VNode) {
                popup.componentInstance = vnode.componentInstance;
              },
            },
          });
        });
        return createElement('div', { class: 'g-popup-container', style: 'z-index:9999999;' }, children);
      },
    });
    // 전역 Dialog관련 코드 (END) ==============================

    // $rayui 라는 이름으로 모아서 사용하기 위하여
    Vue.prototype.$rayui = {
      alert,
      // 추가...
    };
  },
};

export default common;</pre
                >
              </li>
              <li>
                <h4>
                  <strong>만든 플러그인 <code>사용등록</code>하기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">new Vue() 생성 전에 <code>Vue.use()</code>를 이용한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// common.js공통 플러그인
import common from './plugins/common';
// common.install()을 호출
Vue.use(common);

new Vue({
  // ...
});</pre
                >
              </li>
              <li>
                <h4>
                  <strong>전역 type등록을 위한<code>vue-prototype.d.ts</code> 파일 루트에 생성하기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">파일명이 다를경우 만든 파일 사용을 위한 등록을 <code>tsconfig.json</code>에 명시한다. ex) "include": [ "types/vue-global.d.ts" ]</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
declare module 'vue/types/vue' {
  // 전역 속성 type설정(Vue.$aaaaa)
  interface VueConstructor {
    $getPageTitle: Function,
    $initTheme: Function,
    $pageTitle: string | null | undefined,
  }
  // vue 인스턴스 type설정 (this.$aaaa)
  interface Vue {
    $initTheme: Function;
    $myProperty: string | null | undefined;
    $log: I$Log;
    $rayui: I$Rayui;
  }
}

// 외부 js 라이브러리 사용할때 type설정
declare global {
  interface Window { prettyPrint: any; }
}</pre
                >
              </li>
              <li>
                <h4>
                  <strong>플러그인 사용하기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">화면 script에서 사용하는 방법</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
module.exports = {
  mounted() {
    // 전역 플러그인 사용
    this.$rayui.alert();
    // 또는
    // 이렇게 사용하기 위해서는 interface VueConstructor에 type설정을 해줘야 빨간줄이 안뜸
    Vue.$rayui.alert();
  }
}</pre
                >
              </li>
              <li>
                <h4>
                  <strong>$rayui.alert() 참고</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">alert폴더에 index.js파일로 만들고 export default (message, option) {} 이렇게 노출함.</span>
                  </li>
                  <li>
                    <span class="text-dark">ui component의 alert참조</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <!-- div class="panel-actions">
              <a href="#" class="fa fa-caret-down"></a>
              <a href="#" class="fa fa-times"></a>
            </div -->

            <h2 class="panel-title">
              <strong>플러그인</strong>만들기(nuxt 환경에서)
              <!-- <span class="text-danger">(사라질 예정)</span> -->
            </h2>
            <p class="panel-subtitle">nuxt를 사용하는 환경에서 플러그인 만드는 법</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>플러그인 작성하기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">루트에 <code>plugins</code> 폴더를 생성하고 그 안에 플러그인 파일생성(plugins/rayui/index.js)</span>
                  </li>
                  <li>
                    <span class="text-dark">plugins 폴더명은 정해져 있다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
import UiButton from '@/components/rayui/button/src/UiButton.vue';
// alert UI컴포넌트 가져오기
import alert from '@/components/rayui/alert';
// 추가...

export default (context, inject) => {
  // 전역 컴포넌트 등록
  Vue.component('ui-button', UiButton);

  // $root, context 모두 플러그인 주입방식 (전역 script) 등록 ==
  inject('rayui', {
    alert,
    // ...
  });
};</pre
                >
              </li>
              <li>
                <h4>
                  <strong>만든 플러그인 <code>사용등록</code>하기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>nuxt.config.js</code>에 만든 Plugin을 등록한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// nuxt.config.js

module.exports = {
  // ...
  plugins: [
    '@/plugins/rayui/index.js',
  ],
  // ...
};</pre
                >
              </li>
              <li>
                <h4>
                  <strong>플러그인 사용하기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">화면 script에서 사용하는 방법</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
module.exports = {
  mounted() {
    // 전역 플러그인 사용
    this.$rayui.alert();
    // 또는
    window.$nuxt.$rayui.alert();
  }
}</pre
                >
              </li>
              <li>
                <h4>
                  <strong>$rayui.alert() 참고</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">alert폴더에 index.js파일로 만들고 export default (message, option) {} 이렇게 노출함.</span>
                  </li>
                  <li>
                    <span class="text-dark">ui component의 alert참조</span>
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
  name: 'for',
})
export default class For extends Vue {
  private message = '안녕하세요';
  private firstName = 'first';
  private lastName = 'last';

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

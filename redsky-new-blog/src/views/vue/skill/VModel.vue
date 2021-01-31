<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>Form 요소(input, textarea 등)에 양방향 데이터 바인딩을 쉽게 처리 해주는 디렉티브 기능.</strong></p>
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
              <strong>v-model</strong>적용하기(기본)
              <!-- <span class="text-danger">(사라질 예정)</span> -->
            </h2>
            <p class="panel-subtitle">Form요소에 일반적으로 props와 event를 이용하여 양방향 데이터 적용을 할 수있는데, <code>v-model</code>은 그것을 좀 더 간편하게 하는 기능이다.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>input text에 사용</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">text input에 <code>v-model</code>을 사용하는 기본적인 예제</span>
                  </li>
                  <li>
                    <span class="text-dark">컴포넌트 내부에 <code>message</code> 데이터가 초기값 선언 되어 있어야 한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;input v-model="message" placeholder="여기를 수정해보세요" /&gt;
&lt;p&gt;메시지: &#10100;&#10100; message &#10101;&#10101;&lt;/p&gt;
&lt;script&gt;
var vm = new Vue({
  data: {
    message: '',
  },
})
&lt;/script&gt;

// vue-property-decorator를 사용하여 코딩한 방법 예제
&lt;input v-model="message" placeholder="여기를 수정해보세요" /&gt;
&lt;p&gt;메시지: &#10100;&#10100; message &#10101;&#10101;&lt;/p&gt;
&lt;script&gt;
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MyClass extends Vue {
  private message: string = '';

}
&lt;/script&gt;</pre
                >
                <ul>
                  <li>
                    <span class="text-dark">실제 결과 예제</span>
                    <div class="well well-sm">
                      <input v-model="message" placeholder="여기를 수정해보세요" />
                      <p>메시지: {{ message }}</p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>textarea에 사용</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">
                      textarea에는 <code>&lt;textarea&gt;&#10100;&#10100; text &#10101;&#10101;&lt;/textarea&gt;</code>, 영역 보간법은 사용할 수 없다. <code>v-model</code>을 사용한다.
                    </span>
                  </li>
                  <li>
                    <span class="text-dark">컴포넌트 내부에 <code>message</code> 데이터가 초기값 선언 되어 있어야 한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;p style="white-space: pre-line"&gt;&#10100;&#10100; message &#10101;&#10101;&lt;/p&gt;
&lt;br&gt;
&lt;textarea v-model="message" placeholder="여러줄을 입력해보세요"&gt;&lt;/textarea&gt;
&lt;script&gt;
var vm = new Vue({
  data: {
    message: '',
  },
})
&lt;/script&gt;</pre
                >
                <ul>
                  <li>
                    <span class="text-dark">실제 결과 예제</span>
                    <div class="well well-sm">
                      <p style="white-space: pre-line">{{ message }}</p>
                      <br />
                      <textarea v-model="message" placeholder="여러줄을 입력해보세요"></textarea>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong>checkbox에 사용</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">
                      체크박스가 하나일때는 단일 boolean값을 가진다.
                    </span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;input type="checkbox" id="checkbox" v-model="checked" /&gt;
&lt;label for="checkbox"&gt;&#10100;&#10100; checked &#10101;&#10101;&lt;/label&gt;
&lt;script&gt;
var vm = new Vue({
  data: {
    checked: false,
  },
})
&lt;/script&gt;</pre
                >
                <div class="well well-sm">
                  <input type="checkbox" id="checkbox" v-model="checked" />
                  <label for="checkbox">{{ checked }}</label>
                </div>
                <ul>
                  <li>
                    <span class="text-dark">
                      체크박스가 여러개일때는 같은 배열값을 바인딩 한다.
                    </span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;div id='example-3'&gt;
  &lt;input type="checkbox" id="jack" value="Jack" v-model="checkedNames" /&gt;
  &lt;label for="jack"&gt;Jack&lt;/label&gt;
  &lt;input type="checkbox" id="john" value="John" v-model="checkedNames" /&gt;
  &lt;label for="john"&gt;John&lt;/label&gt;
  &lt;input type="checkbox" id="mike" value="Mike" v-model="checkedNames" /&gt;
  &lt;label for="mike"&gt;Mike&lt;/label&gt;
  &lt;br /&gt;
  &lt;span&gt;체크한 이름: &#10100;&#10100; checkedNames &#10101;&#10101;&lt;/span&gt;
&lt;/div&gt;
&lt;script&gt;
var vm = new Vue({
  data: {
    checkedNames: [],
  },
})
&lt;/script&gt;</pre
                >
                <div class="well well-sm">
                  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
                  <label for="jack">Jack</label>
                  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
                  <label for="john">John</label>
                  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
                  <label for="mike">Mike</label>
                  <br />
                  <span>체크한 이름: {{ checkedNames }}</span>
                </div>
              </li>
              <li>
                <h4>
                  <strong>radio에 사용</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"> input radio의 name속성 대신 <code>v-model</code>에 같은 값의 <code>picked</code> 데이타를 바인딩 한다. </span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;input type="radio" id="one" value="One" v-model="picked" /&gt;
&lt;label for="one"&gt;One&lt;/label&gt;
&lt;br /&gt;
&lt;input type="radio" id="two" value="Two" v-model="picked" /&gt;
&lt;label for="two"&gt;Two&lt;/label&gt;
&lt;br /&gt;
&lt;span&gt;선택: &#10100;&#10100; picked &#10101;&#10101;&lt;/span&gt;
&lt;script&gt;
var vm = new Vue({
  data: {
    picked: '',
  },
})
&lt;/script&gt;</pre
                >
                <div class="well well-sm">
                  <input type="radio" id="one" value="One" v-model="picked" />
                  <label for="one">One</label>
                  <br />
                  <input type="radio" id="two" value="Two" v-model="picked" />
                  <label for="two">Two</label>
                  <br />
                  <span>선택: {{ picked }}</span>
                </div>
              </li>
              <li>
                <h4>
                  <strong>select에 사용</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">일반 select는 string데이터값을 바인딩하고, 다중선택 select는 배열을 바인딩 한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;select v-model="selected"&gt;
  &lt;option disabled value=""&gt;Please select one&lt;/option&gt;
  &lt;option&gt;A&lt;/option&gt;
  &lt;option&gt;B&lt;/option&gt;
  &lt;option&gt;C&lt;/option&gt;
&lt;/select&gt;
&lt;span&gt;선택함: &#10100;&#10100; selected &#10101;&#10101;&lt;/span&gt;
&lt;script&gt;
var vm = new Vue({
  data: {
    selected: '',
  },
})
&lt;/script&gt;

// 다중선택 select예제
&lt;select v-model="selected2" multiple&gt;
  &lt;option&gt;A&lt;/option&gt;
  &lt;option&gt;B&lt;/option&gt;
  &lt;option&gt;C&lt;/option&gt;
&lt;/select&gt;
&lt;br /&gt;
&lt;span&gt;Selected: &#10100;&#10100; selected2 &#10101;&#10101;&lt;/span&gt;
&lt;script&gt;
var vm = new Vue({
  data: {
    selected2: [],
  },
})
&lt;/script&gt;</pre
                >
                <div class="well well-sm">
                  <select v-model="selected">
                    <option disabled value="">Please select one</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                  <span>선택함: {{ selected }}</span>
                  <br />
                  <select v-model="selected2" multiple>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                  <br />
                  <span>Selected: {{ selected2 }}</span>
                </div>
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
              <strong>...</strong>...
              <!-- <span class="text-danger">(사라질 예정)</span> -->
            </h2>
            <p class="panel-subtitle">...</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>...</strong>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'vmodel',
})
export default class VModel extends Vue {
  private message = '';
  private checked = false;
  private checkedNames = [];
  private picked = '';
  private selected = '';
  private selected2 = [];
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

<template>
  <div>
    <blockquote class="b-thick primary">
      <p>전역 메소드를 만들기 위한 Plugin 생성 방법</p>
    </blockquote>
    <div class="alert alert-success">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <strong>Plugin</strong>
    </div>
    <h3>...</h3>
    <div class="alert alert-info">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <i class="ace-icon fa fa-check bigger-110 green"></i>
      <span class="bolder">참조링크</span><br />
      <span class="blue bolder">... : </span>
      <a href="..." target="_blank">
        ...
      </a>
      <br />
      <span class="blue bolder">... : </span>
      <a href="..." target="_blank">
        ...
      </a>
      <br />
    </div>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <!-- div class="panel-actions">
              <a href="#" class="fa fa-caret-down"></a>
              <a href="#" class="fa fa-times"></a>
            </div -->

            <h2 class="panel-title">
              vue-property-decorator, TypeScript 사용 시 등록 순서
            </h2>
            <p class="panel-subtitle">class방식의 구조에 TypeScript를 사용할때 전역 메소드 등록 방법을 순서대로 정리</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <strong>/src/plugins/MyPlugin.ts</strong> 생성.<br />
                파일 위치는 어느 곳이나 상관 없으나 통상적으로 plugins폴더를 생성하여 만든다.
                <pre class="prettyprint linenums">
// 'vue'에서 import해도 상관 없으나 사이즈를 줄이기 위함.
import { VueConstructor } from 'vue/types/umd';

export default {
  install(Vue: VueConstructor, options?: object) {
    // 따로 뺀 함수를 따로 이쁘게 정리 할 방법이 없을까?
    function log(type: string, title: string, text: string) {
      console.log(`[${type}] ${title} - ${text} ${options}`);
    }

    // 전역으로 사용할 $log메소드.
    Vue.prototype.$log = {
      error(title: string, text: string): void {
        log('danger', title, text);
      },
      success(title: string, text: string): void {
        log('success', title, text);
      },
      log,
    };
  },
};</pre
                >
              </li>
              <li>
                <strong>/main.ts</strong>에 등록.<br />
                App을 시작하는 진입점에, 만든 플러그인 파일을 new Vue() 하기 전에 등록한다.
                <pre class="prettyprint linenums">
...
import MyPlugin from './plugins/MyPlugin';
...
Vue.use(MyPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
</pre
                >
              </li>
              <li>
                <strong>화면에서 사용하는 소스 예제</strong><br />
                아무 vue컴포넌트 화면파일을 생성하고, 만들었던 전역 메소드 $log를 사용해본다.<br />
                <p class="text-danger">하지만 this.$log부분에서 type에러가 발생할것이다.</p>
                <pre class="prettyprint linenums">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PluginTest extends Vue {
  private mounted() {
    this.save();
  }

  private save() {
    // 이 부분에서 type 에러 발생.
    this.$log.success('Transaction saved!');
  }
}</pre
                >
                <p class="text-danger">그래서 type등록을 해준다.</p>
              </li>
              <li>
                <strong>vue-prototype.d.ts</strong> 파일에 type 추가<br />
                새로 만든 전역 메소드 $log 관련 type을 선언해 준다.
                <pre class="prettyprint linenums">
export interface ILog {
  error(title: string, text?: string): void,
  success(title: string, text?: string): void,
  log: function,
}

declare module 'vue/types/vue' {
  // 전역 속성 type설정(Vue.)
  interface VueConstructor {
    ...
    $log: ILog,
  }
  // vue 내부 type설정(this.) (상황에 따라 global과 똑같이 설정할 필요없음)
  interface Vue {
    ...
    ...
    $log: ILog,
  }
}

declare global {
  interface Window { prettyPrint: any; }
}</pre
                >
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class GlobalProperty extends Vue {
  private mounted() {
    window.prettyPrint();
    this.save();
  }

  private save() {
    this.$log.success('Transaction saved!');
  }
}
</script>

<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>동적, 비동기 콤포넌트 알아보기, <code>keep-alive</code>란? 사용법.</strong><br />
        <a href="https://kr.vuejs.org/v2/guide/components-dynamic-async.html" target="_blank">참조: https://kr.vuejs.org/v2/guide/components-dynamic-async.html</a>
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

            <h2 class="panel-title"><strong>동적(Dynamic) Component</strong></h2>
            <p class="panel-subtitle">
              콤포넌트를 동적으로 가져와 보여지게 하는 방법.
              <code>
                <strong>is</strong>
              </code>
              속성
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>콤포넌트 동적 전환하기 기본. <code>is</code>특성 사용하기.</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">콤포넌트를 동적으로 변경하는 예제</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>is</code>는 <code>string</code>이나 <code>콤포넌트옵션객체</code>값을 받는다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// 콤포넌트의 string값을 is속성에 바인딩.
&lt;component v-bind:is="currView"&gt;&lt;/component&gt;
&lt;script&gt;
import MyComponent from '@/components/MyComponent.vue';

var vm = new Vue({
  components: {
    currentView: MyComponent,
  },
  data: function() {
    return {
      currView: 'currentView',
    };
  },
})
&lt;/script&gt;

// vue-property-decorator를 사용하여 코딩한 방법 예제
// 콤포넌트의 string값을 is속성에 바인딩.
&lt;component v-bind:is="currView"&gt;&lt;/component&gt;
&lt;script&gt;
import MyComponent from '@/components/MyComponent.vue';

@Component({
  components: {
    currentView: MyComponent,
  },
})
export default class MyClass extends Vue {
  private currView: string = 'currentView';

}
&lt;/script&gt;</pre
                >
                <ul>
                  <li>
                    <span class="text-dark"><code>DOM</code> 구조상 구문이 정해져 있는 element일경우 <code>is 속성</code>으로 문제점 해결</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>is</code>는 <code>string</code>이나 <code>콤포넌트옵션객체</code>값을 받는다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// DOM 구조상 table다음에는 tr이 와야하므로 아래와 같은 경우 구문분석시 문제가 있다.
&lt;table&gt;
  &lt;my-row&gt;...&lt;/my-row&gt;
&lt;/table&gt;

// is 속성으로 해결한 코드 예제
&lt;table&gt;
  &lt;tr is="my-row"&gt;...&lt;/tr&gt;
&lt;/table&gt;</pre
                >
              </li>
              <li>
                <h4>
                  <strong><code style="font-size: 20px;">keep-alive</code> 사용하기</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">
                      탭 콤포넌트와 같이 화면 상에서 동적으로 다른 탭을 클릭하여 왔다 갔다 했을 때 이전 탭의 상태값이 유지가 되지 않는 부분이 있다.
                    </span>
                  </li>
                  <li>
                    <span class="text-dark">그럴때 유지 하고자 하는 콤포넌트를 <code>&lt;keep-alive&gt;</code>로 감싼다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;keep-alive&gt;
  &lt;component v-bind:is="currentTabComponent"&gt;&lt;/component&gt;
&lt;/keep-alive&gt;</pre
                >
                <!-- <ul>
                  <li>
                    <span class="text-dark">실제 결과 예제</span>
                    <div class="well well-sm">
                      <p style="white-space: pre-line">{{ message }}</p>
                      <br />
                      <textarea v-model="message" placeholder="여러줄을 입력해보세요"></textarea>
                    </div>
                  </li>
                </ul> -->
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
              <strong>비동기 콤포넌트</strong>
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
                    <span class="text-dark"><code>...</code>...</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">...</pre>
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

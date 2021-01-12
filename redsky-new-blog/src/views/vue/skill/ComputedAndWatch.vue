<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>template 내에서 javascript 표현식을 넣으면 편리하지만 비대해지고 유지보수가 어려워진다. 따라서 computed로 빼는게 좋다.</strong></p>
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
              <strong>computed</strong>사용법
              <!-- span class="text-danger">(사라질 예정)</span -->
            </h2>
            <p class="panel-subtitle">computed함수는 내부의 종속된 대상에 <code>변경이 이루어 졌을때만 실행</code>하고 바뀌지 않았을때는 캐싱된다.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                기본 예제
                <ul>
                  <li>
                    <p class="text-dark">message 데이타 값을 변경한<strong>reversedMessage</strong>라는 computed를 사용하는 예제</p>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;div id="example"&gt;
  &lt;p&gt;원본 메시지data: &#10100;&#10100; message &#10101;&#10101;&lt;/p&gt;
  &lt;p&gt;원본 메시지 변경한 computed사용: &#10100;&#10100; reversedMessage &#10101;&#10101;&lt;/p&gt;
&lt;/div&gt;
&lt;script&gt;
var vm = new Vue({
  el: '#example',
  data: {
    message: '안녕하세요'
  },
  computed: {
    // 계산된 getter
    reversedMessage: function () {
      // `this` 는 vm 인스턴스를 가리킵니다.
      return this.message.split('').reverse().join('')
    }
  }
})
&lt;/script&gt;</pre
                >
              </li>
              <li>
                <code>예제 결과</code>
                <p>message데이타를 의존하므로 reversedMessage getter함수는 message가 변경될때만 실행 됩니다. 변경되지 않으면 캐싱됩니다.</p>
                <div class="well well-sm">
                  <p>원본 메시지data: {{ message }}</p>
                  <p>원본 메시지 변경한 computed사용: {{ reversedMessage }}</p>
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

            <h2 class="panel-title"><strong>computed</strong> 와 <strong>method</strong> 차이점</h2>
            <p class="panel-subtitle">
              <strong><code>캐싱 되는냐 아니냐의 차이</code></strong>
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <strong>reversedMessage 메소드</strong> 함수는 template이 렌더링 될때마다 항상 실행 된다.<br />
                <code>computed와 차이점은 캐싱되느냐 아니냐의 차이 이다.</code>
                <pre class="prettyprint linenums">
&lt;p&gt;원본 메시지 변경한 method사용: &#10100;&#10100; reversedMessage() &#10101;&#10101;&lt;/p&gt;
&lt;script&gt;
// script 일부 methods 부분
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('');
  }
}
&lt;/script&gt;</pre
                >
              </li>
              <li>
                <strong>항상 실행</strong> 되어야 하는 경우에는 method로 만들어 사용해야한다.
                <pre class="prettyprint linenums">
&lt;script&gt;
// 항상 재실행 되어야 하는 현재시간 함수는 method로 만들어야 한다.
methods: {
  now: function () {
    return Date.now();
  }
}
&lt;/script&gt;</pre
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

            <h2 class="panel-title"><strong>computed</strong> 와 <strong>watch</strong>에 대하여</h2>
            <p class="panel-subtitle">
              <strong><code>computed</code></strong>
              '선언형 프로그래밍',
              <strong><code>watch</code></strong>
              '명령형 프로그래밍'
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <strong>명령형 프로그래밍(watch) :</strong>
                감시할 데이타를 지정하고, 변경되면 특정함수를 실행하라.
              </li>
              <li>
                <strong>선언형 프로그래밍(computed) :</strong>
                계산해야할 목표 데이타를 정의해서 계산된 결과에 따라 실행하라.
              </li>
              <li>
                일반적으로 '선언형 프로그래밍'이 '명령형 프로그래밍'보다 <code>코드 반복이 적고 우수하다</code>고 평가함.
                <pre class="prettyprint linenums">
data: {
  firstName: 'Foo',
  lastName: 'Bar',
  fullName: 'Foo Bar'
},
// watch는 코드 반복이 생김(fullName데이타선언, 같은이름의 함수 생성)
watch: {
  firstName: function (val) {
    this.fullName = val + ' ' + this.lastName
  },
  lastName: function (val) {
    this.fullName = this.firstName + ' ' + val
  }
},
// 만약 computed로 만든다면 'fullName'데이타는 필요없어짐.
computed: {
  fullName: function () {
    return this.firstName + ' ' + this.lastName
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

            <h2 class="panel-title"><strong>computed</strong>에 setter 함수 사용</h2>
            <p class="panel-subtitle">
              <strong><code>computed</code></strong>
              속성은 기본적으로 getter함수만 있지만 필요에 따라
              <strong><code>setter 함수</code></strong>
              를 만들어 사용할 수 있다.
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                setter함수를 이용하는 computed 속성 예제
                <ul>
                  <li>이렇게 하면 <code>this.fullName = '달라지는 값';</code> 이와같이 값을 computed에 넣어줄 수 있다.</li>
                  <li>그러면 결과로 <code>this.firstName</code>과 <code>this.lastName</code>데이타가 업데이트 된다.</li>
                </ul>
                <pre class="prettyprint linenums">
// ...
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...</pre
                >
              </li>
              <li>
                <strong>vue-property-decorator</strong>를 사용했을때 적용 방법
                <pre class="prettyprint linenums">
// ...
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MyClass extends Vue {
  private firstName: string = '';
  private lastName: string = '';

  private get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  private set fullName(newValue: string) {
    const names = newValue.split(' ');
    this.firstName = names[0];
    this.lastName = names[names.length - 1];
  }
}
// ...</pre
                >
              </li>
              <li>
                <code>실행 예제</code>
                <div class="well well-sm">
                  <button @click="callSetterFn">fullName('John Doe') setter함수 호출</button>
                  <p>this.firstName + this.lastName : {{ firstName + ' ' + lastName }}</p>
                  <p>this.firstName : {{ firstName }}</p>
                  <p>this.lastName : {{ lastName }}</p>
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

            <h2 class="panel-title"><strong>watch</strong> 속성</h2>
            <p class="panel-subtitle">
              정리 필요.....
              <a href="https://kr.vuejs.org/v2/api/#vm-watch" target="_blank">https://kr.vuejs.org/v2/api/#vm-watch</a>
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                ....
                <pre class="prettyprint linenums">
// ...
// ...</pre
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
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'computedAndWatch',
})
export default class ComputedAndWatch extends Vue {
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

  private mounted() {
    window.prettyPrint();
  }
}
</script>

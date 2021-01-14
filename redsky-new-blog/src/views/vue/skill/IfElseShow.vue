<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>v-if, v-else, v-else-if, v-show 사용법</strong></p>
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
              <strong>v-if</strong>
              <!-- span class="text-danger">(사라질 예정)</span -->
            </h2>
            <p class="panel-subtitle">조건식의 결과가 <code>true</code>일때 해당 블록이 렌더링 된다.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                기본 예제
                <ul>
                  <li>
                    <p class="text-dark"><strong>awesome</strong>이 true이면 'Vue is awesome!'출력. 아니면 'Oh no 😢' 출력.</p>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;div id="example"&gt;
  &lt;h1 v-if="awesome"&gt;Vue is awesome!&lt;/h1&gt;
  &lt;h1 v-else&gt;Oh no 😢&lt;/h1&gt;
&lt;/div&gt;
&lt;script&gt;
var vm = new Vue({
  el: '#example',
  data: {
    awesome: true
  },
})
&lt;/script&gt;</pre
                >
              </li>
              <li>
                하나의 element가 아닌 그룹화된 element에 적용
                <pre class="prettyprint linenums">
&lt;template v-if="ok"&gt;
  &lt;h1&gt;Title&lt;/h1&gt;
  &lt;p&gt;Paragraph 1&lt;/p&gt;
  &lt;p&gt;Paragraph 2&lt;/p&gt;
&lt;/template&gt;</pre
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
              <strong>v-else</strong>
              <!-- span class="text-danger">(사라질 예정)</span -->
            </h2>
            <p class="panel-subtitle"><code>v-if</code>에 대한 <code>'else'</code> 부분을 렌더링.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                기본 예제
                <ul>
                  <li>
                    <p class="text-dark"><code>v-else</code>는 <code>v-if</code>나 <code>v-else-if</code>바로 뒤에 있어야 인식된다.</p>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;div v-if="Math.random() &gt; 0.5"&gt;
  이제 나를 볼 수 있어요
&lt;/div&gt;
&lt;div v-else&gt;
  이제는 안보입니다
&lt;/div&gt;</pre
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
              <strong>v-else-if</strong>
              <!-- span class="text-danger">(사라질 예정)</span -->
            </h2>
            <p class="panel-subtitle"><code>2.1.0+</code>부터 새롭게 추가됨.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                기본 예제
                <ul>
                  <li><code>v-else-if</code>는 <code>v-if</code>에 대한 'else if'역할, 여러개 사용 가능.</li>
                  <li><code>v-else-if</code>는 <code>v-if</code>나 <code>v-else-if</code>바로 뒤에 있어야 인식된다.</li>
                </ul>
                <pre class="prettyprint linenums">
&lt;div v-if="type === 'A'"&gt;
  A
&lt;/div&gt;
&lt;div v-else-if="type === 'B'"&gt;
  B
&lt;/div&gt;
&lt;div v-else-if="type === 'C'"&gt;
  C
&lt;/div&gt;
&lt;div v-else&gt;
  Not A/B/C
&lt;/div&gt;</pre
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
              <strong>v-if 사용시 <code>key</code>사용법(렌더링 재사용)</strong>
              <!-- span class="text-danger">(사라질 예정)</span -->
            </h2>
            <p class="panel-subtitle">블록 안쪽의 특정 element에 고유의<code>key</code> 디렉티브를 적용하면 재사용 되지 않는다.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <span class="text-danger">
                  <strong><code>key</code>를 사용하지 않은경우</strong>
                </span>
                <ul>
                  <li><code>v-if</code>와 <code>v-else</code>에 있는 input은 재사용 된다.</li>
                  <li>if, else 경우에 따라<code>placeholder</code>의 내용만 바뀌지 <code>input</code>은 하나만 사용한다.</li>
                </ul>
                <pre class="prettyprint linenums">
&lt;template v-if="loginType === 'username'"&gt;
  &lt;label&gt;사용자 이름&lt;/label&gt;
  &lt;input placeholder="사용자 이름을 입력하세요"&gt;
&lt;/template&gt;
&lt;template v-else&gt;
  &lt;label&gt;이메일&lt;/label&gt;
  &lt;input placeholder="이메일 주소를 입력하세요"&gt;
&lt;/template&gt;</pre
                >
              </li>
              <li>
                <span class="text-primary">
                  <strong><code>key</code>를 사용한 경우</strong>
                </span>
                <ul>
                  <li>if, else 에 따라 나눠져 있는 <code>input</code>은 재사용 되지 않는다.</li>
                </ul>
                <pre class="prettyprint linenums">
&lt;template v-if="loginType === 'username'"&gt;
  &lt;label&gt;사용자 이름&lt;/label&gt;
  &lt;input placeholder="사용자 이름을 입력하세요" key="username-input"&gt;
&lt;/template&gt;
&lt;template v-else&gt;
  &lt;label&gt;이메일&lt;/label&gt;
  &lt;input placeholder="이메일 주소를 입력하세요" key="email-input"&gt;
&lt;/template&gt;</pre
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
              <strong>v-show</strong>
              <!-- span class="text-danger">(사라질 예정)</span -->
            </h2>
            <p class="panel-subtitle">화면에 보일지 말지 여부 (css로 'display'를 사용)</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <code>v-show</code>사용
                <pre class="prettyprint linenums">&lt;h1 v-show="true"&gt;안녕하세요!&lt;/h1&gt;</pre>
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
  name: 'ifElseShow',
})
export default class IfElseShow extends Vue {
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

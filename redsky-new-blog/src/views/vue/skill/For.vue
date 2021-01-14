<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>v-for 사용법</strong></p>
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
              <strong>v-for</strong>
              <!-- span class="text-danger">(사라질 예정)</span -->
            </h2>
            <p class="panel-subtitle">배열 데이타를 이용하여 Element 매핑.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                기본 예제
                <ul>
                  <li>
                    <span class="text-dark"><code>item(배열원소) in items(원본배열)</code> 형태의 문법으로 리스트를 렌더링.</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>key</code>속성은 필수로 적용해야함.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;ul id="example-1"&gt;
    &lt;li v-for="(item, index) in items" :key="index"&gt;
      &#10100;&#10100; item.message &#10101;&#10101;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;
&lt;script&gt;
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
&lt;/script&gt;</pre
                >
              </li>
              <li>
                두 번째 인자로 <code>index</code> 전달.
                <pre class="prettyprint linenums">&lt;li v-for="(item, index) in items"&gt;</pre>
              </li>
              <li>
                원본데이타가 객체이면 <code>item, name, index</code> 전달.
                <pre class="prettyprint linenums">&lt;li v-for="(item, name, index) in items"&gt;</pre>
              </li>
              <li>
                <code>in</code> 대신 <code>of</code>를 사용할 수 있음.
                <pre class="prettyprint linenums">&lt;li v-for="item of items"&gt;</pre>
              </li>
              <li>
                <code>in</code>과 <code>of</code>의 차이
                <ul>
                  <li>
                    <code>in</code> : 객체순환
                    <ul>
                      <li>배열속성도 모두 순회함. (javascript에서는 배열도 객체이므로)</li>
                    </ul>
                  </li>
                  <li>
                    <code>of</code> : 배열값순환
                    <ul>
                      <li>배열의 값만 순회함.</li>
                    </ul>
                  </li>
                  <li>
                    원본데이타가
                    <ul>
                      <li>배열이면 <code>(item, index) in 원본데이타</code></li>
                      <li>객체이면 <code>(item, name, index) in 원본데이타</code></li>
                    </ul>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;div v-for="item in ['a', 'b', 'c']" :key="item"&gt;
  &lt;p&gt;&#10100;&#10100; item &#10101;&#10101;&lt;/p&gt;
&lt;/div&gt;
&lt;div v-for="item in ['a', 'b', 'c'].keys()" :key="item"&gt;
  &lt;p&gt;&#10100;&#10100; item &#10101;&#10101;&lt;/p&gt;
&lt;/div&gt;
&lt;div v-for="item in ['a', 'b', 'c'].entries()" :key="item"&gt;
  &lt;p&gt;&#10100;&#10100; item &#10101;&#10101;&lt;/p&gt;
&lt;/div&gt;
&lt;div v-for="item in Object.keys(&#10100; a: 'aa', b: 'bb', c: 'cc' &#10101;)" :key="item"&gt;
  &lt;p&gt;&#10100;&#10100; item &#10101;&#10101;&lt;/p&gt;
&lt;/div&gt;
&lt;div v-for="item in Object.values(&#10100; a: 'aa', b: 'bb', c: 'cc' &#10101;)" :key="item"&gt;
  &lt;p&gt;&#10100;&#10100; item &#10101;&#10101;&lt;/p&gt;
&lt;/div&gt;
&lt;div v-for="item in &#10100; a: &#10100; aa: 'aa' &#10101;, b: 'bb', c: 'cc' &#10101;" :key="item"&gt;
  &lt;p&gt;&#10100;&#10100; item &#10101;&#10101;&lt;/p&gt;
&lt;/div&gt;
&lt;div v-for="item of &#10100; a: &#10100; aa: 'aa' &#10101;, b: 'bb', c: 'cc' &#10101;" :key="item"&gt;
  &lt;p&gt;&#10100;&#10100; item &#10101;&#10101;&lt;/p&gt;
&lt;/div&gt;
&lt;div v-for="(item, name, index) of &#10100; a: &#10100; aa: 'aa' &#10101;, b: 'bb', c: 'cc' &#10101;" :key="item"&gt;
  &lt;p&gt;&#10100;&#10100; item + '_' + typeof name + '_' + index &#10101;&#10101;&lt;/p&gt;
&lt;/div&gt;
                </pre>
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

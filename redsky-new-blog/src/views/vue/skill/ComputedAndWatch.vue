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
            <p class="panel-subtitle">computed함수는 내부의 종속된 대상에 <code>변경이 이루어 졌을때만 실행</code>하고 바뀌지 않았을때는 캐싱되어 있다.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                객체 바인딩
                <ul>
                  <li>
                    <p class="text-dark"><strong>'active'</strong>라는 class가 존재하려면 <strong>isActive</strong>변수값이 <strong>true</strong>이어야 한다.</p>
                  </li>
                  <li><p class="text-dark">객체에는 여러개의 필드를 넣을 수도 있다. 예) { active: isActive, 'text-danger': hasError }</p></li>
                </ul>
                <pre class="prettyprint linenums">&lt;div v-bind:class="{ active: isActive }"&gt;&lt;/div&gt;</pre>
              </li>
              <li>
                일반 class와 공존
                <pre class="prettyprint linenums">&lt;div class="static" v-bind:class="{ active: isActive }"&gt;&lt;/div&gt;</pre>
              </li>
              <li>
                객체 변수 바인딩
                <pre class="prettyprint linenums">
&lt;div v-bind:class="classObject"&gt;&lt;/div&gt;
&lt;script&gt;
// script 부분 일부.
data: {
  classObject: {
    active: true,
    'text-danger': false,
  },
}
&lt;/script&gt;</pre
                >
              </li>
              <li>
                computed 속성 바인딩
                <pre class="prettyprint linenums">
&lt;div v-bind:class="classObject"&gt;&lt;/div&gt;
&lt;script&gt;
// script 부분 일부.
data: {
  isActive: true,
  error: null,
},
computed: {
  classObject: function() {
    return {
      active: this.isActive &amp;&amp; !this.error,
      'text-danger': this.error &amp;&amp; this.error.type === 'fatal'
    };
  }
},
&lt;/script&gt;</pre
                >
              </li>
              <li>
                배열 바인딩
                <pre class="prettyprint linenums">
&lt;div v-bind:class="[activeClass, errorClass]"&gt;&lt;/div&gt;
&lt;script&gt;
// script 부분 일부.
data: {
  activeClass: 'active',
  errorClass: 'text-danger',
},
&lt;/script&gt;</pre
                >
              </li>
              <li>
                배열에 조건부 바인딩
                <pre class="prettyprint linenums">
// 삼항연산자를 이용하여 조건부 적용 방법
&lt;div v-bind:class="[isActive? activeClass : '', errorClass]"&gt;&lt;/div&gt;
&lt;script&gt;
// script 부분 일부.
data: {
  isActive: true,
  activeClass: 'active',
  errorClass: 'text-danger',
},
&lt;/script&gt;</pre
                >
              </li>
              <li>
                배열에 조건부 바인딩(배열내용이 많아지면 장황해지므로 객체를 사용하여 간단하게)
                <pre class="prettyprint linenums">
// 배열안에 내용이 많아지면 장황해지므로 객체를 이용하여 간단하게 적용할 수 있다.
&lt;div v-bind:class="[{ active: isActive }, errorClass]"&gt;&lt;/div&gt;
&lt;script&gt;
// script 부분 일부.
data: {
  isActive: true,
  activeClass: 'active',
  errorClass: 'text-danger',
},
&lt;/script&gt;</pre
                >
              </li>
              <li>
                싱글파일컴포넌트에 class적용하기
                <pre class="prettyprint linenums">
// myComponent.vue
&lt;p class="foo bar"&gt;&lt;/p&gt;
// 사용하는 부분
&lt;my-component class="baz boo"&gt;&lt;/my-component&gt;
// 결과
&lt;p class="foo bar baz boo"&gt;&lt;/p&gt;</pre
                >
              </li>
              <li>
                싱글파일컴포넌트에 <strong>class 바인딩</strong>도 사용가능.
                <pre class="prettyprint linenums">
// myComponent.vue
&lt;p class="foo bar"&gt;&lt;/p&gt;
// 사용하는 부분
&lt;my-component v-bind:class="{ active: isActive }"&gt;&lt;/my-component&gt;
// 결과
&lt;p class="foo bar active"&gt;&lt;/p&gt;</pre
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

            <h2 class="panel-title"><strong>style</strong> 속성에 여러가지 값 셋팅 방법</h2>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                객체 바인딩
                <ul>
                  <li>
                    <p class="text-dark">객체의 <strong>key</strong>는 style의 속성을 사용하되 camelCase를 사용한다. 또는 따옴표를 사용한 kebab-case를 사용한다. 예) fontSize, 'font-size'</p>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"&gt;&lt;/div&gt;
&lt;script&gt;
// script 부분 일부.
data: {
  activeColor: 'red',
  fontSize: 30,
}
&lt;/script&gt;</pre
                >
              </li>
              <li>
                객체 변수 바인딩
                <pre class="prettyprint linenums">
&lt;div v-bind:style="styleObject"&gt;&lt;/div&gt;
&lt;script&gt;
// script 부분 일부.
data: {
  styleObject: {
    color: 'red',
    'font-size': '13px',
  },
}
&lt;/script&gt;</pre
                >
              </li>
              <li>
                computed 속성 바인딩
                <pre class="prettyprint linenums">
&lt;div v-bind:style="styleObject"&gt;&lt;/div&gt;
&lt;script&gt;
// script 부분 일부.
computed: {
  styleObject: function() {
    return {
      color: 'red',
      fontSize: '13px',
    };
  }
},
&lt;/script&gt;</pre
                >
              </li>
              <li>
                배열 바인딩
                <ul>
                  <li>baseStyle에 overridingStyle이 추가되는 형태.</li>
                </ul>
                <pre class="prettyprint linenums">&lt;div v-bind:style="[baseStyle, overridingStyle]"&gt;&lt;/div&gt;</pre>
              </li>
              <li>
                자동 접두사
                <ul>
                  <li>브라우저 벤더 접두어가 필요한 CSS는 Vue가 자동으로 접두어를 감지하여 스타일을 적용한다.</li>
                </ul>
                <pre class="prettyprint linenums" v-bind:style="{ transform: 'rotate(0.5turn)' }">&lt;div v-bind:style="{transform: 'rotate(0.5turn)'}"&gt;&lt;/div&gt;</pre>
              </li>
              <li>
                접두사가 있는 여러 값을 배열로 넣을 수 있다.
                <ul>
                  <li>브라우저가 지원하는 마지막 값만 바인딩 한다.</li>
                </ul>
                <pre class="prettyprint linenums">&lt;div v-bind:style="{display: ['-webkit-box', '-ms-flexbox', 'flex']}"&gt;&lt;/div&gt;</pre>
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
  private mounted() {
    window.prettyPrint();
  }
}
</script>

<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>Form 요소(input, textarea 등)에 양방향 데이터 바인딩을 쉽게 처리 해주는 디렉티브 기능.</strong></p>
    </blockquote>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <!-- <div class="panel-actions"> -->
            <!-- <a href="javascript:void(0)" class="fa fa-caret-up"></a> -->
            <!-- <a href="#" class="fa fa-times"></a> -->
            <!-- </div> -->

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
                <ul>
                  <li>
                    <span class="text-dark"><code>v-for</code>를 이용한 <code>동적 option 데이타</code> 렌더링 예제</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
&lt;select v-model="selected"&gt;
  &lt;option v-for="option in options" v-bind:value="option.value"&gt;
    &#10100;&#10100; option.text &#10101;&#10101;
  &lt;/option&gt;
&lt;/select&gt;
&lt;span&gt;Selected: &#10100;&#10100; selected &#10101;&#10101;&lt;&lt;/span&gt;
&lt;script&gt;
new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
&lt;/script&gt;</pre
                >
                <div class="well well-sm">
                  <select v-model="selected3">
                    <option v-for="(option, index) in options3" v-bind:value="option.value" :key="index">
                      {{ option.text }}
                    </option>
                  </select>
                  <span>Selected: {{ selected3 }}</span>
                </div>
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
              <strong>v-model 수식어</strong>
            </h2>
            <p class="panel-subtitle">v-model사용 시 데이타 동기화 시점에 값 처리 추가 기능을 할 수 있다.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>.lazy</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>v-model</code>은 입력이벤트 발생하면 바로 입력, 데이터동기화를 한다.</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>.lazy</code>수식어를 사용하면 <code>change 이벤트</code> 이후에 동기화 한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// 'input' 대신 'change' 이후에 동기화 한다.
&lt;input v-model.lazy="msg" /&gt;</pre
                >
              </li>
              <li>
                <h4>
                  <strong>.number</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">입력된 값이 <code>number type</code>이기를 원하면 시용한다.</span>
                  </li>
                  <li>
                    <span class="text-dark"><code>type="number"</code>이어도 값은 항상 문자열 이기때문에 형변환을 원할때 사용.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// number type으로 형변환
&lt;input v-model.number="age" type="number" /&gt;</pre
                >
              </li>
              <li>
                <h4>
                  <strong>.trim</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">입력값을 자동으로 <code>trim</code> 되기를 원하면 사용.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// 자동 trim
&lt;input v-model.trim="age" /&gt;</pre
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
              <strong>v-model을 사용한 것과 사용하지 않은 것의 비교</strong>
            </h2>
            <p class="panel-subtitle">똑같은 기능 처리를 하지만 코드의 양과 복잡성에서 차이가 있다.</p>
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
                <pre class="prettyprint linenums">
// ...
&lt;input ...&gt;</pre
                >
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <!-- <div class="panel-actions"> -->
            <!-- <a href="javascript:void(0)" class="fa fa-caret-up"></a> -->
            <!-- </div> -->

            <h2 class="panel-title">
              <strong>v-model 사용 시 각 Form요소의 기본 props, event</strong>
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
                <pre class="prettyprint linenums">
// ...
&lt;input ...&gt;</pre
                >
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <!-- <div class="panel-actions"> -->
            <!-- <a href="javascript:void(0)" class="fa fa-caret-up"></a> -->
            <!-- </div> -->

            <h2 class="panel-title">
              <strong>v-model 사용 시 문제점</strong>
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
                <pre class="prettyprint linenums">
// ...
&lt;input ...&gt;</pre
                >
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <!-- <div class="panel-actions"> -->
            <!-- <a href="javascript:void(0)" class="fa fa-caret-up"></a> -->
            <!-- </div> -->

            <h2 class="panel-title">
              <strong>v-model을 컴포넌트에 사용하기</strong>
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
                <pre class="prettyprint linenums">
// ...
&lt;input ...&gt;</pre
                >
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <!-- <div class="panel-actions"> -->
            <!-- <a href="javascript:void(0)" class="fa fa-caret-up"></a> -->
            <!-- </div> -->

            <h2 class="panel-title">
              <strong>vue-property-decorator 환경에서 사용하기 예제</strong>
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
                <pre class="prettyprint linenums">
// ...
&lt;input ...&gt;</pre
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

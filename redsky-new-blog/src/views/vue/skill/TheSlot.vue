<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>slot은 부모 컴포넌트에서 element를 구성해서 자식 컴포넌트로 넘겨주는 기능이다.</strong></p>
    </blockquote>
    <div class="alert alert-danger">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      Vue 2.6.0 버전 에서는<strong>named slot과 slot-scope</strong>을 대체하는 새로운 <strong>v-slot</strong>이 도입 되었습니다.<br />
      <strong>named slot과 slot-scope</strong>은 삭제된건 아니지만 앞으로 사라질 예정 입니다. 사용하지 않는것이 좋을듯 합니다.
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
              slot 기본
              <!-- span class="text-danger">(사라질 예정)</span -->
            </h2>
            <p class="panel-subtitle">기본적으로 부모 컴포넌트의 <strong>inner html</strong> 이 자식 컴포넌트의 <strong>slot</strong>부분에 들어간다.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                부모 컴포넌트
                <pre class="prettyprint linenums">
&lt;BaseButton&gt;
 &lt;span&gt;저장하기&lt;/span&gt;
&lt;/BaseButton&gt;</pre
                >
              </li>
              <li>
                자식 컴포넌트 (BaseButton.vue)
                <pre class="prettyprint linenums">
&lt;button&gt;
  &lt;slot&gt;기본값&lt;/slot&gt;
&lt;/button&gt;</pre
                >
              </li>
              <li>
                slot이 실행된 결과
                <pre class="prettyprint linenums">
&lt;button&gt;
  &lt;span&gt;저장하기&lt;/span&gt;
&lt;/button&gt;</pre
                >
              </li>
              <li>
                <code>결과 예제</code>
                <p>부모 컴포넌트에서 자식 컴포넌트를 사용할때 슬롯에 해당하는 부분에 아무 내용을 전달하지 않으면 <code>&lt;slot&gt;기본값&lt;/slot&gt;</code>이 렌더링 된다.</p>
                <div class="well well-sm">
                  <the-slot-child></the-slot-child>
                </div>
                <p>하지만 슬롯에 어떤 내용을 전달하면 전달된 내용이 렌더링 된다.</p>
                <div class="well well-sm">
                  <the-slot-child>
                    <span>저장하기</span>
                  </the-slot-child>
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
              Named Slots
            </h2>
            <p class="panel-subtitle">slot태그가 여러개 일 경우 <strong>name</strong>속성을 이용하여 이름을 정해줄 수 있습니다.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <strong>name</strong>으로 여러개의 slot을 만들어 정해진 <strong>name</strong>의 slot에 따로따로 다르게 탬플릿을 넣어줄 수 있습니다.<br />
                <strong>name</strong>이 지정되지 않은 <code>&lt;slot&gt;</code>에는 암묵적으로 default값이 사용됩니다.<br />
                <code>BaseLayout.vue (slot이 있는 자식 컴포넌트)</code>
                <pre class="prettyprint linenums">
&lt;div class="container"&gt;
  &lt;header&gt;
    &lt;slot name="header"&gt;&lt;/slot&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;slot&gt;&lt;/slot&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;slot name="footer"&gt;&lt;/slot&gt;
  &lt;/footer&gt;
&lt;/div&gt;</pre
                >
              </li>
              <li>
                BaseLayout컴포넌트를 사용하는 부분<br />
                <code>template</code>의 named slot으로 명명되어있지 않은 부분은 default slot으로 간주 됩니다.<br />
                하지만 원한다면 명시적으로 <code>slot="default" 또는 v-slot: default</code>로 <code>&lt;template&gt;</code>을 만들어 넣어줄 수도 있습니다.
                <ul>
                  <li>
                    <span class="text-danger"><strong>(slot속성을 이용하는 기존방식, 사라질 예정)</strong></span>
                    <pre class="prettyprint linenums">
&lt;base-layout&gt;
  &lt;template slot="header"&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/template&gt;

  &lt;!-- 디폴트 슬롯으로 간주되는 부분 --&gt;
  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
  &lt;p&gt;And another one.&lt;/p&gt;

  &lt;template slot="footer"&gt;
    &lt;p&gt;Here's some contact info&lt;/p&gt;
  &lt;/template&gt;
&lt;/base-layout&gt;</pre
                    >
                  </li>
                  <li>
                    <span class="text-primary"><strong>(v-slot을 이용하는 현재방식)</strong></span>
                    <pre class="prettyprint linenums">
&lt;base-layout&gt;
  &lt;template v-slot:header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/template&gt;

  &lt;!-- 디폴트 슬롯으로 간주되는 부분 --&gt;
  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
  &lt;p&gt;And another one.&lt;/p&gt;

  &lt;template v-slot:footer&gt;
    &lt;p&gt;Here's some contact info&lt;/p&gt;
  &lt;/template&gt;
&lt;/base-layout&gt;</pre
                    >
                  </li>
                </ul>
              </li>
              <li>
                slot이 실행된 결과
                <pre class="prettyprint linenums">
&lt;div class="container"&gt;
  &lt;header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
    &lt;p&gt;And another one.&lt;/p&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p&gt;Here's some contact info&lt;/p&gt;
  &lt;/footer&gt;
&lt;/div&gt;</pre
                >
              </li>
              <li>
                <code>결과 예제</code>
                <p>
                  slot이름이 있는 <strong>header, footer</strong>는 <strong>해당 named slot</strong>이 렌더링 되고 이름이 없는 <strong>default slot</strong>은 그냥 <strong>slot</strong>부분에 렌더링
                  된다.
                </p>
                <div class="well well-sm">
                  <base-layout>
                    <template v-slot:header>
                      <h1>Here might be a page title</h1>
                    </template>
                    <!-- 디폴트 슬롯으로 간주되는 부분 -->
                    <p>A paragraph for the main content.</p>
                    <p>And another one.</p>
                    <template v-slot:footer>
                      <p>Here's some contact info</p>
                    </template>
                  </base-layout>
                </div>
              </li>
              <li>
                <p class="text-dark">
                  일반 태그에서 <strong>slot</strong>사용 <br />예를 들어 <code>&lt;h1 slot="header"&gt;Here might be a page title&lt;/h1&gt;</code>, 이렇게도 가능하다. <br />하지만
                  <code>v-slot:header</code>는 eslint에러가 발생(template태그에서만 사용하란다).
                </p>
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
              Scoped Slots (범위가 있는 슬롯)
            </h2>
            <p class="panel-subtitle">slot태그가 있는 자식 컴포넌트에서만 사용하는 DATA를 가져와 부모컴포넌트의 슬롯부분에서 사용해야할 경우도 있습니다.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <code>CurrentUser.vue (slot이 있는 자식 컴포넌트)</code>
                <p><code>user 데이터</code>를 가지고 있는 CurrentUser자식 컴포넌트</p>
                <p><code>user 데이터</code>를 각각의 슬롯에 bind해놓은 상태라고 가정한다.</p>
                <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;div class="container"&gt;
    &lt;header&gt;
      &lt;slot name="header" v-bind:slotdata="user"&gt;&lt;/slot&gt;
    &lt;/header&gt;
    &lt;main&gt;
      &lt;slot v-bind:slotdata="user"&gt;&lt;/slot&gt;
    &lt;/main&gt;
    &lt;footer&gt;
      &lt;slot name="footer" v-bind:slotdata="user"&gt;&lt;/slot&gt;
    &lt;/footer&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script lang="ts"&gt;
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CurrentUser extends Vue {
  private user: any = { firstName: 'aaa', lastName: 'bbb' };
}
&lt;/script&gt;</pre
                >
              </li>
              <li>
                CurrentUser컴포넌트를 사용하는 부분
                <ul>
                  <li>
                    <span class="text-danger"><strong>(slot-scope속성을 사용하는 기존방식, 사라질 예정)</strong></span>
                    <pre class="prettyprint linenums">
&lt;current-user&gt;
  &lt;template slot="default" slot-scope="slotProps"&gt;
    &lt;!-- slot-scope에 설정한 이름.current-user에서 bind한'slotdata'명.user데이터객체 --&gt;
    &#10100;&#10100; slotProps.slotdata.firstName &#10101;&#10101;
  &lt;/template&gt;
&lt;/current-user&gt;</pre
                    >
                    <ul>
                      <li>
                        slot-scope에 설정한 이름객체로 접근하면 CurrentUser컴포넌트의 slot에 바인딩된 명칭으로 접근하면 된다.<br /><code>slotProps</code>.<code>slotdata</code>.<code>firstName</code>
                      </li>
                      <li><code>slot-scope</code>에 설정한 변수명인 <code>slotProps</code>라는 이름은 자유롭게 정할 수 있다.</li>
                      <li><code>slot="default"</code>는 생략해도 상관없다.</li>
                      <li><code>slot-scope="aaa"</code>는 <code>template</code>이 아닌 일반태그에서도 사용할 수 있다.</li>
                      <li>
                        <code>slot-scope</code>의 데이터는 구조분해 해서 사용할 수도 있다. 예)<code>slot-scope="{ slotdata }"</code> 사용예)<code
                          >&#10100;&#10100; slotdata.firstName &#10101;&#10101;</code
                        >
                        (간결하고 좋음)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span class="text-primary"><strong>(v-slot을 이용하는 현재방식)</strong></span>
                    <pre class="prettyprint linenums">
&lt;current-user&gt;
  &lt;template v-slot:default="slotProps"&gt;
    &#10100;&#10100; slotProps.slotdata.firstName &#10101;&#10101;
  &lt;/template&gt;
&lt;/current-user&gt;</pre
                    >
                    <ul>
                      <li>
                        slot-scope에 설정한 이름객체로 접근하면 CurrentUser컴포넌트의 slot에 바인딩된 명칭으로 접근하면 된다.<br /><code>slotProps</code>.<code>slotdata</code>.<code>firstName</code>
                      </li>
                      <li><code>slot-scope</code>에 설정한 변수명인 <code>slotProps</code>라는 이름은 자유롭게 정할 수 있다.</li>
                      <li>
                        만약 <code>slot</code>이 <code>default</code>만 있다면 template태그를 사용하지 않고 <code>current-user컴포넌트</code>에서 슬롯을 바로 속성으로 사용할 수도 있다.
                        <pre>
&lt;<code class="text-success">current-user</code> <strong class="text-primary">v-slot:default="slotProps"</strong>&gt;
    &#10100;&#10100; slotProps.slotdata.firstName &#10101;&#10101;
&lt;/<code class="text-success">current-user</code>&gt;</pre>
                      </li>
                      <li>default슬롯은 <code>v-slot:default="slotProps"</code>을 <code>v-slot="slotProps"</code>이렇게 축약할 수 있다.</li>
                      <li>
                        하지만 이름이 있는 다른 슬롯이 있는경우에는 범위가 모호해지므로 <code>current-user컴포넌트</code>에 바로쓰는 축약문법을 사용하면 에러가 발생한다.
                        <pre>
&lt;!-- 불가. 경고가 뜰 겁니다 --&gt;
&lt;<code class="text-success">current-user</code> <strong class="text-primary">v-slot="slotProps"</strong>&gt;
    &#10100;&#10100; slotProps.slotdata.firstName &#10101;&#10101;
    &lt;template v-slot:other="otherSlotProps"&gt;
      slotProps is NOT available here
    &lt;/template&gt;
&lt;/<code class="text-success">current-user</code>&gt;</pre>
                      </li>
                      <li><code>v-slot</code>의 데이터는 구조분해 해서 사용할 수도 있다. 예)<code>slot-scope="{ slotdata }"</code> (간결하고 좋음)</li>
                      <li>
                        slotdata데이터를 별칭으로 다시 정해서 사용할 수도 있다. 예)<code>v-slot="{ slotdata: person }"</code> 사용예)<code>&#10100;&#10100; person.firstName &#10101;&#10101;</code>
                      </li>
                      <li>slotdata가 undefined일경우 기본값을 셋팅할 수도 있다. 예)<code>v-slot="{ slotdata = { firstName: 'Guest' } }"</code></li>
                    </ul>
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
              Dynamic Slot Names (가변 슬롯 이름)
            </h2>
            <p class="panel-subtitle"><strong>가변 디렉티브 인수</strong>는 슬롯 이름을 정의하는 <code>v-slot</code>에서도 작동한다.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                slot name을 변수로 설정하고 사용할 수 있습니다.
              </li>
            </ul>
            <pre class="prettyprint linenums">
&lt;base-layout&gt;
  &lt;template v-slot:[dynamicSlotName]&gt;
    ...
  &lt;/template&gt;
&lt;/base-layout&gt;</pre
            >
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <!-- div class="panel-actions">
              <a href="#" class="fa fa-caret-down"></a>
              <a href="#" class="fa fa-times"></a>
            </div -->

            <h2 class="panel-title">
              슬롯 단축표기(<code>#</code>)
            </h2>
            <p class="panel-subtitle"><code>v-on</code>,<code>v-bind</code>처럼 <code>v-slot</code>도 단축표기를 할 수 있습니다.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <code>v-slot:header</code>를 <code>#header</code>로 (<code>v-slot:</code>)부분을 <code>#</code>로 대체해서 쓸 수 있습니다.
                <pre class="prettyprint linenums">
&lt;base-layout&gt;
  &lt;template #header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/template&gt;

  &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
  &lt;p&gt;And another one.&lt;/p&gt;

  &lt;template #footer&gt;
    &lt;p&gt;Here's some contact info&lt;/p&gt;
  &lt;/template&gt;
&lt;/base-layout&gt;</pre
                >
              </li>
              <li>
                하지만 인수가 있을때만 <code>#</code>를 사용할 수 있습니다. 아래와 같은 상황에서는 사용할 수 없습니다.
                <pre class="prettyprint linenums">
&lt;!-- 이런 문법을 쓰면 경고가 나올 겁니다 --&gt;
&lt;current-user #="{ slotdata }"&gt;
  &#10100;&#10100; slotdata.firstName &#10101;&#10101;
&lt;/current-user&gt;</pre
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
import TheSlotChild from '@/views/vue/skill/slotEx/TheSlotChild.vue';
import BaseLayout from '@/views/vue/skill/slotEx/BaseLayout.vue';
import CurrentUser from '@/views/vue/skill/slotEx/CurrentUser.vue';

@Component({
  components: {
    TheSlotChild,
    BaseLayout,
    CurrentUser,
  },
})
export default class TheSlot extends Vue {
  private slotName = 'footer';
  private mounted() {
    window.prettyPrint();
  }
}
</script>

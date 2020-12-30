<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>slot은 부모 컴포넌트에서 element를 구성해서 자식 컴포넌트로 넘겨주는 기능이다.</strong></p>
    </blockquote>
    <div class="alert alert-danger">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      Vue 2.6.0 버전 에서는<strong>slot과 slot-scope</strong>을 대체하는 새로운 <strong>v-slot</strong>이 도입 되었습니다.<br />
      <strong>slot과 slot-scope</strong>이 삭제된건 아니지만 앞으로 사라질 예정 입니다. 사용하지 않는것이 좋을듯 합니다.
    </div>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <div class="panel-actions">
              <a href="#" class="fa fa-caret-down"></a>
              <a href="#" class="fa fa-times"></a>
            </div>

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
                <p>부모 컴포넌트에서 자식 컴포넌트를 사용할때 슬롯에 해당하는 부분에 아무 내용을 전달하지 않으면 '기본값'이 렌더링 된다.</p>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheSlotChild from '@/views/vue/skill/TheSlotChild.vue';

@Component({
  components: {
    TheSlotChild,
  },
})
export default class TheSlot extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>

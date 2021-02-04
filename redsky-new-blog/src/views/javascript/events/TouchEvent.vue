<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>모바일 브라우저에서 터치 이벤트 관련 정리</strong><br />
        <a href="https://developer.mozilla.org/ko/docs/Web/API/Touch_events" target="_blank">참조: https://developer.mozilla.org/ko/docs/Web/API/Touch_events</a>
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

            <h2 class="panel-title"><strong>...</strong></h2>
            <p class="panel-subtitle">
              ...
              <code>
                <strong>...</strong>
              </code>
              ...
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>...</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">...</span>
                  </li>
                  <li>
                    <span class="text-dark">...</span>
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
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'TouchEvent',
})
export default class TouchEvent extends Vue {
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

<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>브라우저에서 제공하는 History API를 사용하는 법</strong><br />
        <a href="https://www.zerocho.com/category/HTML&DOM/post/599d2fb635814200189fe1a7" target="_blank">참조: https://www.zerocho.com/category/HTML&DOM/post/599d2fb635814200189fe1a7</a>
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

            <h2 class="panel-title">
              <strong>기존 <code>window.history</code>객체</strong>
            </h2>
            <p class="panel-subtitle">기본 요소</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong>history.back()</strong>
                </h4>
                <ol>
                  <li>
                    <span class="text-dark">뒤로가기</span>
                  </li>
                </ol>
                <!-- <div class="well well-sm">
                  이미지 등등
                </div> -->
              </li>
              <li>
                <!-- <h4>
                  <strong>예제</strong>
                </h4>
                <ol>
                  <li>
                    <span class="text-dark">&lt;p&gt; 요소 이벤트 실행</span>
                  </li>
                </ol> -->
                <!-- <pre class="prettyprint linenums"></pre> -->
                <!-- <div class="well well-sm">
                  <p>실제 예제 소스</p>
                </div> -->
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
  name: 'HistoryApi',
})
export default class HistoryApi extends Vue {
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

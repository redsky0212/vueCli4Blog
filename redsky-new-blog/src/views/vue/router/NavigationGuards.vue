<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>Vue Router의 네비게이션 가드(Navigation Guards), $route 객체의 감시 역할</strong><br />
        <a href="https://router.vuejs.org/kr/guide/advanced/navigation-guards.html" target="_blank">참조: https://router.vuejs.org/kr/guide/advanced/navigation-guards.html</a>
      </p>
    </blockquote>
    <!-- <div class="alert alert-danger">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      카카오맵 참조 API : <a href="https://apis.map.kakao.com/web/wizard/" target="_blank">https://apis.map.kakao.com/web/wizard/</a>
    </div> -->
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <!-- <div class="panel-actions"> -->
            <!-- <a href="javascript:void(0)" class="fa fa-caret-up"></a> -->
            <!-- <a href="#" class="fa fa-times"></a> -->
            <!-- </div> -->

            <h2 class="panel-title"><strong>전역 가드</strong></h2>
            <p class="panel-subtitle">
              네비게이션이 트리거 될 때마다 가드가 실행 됨.
              <code>
                <strong>router.beforeEach</strong>
              </code>
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong><code style="font-size: 20px;">router.beforeEach</code></strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">네비게이션이 진행 되기 전</span>
                  </li>
                  <li>
                    <span class="text-dark">세개의 arguments를 받습니다.</span>
                    <ul>
                      <li>
                        <span class="text-dark"><code>to : 라우트</code> : 이동하려고 하는 대상의 route객체로 이동.</span>
                      </li>
                      <li>
                        <span class="text-dark"><code>from : 라우트</code> : 이동하기 전 route객체.</span>
                      </li>
                      <li>
                        <span class="text-dark"><code>next : 함수</code> : 라우트를 실행하는 함수, next함수의 arguments를 설정하는 방법은 아래와 같습니다.</span>
                        <ul>
                          <li>
                            <span class="text-dark"><code>next()</code> : 다음 라우트로 이동.</span>
                          </li>
                          <li>
                            <span class="text-dark"><code>next(false)</code> : </span>
                          </li>
                          <li>
                            <span class="text-dark"><code>next('/') 또는 next({path: '/'})</code> : </span>
                          </li>
                          <li>
                            <span class="text-dark"><code>next(error)</code> : </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})</pre
                >
              </li>
              <li>
                <h4>
                  <strong><code style="font-size: 20px;">router.beforeResolve</code> 2.5.0에 추가됨.</strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">
                      ...
                    </span>
                  </li>
                  <li>
                    <span class="text-dark">... <code>&lt;...&gt;</code>...</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
// ...
// ...</pre
                >
              </li>
              <li>
                <h4>
                  <strong><code style="font-size: 20px;">router.afterEach</code></strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">
                      ...
                    </span>
                  </li>
                  <li>
                    <span class="text-dark">... <code>&lt;...&gt;</code>...</span>
                  </li>
                </ul>
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
  name: 'NavigationGuards',
})
export default class NavigationGuards extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>

<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>Vue Router의 각 route에 <code>meta</code>필드를 포함 시킬 수 있다.</strong><br />
        <a href="https://router.vuejs.org/kr/guide/advanced/meta.html" target="_blank">참조: https://router.vuejs.org/kr/guide/advanced/meta.html</a>
      </p>
    </blockquote>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <h2 class="panel-title"><strong>라우트 메타필드 포함 시키기</strong></h2>
            <!-- <p class="panel-subtitle">
              ...
            </p> -->
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong><code style="font-size: 20px;">meta</code></strong>
                </h4>
                <!-- <ul>
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
                            <span class="text-dark"><code>next(false)</code> : 다음 라우트로 이동하지 않는다</span>
                          </li>
                          <li>
                            <span class="text-dark"><code>next('/') 또는 next({path: '/'})</code> : 다음 라우트(to)로 진행하지 않고 설정한 라우트로 이동한다.</span>
                          </li>
                          <li>
                            <span class="text-dark">
                              <code>next(error)</code> : (2.4.0 이후 추가) 인자가 error인스턴스이면 탐색이 중단되고 router.onError()를 이용해 등록된 콜백으로 에러가 전달 된다.
                            </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul> -->
                <pre class="prettyprint linenums">
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // 메타 필드
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})</pre
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

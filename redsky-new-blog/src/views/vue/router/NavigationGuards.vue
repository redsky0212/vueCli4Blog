<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>Vue Router의 네비게이션 가드(Navigation Guards), $route 객체의 감시 역할</strong><br />
        <a href="https://router.vuejs.org/kr/guide/advanced/navigation-guards.html" target="_blank">참조: https://router.vuejs.org/kr/guide/advanced/navigation-guards.html</a><br />
        <span><strong>router : </strong> 라우터 전체 객체</span><br />
        <span><strong>route : </strong> 라우트 개별 객체</span>
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
                    <span class="text-dark"> <code>router.beforeEach</code>와 모두 같고 차이점은 모든 컴포넌트의 가드와 비동기 라우트 컴포넌트를 불러온 후 .vue 의 가드를 확인하기 전에 실행됨. </span>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <strong><code style="font-size: 20px;">router.afterEach</code></strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"> <code>next함수</code> 인자가 없어서 네비게이션에 영향을 줄 수 없다. </span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
router.afterEach((to, from) => {
  // ...
})</pre
                >
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <h2 class="panel-title"><strong>라우트 가드</strong></h2>
            <p class="panel-subtitle">
              라우트 개별로 가드를 설정할 수 있다.
              <code>
                <strong>beforeEnter</strong>
              </code>
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong><code style="font-size: 20px;">beforeEnter</code></strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">가드를 라우트 각 개별로 직접 설정할 수 있다.</span>
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
                </ul>
                <pre class="prettyprint linenums">
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})</pre
                >
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <h2 class="panel-title"><strong>컴포넌트 내부 가드</strong></h2>
            <p class="panel-subtitle">
              각 컴포넌트 내부에 설정할 수 있는 가드.
              <code>
                <strong>beforeEnter</strong>
              </code>
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong><code style="font-size: 20px;">beforeRouteEnter, beforeRouteLeave, beforeRouteUpdate(2.2부터 추가)</code></strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark">각 컴포넌트 내부에서 해당 컴포넌트에 대한 가드를 설정할 수 있다.</span>
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
                </ul>
                <pre class="prettyprint linenums">
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 이 컴포넌트를 렌더링하는 라우트 앞에 호출됩니다.
    // 이 가드가 호출 될 때 아직 생성되지 않았기 때문에
    // `this` 컴포넌트 인스턴스에 접근 할 수 없습니다!
  },
  beforeRouteLeave (to, from, next) {
    // 이 컴포넌트를 렌더링하는 라우트가 이전으로 네비게이션 될 때 호출됩니다.
    // `this` 컴포넌트 인스턴스에 접근 할 수 있습니다.
  }
}</pre
                >
                <ul>
                  <li>
                    <span class="text-dark"><code>beforeRouteEnter</code>는 컴포넌트가 아직 생성되기 전이기 때문에 <code>this</code>에 접근하지 못한다.</span>
                  </li>
                  <li>
                    <span class="text-dark">하지만 <code>next</code>함수에 콜백을 설정하여 this에 접근할 수 있다.</span>
                    <pre class="prettyprint linenums">
beforeRouteEnter (to, from, next) {
  next(vm => {
    // `vm`을 통한 컴포넌트 인스턴스 접근
  })
}</pre
                    >
                  </li>
                  <li>
                    <span class="text-dark"><code>beforeRouteLeave</code>는 <code>this</code>에 접근할 수 있다.</span>
                  </li>
                  <li>
                    <span class="text-dark">
                      <code>beforeRouteLeave</code>
                      는 주로 화면 떠나기(라우트 실행을 해버렸을때) 전 화면상의 validation처리할 때나 편집내용이 있을경우 저장할지 등등... 에서 사용할 수 있다. 라우트 실행 취소는
                      <code>next(false)</code>
                      로 취소할 수 있다.
                    </span>
                  </li>
                  <li>
                    <span class="text-dark"><code>beforeRouteUpdate</code>는 <code>this</code>에 접근할 수 있다. 그래서 next함수의 콜백을 지원하지 않는다.</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section class="panel">
          <header class="panel-heading">
            <h2 class="panel-title"><strong>vue-property-decorator환경에서 사용해 보기</strong></h2>
            <p class="panel-subtitle">
              registerHooks를 사용하여 등록하여 가드를 설정한다.
            </p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <h4>
                  <strong><code style="font-size: 20px;">Component.registerHooks</code></strong>
                </h4>
                <ul>
                  <li>
                    <span class="text-dark"><code>vue-property-decorator</code>의 Component에서 제공하는 <code>registerHooks</code>로 가드를 등록하고 사용한다.</span>
                  </li>
                </ul>
                <pre class="prettyprint linenums">
import {Component} from 'vue-property-decorator';
import VueRouter, {Route} from 'vue-router';

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate',
]);

@Component
export default class MyClass extends Vue {
  private beforeRouteEnter(to: Route, from: Route, next: any) {
    next((vm: MyClass) => {
      // vm으로 this에 접근할 수 있다.
    });
  }
}</pre
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

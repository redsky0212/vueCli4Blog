<template>
  <div>
    <blockquote class="b-thick primary">
      <p>VueJs를 이용한 UI 라이브러리 개발 (2020.08.19 ~ 2020.10.07 ) github : <a href="https://github.com/redsky0212/nuxt_redsky_blog">https://github.com/redsky0212/nuxt_redsky_blog</a></p>
    </blockquote>
    <div class="alert alert-success">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <strong>Vue.js2.0, Nuxt</strong>
    </div>
    <h3>UI라이브러리 개발 시 필요한 사항 정리</h3>
    <div class="alert alert-primary">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <strong>UI개발 시 모바일용, web용 으로 나눌 필요가 있음.</strong>
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
              참조사항.
            </h2>
            <p class="panel-subtitle">개발과정 정리</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                <b>참조글</b><br />
                <a href="https://vuejs-kr.github.io/jekyll/update/2017/01/13/vuejs-plugin/" target="_blank">VueJs플러그인 제작기</a><br />
                <a href="https://jjong-factory.tistory.com/12" target="_blank">Vuejs + Cordova + OnsenUi 로 하이브리드 어플 개발기</a><br />
                만들어진 UI 참조:<a href="https://github.com/ElemeFe/element/blob/dev/src/index.js" target="_blank">element 컴포넌트</a>
              </li>
              <li>
                <strong>개발 과정 정리</strong><br />
                <ul>
                  <li>약 한달반 진행</li>
                  <li>웹 접근성 html을 포함한 코딩진행</li>
                  <li>Accordions, Button, Dialog, Forms(TextInput), Lists, Store&amp;API, Tabs 까지 진행중...</li>
                </ul>
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

@Component
export default class VueUI extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>

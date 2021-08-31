<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>현대캐피탈 마이데이터 서비스 구축 (2021.09.01 ~ 2021.12.31) 4개월</strong></p>
    </blockquote>
    <div class="alert alert-success">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <strong>Vue.js, Typescript, git사용안함, svn사용</strong>
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
              개발 정리
            </h2>
            <p class="panel-subtitle">개발과정 정리</p>
          </header>
          <div class="panel-body">
            <ul>
              <li>
                개발계 : <br />
                검증계 : <br /><br />
              </li>
              <li>현대카드 3관 6층 601</li>
              <li>김연우PM(오토에버), 현대카드현업PM(김연우), 현업 마이데이터 개발(함승주), 최윤호(시큐센 외주)</li>
              <li>
                현대캐피탈 앱 개발 : 최봉권PM, 한재진부장(시큐센 외주), 주성민과장(시큐센 외주), 이승현과장(삼양 외주)
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
export default class HyundaicapitalMydata extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>

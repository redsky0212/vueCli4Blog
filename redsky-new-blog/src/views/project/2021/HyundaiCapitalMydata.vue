<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>현대캐피탈 마이데이터 서비스 구축 (2021.09.01 ~ 2022.04.30) 8개월</strong></p>
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
              <li>12월까지였다가, 2월까지 연장 후, 다시 4월까지 연장</li>
              <li>현대캐피탈 앱2.0에 mydata를 함께 올려 오픈.</li>
              <li>정연우PM(오토에버), 현대카드현업PM(정연우), 현업 마이데이터 개발(남궁혁, 함승주, 손정현, 김보경), 최윤호(시큐센 외주)</li>
              <li>
                현대캐피탈 앱(현행화) 개발 : 최봉권PM, 한재진부장(시큐센 외주), 주성민과장(시큐센 외주), 이승현과장(삼양 외주), 그 외...
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

<template>
  <div>
    <blockquote class="b-thick primary">
      <p>NH농협은행 개인종합 자산관리(PFM) 'NH자산플러스' (2020.10.08 ~ 2020.12.23 ) 2개월 15일</p>
    </blockquote>
    <div class="alert alert-success">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <strong>JSP</strong>
    </div>
    <h3>투입 전 정리</h3>
    <div class="alert alert-info">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <i class="ace-icon fa fa-check bigger-110 green"></i>
      <span class="bolder">참조링크</span><br />
      <span class="blue bolder">jsp 기초강좌 : </span>
      <a href="http://blog.naver.com/PostView.nhn?blogId=ecjjmrikqo&logNo=40196155537&parentCategoryNo=&categoryNo=61&viewDate=&isShowPopularPosts=true&from=search" target="_blank">
        http://blog.naver.com/PostView.nhn?blogId=ecjjmrikqo&logNo=40196155537&parentCategoryNo=&categoryNo=61&viewDate=&isShowPopularPosts=true&from=search
      </a>
      <br />
      <span class="blue bolder">jsp 강좌 : </span>
      <a href="https://www.linux.co.kr/jsp/" target="_blank">
        https://www.linux.co.kr/jsp/
      </a>
      <br />
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
              <li><strong>인덕원(역 2번출구) 80번 버스 NH농협 앞에 까지 감, 하지만 많지 않음</strong></li>
              <li><strong>개발 및 업무pc지급</strong></li>
              <li><strong>jsp개발 과정 및 셋팅 생소함, 경험해볼만 함.</strong></li>
              <li>AP서비스 개발 업체 따로 있음.</li>
              <li>퍼블 및 CSS는 거의 수정하면 안됨.</li>
              <li>rMateChart를 사용. 잘 만들긴 했지만 미흡한 점들이 많이 보임.</li>
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
export default class NHNonghyupBank extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>

<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>현대카드 앱 Next App (고도화, 고메위크, 파인다이닝위크, 호텔위크, 기타위크) (2021.01.04 ~ 2021.08.31) 8개월</strong></p>
    </blockquote>
    <div class="alert alert-success">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <strong>Vue.js, Typescript, git</strong>
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
                개발계 : https://dmyms3.hyundaicard.com:9443<br />
                검증계 : https://tmyms3.hyundaicard.com:9443<br /><br />
                https://dmyms3.hyundaicard.com:9443/index.html<br />
                https://dmyms3.hyundaicard.com:9443/index.html#/info<br />
                https://dmyms3.hyundaicard.com:9443/index.html#/storeList<br />
                https://dmyms3.hyundaicard.com:9443/index.html#/storeDetail<br />
                https://dmyms3.hyundaicard.com:9443/index.html#/myGourmet<br />
              </li>
              <li>
                고메위크, 파인다이닝위크는 1차 개발 (2021.01.04 ~ 2021.06.30)
              </li>
              <li>
                호텔위크, 기타위크는 2차 개발 (2021.07.01 ~ 2021.08.31)
              </li>
              <li>
                kc빌딩 8층
              </li>
              <li>
                윤성호, 정용석(카드), 최봉권, 유경서(오토에버)
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
export default class NHNonghyupBank extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>

<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>현대카드 앱 Next App (고도화, 고메위크, 파인다이닝위크) (2021.01.04 ~ ) 6개월</strong></p>
    </blockquote>
    <div class="alert alert-success">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <strong>Vue.js, Typescript</strong>
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
                검증계 : https://dmyms3.hyundaicard.com:9443<br /><br />
                https://dmyms3.hyundaicard.com:9443/index.html<br />
                https://dmyms3.hyundaicard.com:9443/index.html#/info<br />
                https://dmyms3.hyundaicard.com:9443/index.html#/storeList<br />
                https://dmyms3.hyundaicard.com:9443/index.html#/storeDetail<br />
                https://dmyms3.hyundaicard.com:9443/index.html#/myGourmet<br />
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

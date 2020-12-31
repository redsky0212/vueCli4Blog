<template>
  <div>
    <blockquote class="b-thick primary">
      <p><strong>현대카드 앱 3.0 (2019.01.02 ~ 2020.08.31) 8개월</strong></p>
    </blockquote>
    <div class="alert alert-success">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <strong>Vue-CLI, VueJs 2, TypeScript, vue-property-decorator, tslint vuex, vuex-class, vue-router, axios</strong>
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
              프로젝트 느낌, 경험 메모
            </h2>
            <p class="panel-subtitle">프로젝트 기간동안 느꼈던 생각들 단순 나열.</p>
          </header>
          <div class="panel-body">
            <ul>
              <li><strong>VueJs 첫 프로젝트</strong></li>
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
export default class HyundaiCardApp3 extends Vue {}
</script>

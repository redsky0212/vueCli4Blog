<template>
  <div>
    <blockquote class="b-thick primary">
      <p>전역 메소드를 만들기 위한 Plugin 생성 방법</p>
    </blockquote>
    <div class="alert alert-success">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <strong>Plugin</strong>
    </div>
    <h3>...</h3>
    <div class="alert alert-info">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <i class="ace-icon fa fa-check bigger-110 green"></i>
      <span class="bolder">참조링크</span><br />
      <span class="blue bolder">... : </span>
      <a href="..." target="_blank">
        ...
      </a>
      <br />
      <span class="blue bolder">... : </span>
      <a href="..." target="_blank">
        ...
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
              ...
            </h2>
            <p class="panel-subtitle">...</p>
          </header>
          <div class="panel-body">
            <ul>
              <li><strong>...</strong></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PluginTest extends Vue {
  private mounted() {
    this.save();
  }

  private save() {
    this.$log.success('Transaction saved!');
  }
}
</script>

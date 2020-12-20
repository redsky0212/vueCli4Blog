<template>
  <section role="main" class="content-body">
    <header class="page-header">
      <h2>{{ pageName }}</h2>
      <div class="right-wrapper pull-right">
        <ol class="breadcrumbs">
          <li>
            <a href="index.html">
              <i class="fa fa-home"></i>
            </a>
          </li>
          <li><span>Pages</span></li>
          <li><span>Main</span></li>
        </ol>
        <a class="sidebar-right-toggle" data-open="sidebar-right"></a>
      </div>
    </header>
    <!-- start: page -->
    <router-view />
    <!-- end: page -->
  </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContentBody extends Vue {
  private pageName: string | null | undefined = '';

  private mounted() {
    console.log(this.$route.name);
    this.pageName = this.$route.name;
  }
}
</script>

<template>
  <section class="body">
    <!-- start: header -->
    <header class="header">
      <div class="logo-container">
        <router-link to="/" class="logo">
          <img src="@/assets/images/logo.png" height="35" alt="Porto Admin" />
        </router-link>
        <div
          class="visible-xs toggle-sidebar-left"
          data-toggle-class="sidebar-left-opened"
          data-target="html"
          data-fire-event="sidebar-left-opened"
        >
          <i class="fa fa-bars" aria-label="Toggle sidebar"></i>
        </div>
      </div>
    </header>
    <!-- end: header -->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
/* 전역 css파일 가져오기 */
/* Vendor CSS */
@import './assets/vendor/bootstrap/css/bootstrap.css';
@import './assets/vendor/font-awesome/css/font-awesome.css';
@import './assets/vendor/magnific-popup/magnific-popup.css';
@import './assets/vendor/bootstrap-datepicker/css/datepicker3.css';
/* Theme CSS */
@import './assets/stylesheets/theme.css';
/* Skin CSS */
@import './assets/stylesheets/skins/default.css';
/* Theme Custom CSS */
@import './assets/stylesheets/theme-custom.css';
</style>

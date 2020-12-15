<template>
  <section class="body">
    <!-- start: header -->
    <header class="header"></header>
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

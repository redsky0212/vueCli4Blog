<template>
  <section class="body">
    <!-- start: header -->
    <header-area />
    <!-- end: header -->
    <div class="inner-wrapper">
      <!-- start: sidebar left -->
      <sidebar-left />
      <!-- end: sidebar -->
      <!-- start: content body -->
      <content-body />
      <!-- end: content body -->
    </div>
    <popup-container />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderArea from '@/views/layouts/HeaderArea.vue';
import SidebarLeft from '@/views/layouts/SidebarLeft.vue';
import ContentBody from '@/views/layouts/ContentBody.vue';

@Component({
  components: {
    HeaderArea,
    SidebarLeft,
    ContentBody,
  },
})
export default class App extends Vue {
  private publicPath = process.env.BASE_URL;

  private mounted() {
    // code editor
    //const themeInitJs0 = document.createElement('script');
    //themeInitJs0.setAttribute('src', `${this.publicPath}assets/js/prettify.min.js`);
    // Theme Base, Components and Settings
    const themeInitJs1 = document.createElement('script');
    themeInitJs1.setAttribute('src', `${this.publicPath}assets/javascripts/theme.js`);
    // Theme Custom
    const themeInitJs2 = document.createElement('script');
    themeInitJs2.setAttribute('src', `${this.publicPath}assets/javascripts/theme.custom.js`);
    // Theme Initialization Files
    const themeInitJs3 = document.createElement('script');
    themeInitJs3.setAttribute('src', `${this.publicPath}assets/javascripts/theme.init.js`);
    //document.body.appendChild(themeInitJs0);
    document.body.appendChild(themeInitJs1);
    document.body.appendChild(themeInitJs2);
    document.body.appendChild(themeInitJs3);
  }
}
</script>

<style></style>

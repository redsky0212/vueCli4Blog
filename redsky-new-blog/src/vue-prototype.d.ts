declare module 'vue/types/vue' {
  import Vue from 'vue';
  interface Vue {
    $getPageTitle: Function,
    $initTheme: Function,
    $myProperty: string,
  }
  interface VueConstructor {
    $getPageTitle: Function,
    $initTheme: Function,
    $myProperty: string,
  }
}
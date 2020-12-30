import Vue from 'vue';

declare module 'vue/types/vue' {
  // 전역 속성 type설정
  interface VueConstructor {
    $getPageTitle: Function,
    $initTheme: Function,
    $pageTitle: string | null | undefined,
  }
  // vue 내부 type설정 (예제이니 global과 똑같이 설정할 필요없음)
  interface Vue {
    $initTheme: Function,
    $myProperty: string | null | undefined,
  }
}
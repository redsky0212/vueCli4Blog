import Vue from 'vue';
export interface I$Log {
  error(title: string, text?: string): void,
  success(title: string, text?: string): void,
  log: function,
}

export interface I$Rayui {
  alert(message: string, options?: object): void;
} 

declare module 'vue/types/vue' {
  // 전역 속성 type설정
  interface VueConstructor {
    $getPageTitle: Function;
    $initTheme: Function;
    $pageTitle: string | null | undefined;
    $rayui: I$Rayui;
  }
  // vue 내부 type설정 (예제이니 global과 똑같이 설정할 필요없음)
  interface Vue {
    $initTheme: Function;
    $myProperty: string | null | undefined;
    $log: I$Log;
    $rayui: I$Rayui;
    $getPageTitle: Function;
  }
}

declare global {
  interface Window {
    prettyPrint: any;
    kakao: any;
  }
}
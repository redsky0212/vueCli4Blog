import { CreateElement, VNode } from 'vue/types/umd';
import alert from '@/components/rayui/alert';

/*eslint-disable*/
const common = {
  install(Vue: any, options: any) {

    // 전역 Dialog관련 코드 (BEGIN) ===========================
    const popupStatusValue = {
      key: 0, // 팝업 생성시 고유의 키값을 생성하기 위한 일련번호
      list: [], // 생성된 팝업 컴포넌트들을 저장하는 리스트
      popupContainerVm: null, // 팝업이 열릴 컨테이너 div의 인스턴스
    };
    // alert, confirm, popup이 띄워질 container div 태그 만들기.
    Vue.component('popup-container', {
      name: 'PopupContainer',
      created() {
        popupStatusValue.popupContainerVm = this;
      },
      render(createElement: CreateElement) {
        const children = popupStatusValue.list.map((popup: any) => {
          return createElement(popup.component, {
            key: popup.key,
            props: popup.params ? popup.params : {},
            hook: {
              create(_: any, vnode: VNode) {
                popup.componentInstance = vnode.componentInstance;
              },
            },
          });
        });
        return createElement('div', { class: 'g-popup-container', style: 'z-index:9999999;' }, children);
      },
    });
    // 전역 Dialog관련 코드 (END) ==============================

    // 화면 route변경시 항상 호출
    Vue.prototype.$initTheme = () => {
      // Theme Base, Components and Settings
      const themeInitJs1 = document.createElement('script');
    };
    // 화면 제목
    Vue.$getPageTitle = function() {
      //console.log(this.$route.name);
      return Vue.$pageTitle;
    };
    // vue rayui 프로퍼티
    Vue.prototype.$rayui = {
      alert,
    };
  },
};

export default common;

/*
const method = {
  getPageTitle: () => {
    console.log(this.$route.name);
  },
};
Vue.prototype.$getPageTitle = method.getPageTitle;*/

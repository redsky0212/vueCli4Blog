/*eslint-disable*/
const common = {
  install(Vue: any) {
    // 화면 route변경시 항상 호출
    Vue.prototype.$initTheme = () => {
      // Theme Base, Components and Settings
      const themeInitJs1 = document.createElement('script');
    };
    // 화면 제목
    Vue.prototype.$getPageTitle = () => {
      //console.log(this.$route.name);
    };
    // 임시 프로퍼티
    Vue.prototype.$myProperty = '';
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

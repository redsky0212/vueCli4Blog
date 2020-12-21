export default {
  install(Vue) {
    // 화면 route변경시 항상 호출
    Vue.prototype.$initTheme = () => {
      // Theme Base, Components and Settings
      const themeInitJs1 = document.createElement('script');
    };
    // 화면 제목
    Vue.prototype.$getPageTitle = () => {
      console.log(this.$route.name);
    };
  },
};

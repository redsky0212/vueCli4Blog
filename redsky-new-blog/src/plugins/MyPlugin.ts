import { VueConstructor } from 'vue/types/umd';

export default {
  install(Vue: VueConstructor, options?: object) {
    function log(type: string, title: string, text: string) {
      console.log(`[${type}] ${title} - ${text} ${options}`);
    }

    Vue.prototype.$log = {
      error(title: string, text: string) {
        log('danger', title, text);
      },
      success(title: string, text: string) {
        log('success', title, text);
      },
      log,
    };
  },
};

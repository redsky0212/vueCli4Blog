import Vue from 'vue';
import App from './App.vue';
import router from './router';
import common from './plugins/common';
import MyPlugin from './plugins/MyPlugin';

Vue.config.productionTip = false;

// Head Libs
import '@/assets/vendor/modernizr/modernizr-custom.js';
// Vendor
import '@/assets/vendor/bootstrap/js/bootstrap.js';
import '@/assets/vendor/nanoscroller/nanoscroller.js';
import '@/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js';
import '@/assets/vendor/magnific-popup/magnific-popup.js';
import '@/assets/vendor/jquery-placeholder/jquery.placeholder.js';

import VueI18n from 'vue-i18n';

Vue.use(common);
Vue.use(MyPlugin);
Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: 'hello, redsky!',
    },
  },
  ko: {
    message: {
      hello: '안녕, 레드스카이!',
    },
  },
};
const i18n = new VueI18n({ locale: 'ko', messages });

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');

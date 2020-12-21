import Vue from 'vue';
import App from './App.vue';
import router from './router';
import common from './plugins/common.js';

Vue.config.productionTip = false;

// Head Libs
import '@/assets/vendor/modernizr/modernizr-custom.js';
// Vendor
import '@/assets/vendor/bootstrap/js/bootstrap.js';
import '@/assets/vendor/nanoscroller/nanoscroller.js';
import '@/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js';
import '@/assets/vendor/magnific-popup/magnific-popup.js';
import '@/assets/vendor/jquery-placeholder/jquery.placeholder.js';

Vue.use(common);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

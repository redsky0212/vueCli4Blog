import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Head Libs
import '@/assets/vendor/modernizr/modernizr-custom.js';
// Vendor
import '@/assets/vendor/bootstrap/js/bootstrap.js';
import '@/assets/vendor/nanoscroller/nanoscroller.js';
import '@/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js';
import '@/assets/vendor/magnific-popup/magnific-popup.js';
import '@/assets/vendor/jquery-placeholder/jquery.placeholder.js';

// Theme Base, Components and Settings
import '@/assets/javascripts/theme.js';

// Theme Custom
import '@/assets/javascripts/theme.custom.js';

// Theme Initialization Files
import '@/assets/javascripts/theme.init.js';

new Vue({
  render: h => h(App)
}).$mount('#app');

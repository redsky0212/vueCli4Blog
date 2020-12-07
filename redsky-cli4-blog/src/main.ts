import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vendor CSS
// import '@/assets/vendor/bootstrap/css/bootstrap.css';
// import '@/assets/vendor/font-awesome/css/font-awesome.css';
// import '@/assets/vendor/magnific-popup/magnific-popup.css';
// import '@/assets/vendor/bootstrap-datepicker/css/datepicker3.css';
// // Theme CSS
// import '@/assets/stylesheets/theme.css';
// // Skin CSS
// import '@/assets/stylesheets/skins/default.css';
// // Theme Custom CSS
// import '@/assets/stylesheets/theme-custom.css';
// // Head Libs
import '@/assets/vendor/modernizr/modernizr-custom.js';

// Vendor
//import '@/assets/vendor/jquery/jquery.js';
//import '@/assets/vendor/jquery-browser-mobile/jquery.browser.mobile.js';
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

createApp(App).use(store).use(router).mount('#app')

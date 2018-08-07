// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import md5 from 'js-md5'
import {setCookie, getCookie, delCookie} from '@/assets/cookie.js';

Vue.config.productionTip = false
Vue.prototype.$md5 =  md5;
Vue.prototype.$cookieStore = {
	setCookie,
	getCookie,
	delCookie
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

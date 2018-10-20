import Vue from 'vue'
import App from './vuex.vue'
// 若是引入目录则默认去找index.js
import router from './router/'
// 变量名是固定死的
import store from './vuex'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

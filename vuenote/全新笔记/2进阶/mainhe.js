import Vue from 'vue'
import App from '../../实战/tryfirst/src/App.vue'
// 若是引入目录则默认去找index.js
import router from '../../实战/tryfirst/src/router/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

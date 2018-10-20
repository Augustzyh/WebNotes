// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入路径没./ / 直接写名字：找到node_moudles目录下的文件
import Router from 'vue-router'

const App = {
  template: `<div id="app">
        这里是默认
        <ul>
            <li><router-link to="/a">a</router-link></li>
            <li>
                <router-link to="/">首页</router-link>
                <ul>
                    <router-link to="/a/aa">子路由</router-link>
                </ul>
            </li>
        </ul>
        <router-view></router-view>
       </div>`
}
// component 也可以这么写 且每个模板都必须包在div里先
const index = {
  template: `<div>这里是index</div>`
}

const a = {
  template: `<div>这里是a<router-view>这里是aa</router-view></div>`
}

const aa = {
  template: `<div>这里是aa</div>`
}

// routes :路径 模板
const router = new Router({
  routes: [
    {path: '/', component: index},
    {
      path: '/a',
      component: a,
      children: [
        {path: 'aa', component: aa}
      ]}

  ]
})
Vue.config.productionTip = false

// 使用路由插件
Vue.use(Router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
/* components: { App },
template: '<App/>'  与上述代码相同 */

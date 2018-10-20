// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入路径没./ / 直接写名字：找到node_moudles目录下的文件
import Router from 'vue-router'

const App = {
  template: `<div id="app">
        这里是默认
        <button @click="$router.go(-1)">返回</button>
        <button @click="$router.go(1)">前进</button>
        <ul>
            <li><router-link to="/a">a</router-link></li>
            <li>
                <router-link to="/">首页</router-link>
                <ul>
                    <li><router-link to="/a/aa">子路由aa</router-link></li>
                    <li><router-link to="/a/aaa">子路由aaa</router-link></li>
                </ul>
            </li>
            <li><router-link to="/b/ob">/b/ob</router-link></li>
            <li><router-link :to="{ path:'/b/ob', query:{id:123,name:'hang'}}">/b/ob加冒号query</router-link></li>
            <li><router-link :to="{ name:'c', params:{id:123,name:'hang'}}">/c</router-link></li>
            <li><router-link to="/d">/d</router-link></li>
            <li><router-link to="/e">/e</router-link></li>
            <li><router-link :to="{ path:'/f', query:{id:123456,old:123}}">/f</router-link></li>
            <li><router-link to="/g">/g</router-link></li>
        </ul>
        <router-view></router-view>
       </div>`
}
// component 也可以这么写 且每个模板都必须包在div里先
const index = {
  template: `<div>这里是index</div>`
}

const a = {
  template: `<div>这里是a
            <router-view></router-view>
</div>`
}

const aa = {
  template: `<div>这里是{{$route.params}}</div>`
}

const ob = Vue.component('ob', {
  template: `<div>这里是b{{$route.params}}</div>`,
  mounted () {
    console.log(this.$route.params.id)
  }

})

const c = {
  template: `<div>这里是c{{$route.params}}</div>`
}
const g = {
  template: `<div>这里是g</div>`,
  beforeRouteEnter (to, from, next) {
    console.log(arguments)
    next()
  }
}
// routes :路径 模板
const router = new Router({
  routes: [
    {path: '/', component: index},
    {
      path: '/a',
      component: a,
      children: [
        {path: 'aaa', component: aa},
        {path: ':val', component: aa}
      ]
    },
    {path: '/b/:id', component: ob},
    {path: '/c', name: 'c', component: c},
    {path: '/d', redirect: '/c'},
    {path: '/e', redirect: {name: 'c'}},
    {
      path: '/f',
      redirect: (hash) => {
        console.log(hash)
        if (hash.query.id === 123456) {
          return {name: 'c'}
        } else {
          return '/a'
        }
      }
    },
    {path: '/g',
      component: g,
      beforeEnter (to, from, next) {
      // 从哪里来 到哪里去 是否继续往下加载模板
        console.log(arguments)
        // 不执行就不会加载moban
        next()
      }
    }
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

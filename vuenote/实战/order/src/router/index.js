import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods'
import seller from '../components/seller'
import ratings from '../components/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: goods},
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ]
})

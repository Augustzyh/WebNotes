import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  age: 28,
  name: 'abc',
  vxcart: [1],
  people: [
    {weight: 20, height: 150},
    {weight: 30, height: 160},
    {weight: 40, height: 170},
    {weight: 50, height: 180}
  ]
}

// 相当于vue里面computed的作用 作用于state的过滤操作
const getters = {
  guolv (state) {
    return state.people.filter(i => i.weight > 30)
  }
}

// 这个函数名字都是写死的 主要是用来操控state数据的 (转变)
const mutations = {
  addage () {
    state.age++
  },
  devage () {
    state.age--
  },
  vxaddCart (state, value) {
    state.vxcart.push(value)
    state.vxcart.forEach(val => {
      if (val.title !== value.title) {
        state.vxcart.push(value)
      }
    })
  },
  jian (state, value) {
    state.vxcart.forEach((val, index) => {
      if (val.title === value.title) {
        state.vxcart.splice(index, 1)
      }
    })
  }
}

// 用来调用mutations里的方法,这里可以进行异步操作
const actions = {
  // 默认接受一个参数 参数的第一个值为commit，加括号写上mutations
  newaddage ({commit}) {
    setTimeout(() => {
      commit('addage')
    }, 2000)
  }
}

/* eslint-disable no-new */
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

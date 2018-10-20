<template>
  <div id="app">
    <v-header :aaa="send"></v-header>
    {{$store.state}}
    {{name}}
    <button @click="a()">名字年龄</button>
    <button @click="addage()">加一岁</button>
    <button @click="devage()">减一岁</button>

    <button @click="newaddage()">新版加一岁</button>
    {{people}}
    <img src="./assets/logo.png">
    <!--路由所显示的地方-->
    <router-view :aa="send"/>
  </div>
</template>

<script>
import vheader from './components/vheader'
import va from './components/a'
import b from './components/b'
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      send: 'send'
    }
  },
  components: {
    'v-header': vheader,
    'v-a': va,
    b
  },
  computed: {
    ...mapState([
      'name',
      'age'
    ]),
    ...mapGetters([
      'people'
    ])
  },
  methods: {
    a () {
      alert(this.name)
      alert(this.age)
    },
    ...mapMutations([
      'addage',
      'devage'
    ]),
    ...mapActions([
      'newaddage'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

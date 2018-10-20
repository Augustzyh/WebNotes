<template>
    <div>
      <img src="/static/18560855790257725.gif" alt="">
      这里是头部{{aaa}}
      <ul>
        <!--<li><router-link to="/">首页</router-link></li>
        <li><router-link to="/a">/a</router-link></li>
        <li><router-link to="/b">/b</router-link></li>-->
        <li v-for="item in nav" :key="item.title"><router-link :to="item.path">{{item.title}}</router-link></li><!--
        <li v-for="item in nav" :key="item.title"><router-link :to="`/xxx/${item.id}.html`">{{item.title}}</router-link></li>-->
      </ul>
    </div>
</template>

<script>
export default {
  name: 'vheader',
  props: ['aaa'],
  data () {
    return {
      nav: [
        {title: '首页', path: '/', img: 'xxx.jpg'},
        {title: 'a', path: '/a'},
        {title: 'b', path: '/b'}
      ]
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <!--必须写一个元素包裹 且template下只有一个元素-->
    <!--html-->
    <p @click="abc()">{{num}}</p>
    <zidingyi></zidingyi>
  </div>
</template>

<script>
import zidingyi from './moban'

// js代码
export default {
  // Vue 写这里
  data () {
    return {
      num: 123
    }
  },
  methods: {
    abc () {
      alert(1)
    }
  },
  components: {
    zidingyi
  }
}
</script>

<style>
  p {
    color: red
  }
</style>

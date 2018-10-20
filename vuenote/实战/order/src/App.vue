<template>
  <div id="app">
    <top :seller="datas.seller"></top>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/" exact>商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :datas="datas" ref="scroll"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import top from './components/modes/top'
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      datas: {
        // 商户信息
        seller: {},
        // 商品数据
        goods: [],
        // 评论   最好一个页面获取一次当页数据 这里写了方便
        ratings: []
      }
    }
  },
  mounted () {
    axios.get('/static/data.json').then(res => {
      // console.log(res)
      this.datas.seller = res.data.seller
      this.datas.goods = res.data.goods
      this.datas.ratings = res.data.ratings
      this.$nextTick(() => {
        this.$refs.scroll.scroll()
      })
    })
  },
  components: {
    top
  }
}
</script>
<style>
  .tab .tab-item a.router-link-active {
    color: red;
  }
</style>

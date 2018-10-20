<template>
  <div class="shopCart">
    <div class="content">
      <div class="content-left" @click="cartScroll()">
        <div class="logo-wrapper">
          <div class="logo active">
            <i class="icon-shopping_cart"></i>
          </div>
          <div class="badge" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'active':totalCount}">￥{{totalPrice}}</div>
        <div class="desc" v-show="totalPrice<99">另需要配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right" :class="{'enough':totalPrice>minPrice}">
        <div class="pay">{{restMoney}}</div>
      </div>
    </div>
    <transition name="transHeight">
      <div v-show="totalCount > 0 && show" class="shopcart-list">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span @click="empty" class="empty">清空</span>
        </div>
        <div class="list-content" ref="listContent">
          <ul>
            <li class="food" v-for="item in food" :key="item.name">
              <span class="name">{{item.name}}</span>
              <div class="price">
                <span>￥{{item.price*item.count}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <control :food="item"></control>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Scroll from 'better-scroll'
import control from './control'
export default {
  name: 'shopcar',
  props: ['deliveryPrice', 'minPrice', 'food'],
  data () {
    return {
      show: false
    }
  },
  components: {
    control
  },
  computed: {
    totalCount () {
      let sum = 0
      this.food.forEach(food => {
        sum += food.count
      })
      return sum
    },
    totalPrice () {
      let sum = 0
      this.food.forEach(food => {
        sum += food.count * food.price
      })
      return sum
    },
    restMoney () {
      if (this.totalPrice === 0) {
        return `${this.minPrice}起送`
      } else if (this.totalPrice < this.minPrice) {
        return `还差${this.minPrice - this.totalPrice}起送`
      } else {
        return '去结算'
      }
    }
  },
  methods: {
    empty () {
      this.food.forEach(val => {
        val.count = 0
      })
      this.show = false
    },
    cartScroll () {
      this.show = !this.show
      if (this.show) {
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new Scroll(this.$refs['listContent'], {
            click: true
          })
        })
      }
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="cartcontrol">
    <transition name="fadeRotate">
      <div class="cart-decrease" v-show="food.count>0" @click.stop="decCart()">
        <span class="icon-remove_circle_outline inner"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click.stop="addCart()">
      <i class="icon-add_circle"></i>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapMutations, mapState} from 'vuex'
export default {
  name: 'control',
  props: ['food'],
  computed: {
    ...mapState([
      'vxfood'
    ])
  },
  methods: {
    ...mapMutations([
      'vxaddCart',
      'vxdecCart'
    ]),
    addCart () {
      if (typeof this.food.count === 'undefined') {
        // 方法一this.$set(food, 'count', 0)
        // 方法二 全局 不用等传值 购物车也方便引用 即this.food.count = 0
        Vue.set(this.food, 'count', 0)
        Vue.set(this.food, 'active', true)
      }
      this.food.count++
      if (this.food.active) {
        this.vxaddCart(this.food)
        this.food.active = false
      }
    },
    decCart () {
      this.food.count--
      if (this.food.count === 0) {
        this.vxdecCart(this.food)
      }
    }
  }
}
</script>

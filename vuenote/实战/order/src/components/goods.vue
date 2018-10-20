<template>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li class="menu-item" v-for="item in datas.goods" :key="item.id">
          <span class="text">
            <span v-show="item.type>0" class="iconMap" :class="icon[item.type]"></span>
            {{item.name}}
          </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWarapper">
        <ul>
          <li v-for="item in datas.goods" class="food-list food-list-hook" :key="item.id">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item" :key="food.name" @click="showMore(food)">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="description">{{food.description}}</p>
                  <div class="sell-info">
                    <span class="sellCount">月售{{food.sellCount}}份</span>
                    <span class="rating">好评率{{food.rating}}</span>
                    <div class="price">
                      <span class="newPrice">￥{{food.price}}</span>
                    </div>
                    <div class="cartcontrol-wrapper">
                      <control :food="food"></control>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <shopcar :food="food"  :deliveryPrice="datas.seller.deliveryPrice" :minPrice="datas.seller.minPrice"></shopcar>
      <foodDetail :foodMore="foodMore" ref="foodDetail"></foodDetail>
    </div>
</template>

<script>
import Scroll from 'better-scroll'
import icon from './modes/icon'
import shopcar from './modes/shopcar'
import control from './modes/control'
import foodDetail from './modes/foodDetail'
export default {
  name: 'goods',
  props: ['datas'],
  data () {
    return {
      icon,
      foodMore: []
    }
  },
  computed: {
    food () {
      let arr = []
      this.datas.goods.forEach(goods => {
        goods.foods.forEach(foods => {
          if (foods.count > 0) {
            arr.push(foods)
          }
        })
      })
      return arr
    }
  },
  methods: {
    scroll () {
      /* eslint-disable no-new */
      new Scroll(this.$refs['foodsWarapper'], {
        click: true
      })
      new Scroll(this.$refs['menuWrapper'], {
        click: true
      })
    },
    showMore (val) {
      this.$refs['foodDetail'].showDetail = true
      this.foodMore = val
      this.$refs['foodDetail'].commons = val.ratings
    }
  },
  components: {
    shopcar,
    control,
    foodDetail
  }
}
</script>

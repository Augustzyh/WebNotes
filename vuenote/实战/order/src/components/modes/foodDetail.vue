<template>
  <transition name="move">
    <div class="detailWrapper" ref="detailWrapper" v-show="showDetail">
      <div class="foodDetail">
        <div class="back" @click="showDetail=!showDetail">
          <i class="icon-arrow_lift"></i>
        </div>
        <img :src="foodMore.image" height="355" width="100%" alt="">
        <div class="info">
          <div class="title">{{foodMore.name}}</div>
          <div class="desc">
            <span>月售 {{foodMore.sellCount}}</span>
            <span>好评率 {{foodMore.rating}}%</span>
          </div>
          <div class="price">￥{{foodMore.price}}</div>
          <transition name="fade">
            <div v-show="foodMore.count==undefined||foodMore.count===0" class="shopCart" @click="add">
              <div class="text">加入购物车</div>
            </div>
          </transition>
          <control ref="control" :food="foodMore"></control>
        </div>
        <div class="divider"></div>
        <div class="desc">
          <div class="title">商品介绍</div>
          <div class="content">{{foodMore.info}}</div>
        </div>
        <div class="divider"></div>
        <div class="evaluation">
          <div class="title">商品评价</div>
          <div class="classify">
            <span v-for="(item,idx) in foodShow" :key="item.name" class="item"
                  :class="{'active': item.active, 'bad': idx===2, 'badActive': idx===2&&item.active}"
                  @click="blue(item)">{{item.name}} {{item.number}}</span>
          </div>
          <div class="switch">
            <span class="icon-check_circle" @click="flag=!flag" :class="{'on':flag}"></span>
            <span class="text">只看有内容的评价</span>
          </div>
          <div class="evel-list">
            <ul>
              <li class="evel" v-for="content in ifContent" :key="content.username">
                <div class="userInfo">
                  <div class="time">{{content.rateTime}}</div>
                  <div class="user">
                    <span>{{content.rateTime}}</span>
                    <img :src="content.avatar" width="12" height="12" alt="">
                  </div>
                </div>
                <div class="content">
                  <span class="icon" :class="content.rateType?'icon-thumb_down':'icon-thumb_up'"></span>
                  <span class="text">{{content.text}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Scroll from 'better-scroll'
import control from './control'
export default {
  name: 'foodDetail',
  props: ['foodMore'],
  mounted () {
    this.$nextTick(() => {
      /* eslint-disable no-new */
      new Scroll(this.$refs['detailWrapper'], {
        click: true
      })
    })
  },
  data () {
    return {
      showDetail: false,
      classify: [
        {name: '全部', number: 0, active: true, common: []},
        {name: '推荐', number: 0, active: false, common: []},
        {name: '吐槽', number: 0, active: false, common: []}
      ],
      commons: [],
      flag: false
    }
  },
  methods: {
    add () {
      this.$refs['control'].addCart()
    },
    blue (item) {
      this.commons = item.common
      this.classify.forEach(val => {
        val.active = false
      })
      item.active = true
    }
  },
  components: {
    control
  },
  computed: {
    foodShow () {
      let obj = this.classify
      if (this.showDetail && !obj[0].number) {
        this.foodMore.ratings.forEach((val) => {
          if (val.rateType === 0) {
            obj[1].number++
            obj[1].common.push(val)
          } else if (val.rateType === 1) {
            obj[2].number++
            obj[2].common.push(val)
          }
          obj[0].number++
          obj[0].common.push(val)
        })
      }
      return obj
    },
    ifContent () {
      let arr = []
      if (this.flag) {
        this.commons.forEach(val => {
          if (val.text) {
            arr.push(val)
          }
        })
      } else {
        arr = this.commons
      }
      return arr
    }
  }
}
</script>

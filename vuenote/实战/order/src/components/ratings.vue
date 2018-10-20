<template>
  <div class="ratingsWrapper" ref="ratingsWrapper">
    <div class="ratings-content">
      <div class="info">
        <div class="mark">
          <div class="num">{{datas.seller.score}}</div>
          <div class="text">综合评分</div>
          <div class="contrast">高于周边商家{{datas.seller.rankRate}}%</div>
        </div>
        <div class="stars">
          <div class="serviceScore">
            <span class="text">服务态度</span>
            <star :size="36" :score="datas.seller.foodScore"></star>
            <span class="num">{{datas.seller.serviceScore}}</span>
          </div>
          <div class="foodScore">
            <span class="text">商品评分</span>
            <star :size="36" :score="datas.seller.foodScore"></star>
            <span class="num">{{datas.seller.foodScore}}</span>
          </div>
          <div class="deliveryTime">
            <span class="text">送达时间</span>
            <span class="time">38分钟</span>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="evaluation">
        <div class="classify">
          <span v-for="(item,index) in foodShow" class="item"
                :class="{'active':item.active,'bad':index===2,'badActive':item.active&&index===2}"
                @click="blue(item)" :key="item.username">
            {{item.name}}<span class="count">{{item.number}}</span>
          </span>
        </div>
        <div class="switch" @click="evelflag=!evelflag">
          <span class="icon-check_circle" :class="{'on':evelflag}"></span>
          <span class="text">只看有内容的评价</span>
        </div>
        <div class="evel-list">
          <ul>
            <li class="evel" v-for="evel in ifContent" :key="evel.name">
              <div class="avatar">
                <img :src="evel.avatar" width="28" height="28">
              </div>
              <div class="content">
                <div class="user">
                  <span class="name">{{evel.username}}</span>
                  <span class="rateTime">{{evel.rateTime}}</span>
                </div>
                <div class="star-wrapper">
                  <star :size="24" :score="evel.score"></star>
                  <span class="deliveryTime">{{evel.deliveryTime || 0}}分钟送达</span>
                </div>
                <div class="text">
                  {{evel.text}}
                </div>
                <div class="recommend">
                  <span class="icon" :class="evel.rateType?'icon-thumb_down' : 'icon-thumb_up'" v-show="evel.recommend.length"></span>
                  <span class="dish" v-for="dish in evel.recommend" :key="dish[0]">{{dish}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from 'better-scroll'
import star from './modes/star'
import axios from 'axios'
export default {
  name: 'ratings',
  props: ['datas'],
  data () {
    return {
      classify: [
        {name: '全部', number: 0, active: true, common: []},
        {name: '推荐', number: 0, active: false, common: []},
        {name: '吐槽', number: 0, active: false, common: []}
      ],
      commons: [],
      evelflag: false
    }
  },
  mounted () {
    axios.get('/static/data.json').then(res => {
      this.commons = res.data.ratings
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new Scroll(this.$refs['ratingsWrapper'], {
          click: true
        })
      })
    })
  },
  activated () {
  },
  components: {
    star
  },
  computed: {
    foodShow () {
      let obj = this.classify
      if (this.commons && !obj[0].number) {
        this.commons.forEach((val) => {
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
      if (this.evelflag) {
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
  },
  methods: {
    blue (item) {
      this.commons = item.common
      this.classify.forEach(val => {
        val.active = false
      })
      item.active = true
    }
  },
  filter: {
    time (value) {
      return value || 0
    }
  }
}
</script>

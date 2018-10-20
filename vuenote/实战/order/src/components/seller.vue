<template>
  <div class="seller-wrapper" ref="sellerWrapper">
    <div class="seller-content">
      <div class="info">
        <div class="title">
          <div class="text">{{datas.seller.name}}</div>
          <div class="star-wrapper">
            <star :size="36" :score="datas.seller.score"></star>
            <span class="rate-count">({{datas.seller.ratingCount}})</span>
            <span class="sell-count">月售{{datas.seller.sellCount}}单</span>
          </div>
          <div class="collect" @click.stop.prevent="collectflag=!collectflag">
            <span class="icon-favorite" :class="{'active':collectflag}"></span>
            <span class="text">{{collectflag?'已收藏':'收藏'}}</span>
          </div>
        </div>
        <div class="remark">
          <div class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="num">{{datas.seller.minPrice}}</span>元
            </div>
          </div>
          <div class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="num">{{datas.seller.deliveryPrice}}</span>元
            </div>
          </div>
          <div class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="num">{{datas.seller.deliveryTime}}</span>分钟
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="activities">
        <div class="bulletin">
          <h1>公告与活动</h1>
          <div class="content">
            {{datas.seller.bulletin}}
          </div>
        </div>
      </div>
      <div class="supports">
        <ul>
          <li class="item" v-for="item in datas.seller.supports" :key="item.description">
            <span class="iconMap" :class="icon[item.type]"></span>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <div class="divider"></div>
      <div class="seller-imgs">
        <h1>商家实景</h1>
        <div class="img-wrapper">
          <div>
            <img v-for="pic in datas.seller.pics" :src="pic" width="120" height="90" :key="pic">
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="seller-info">
        <h1>商家信息</h1>
        <ul class="info-list">
          <li class="info" v-for="info in datas.seller.infos" :key="info">{{info}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import icon from './modes/icon'
import star from './modes/star'
import Scroll from 'better-scroll'
export default {
  name: 'seller',
  props: ['datas'],
  mounted () {
    this.$nextTick(() => {
      /* eslint-disable no-new */
      new Scroll(this.$refs['sellerWrapper'], {
        click: true
      })
    })
  },
  components: {
    star
  },
  data () {
    return {
      collectflag: false,
      icon
    }
  }
}
</script>

<template>
    <div>
      <ul>
        <li v-for="item in shop" :key="item.id">
          <p>{{item.title}}</p>
          <p>购买数量</p><button @click="addcar(item)">购买</button>
          <p><button @click="addcar(item)">+</button> <button @click="devcar(item)">-</button></p>

        </li>
      </ul>
      <shopcar :cart="cart"></shopcar>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import shopcar from './shopcar'
export default {
  name: 'vuex',
  data () {
    return {
      shop: [
        {title: 'computer', price: 100, id: 1},
        {title: 'wash', price: 100, id: 2},
        {title: 'tv', price: 100, id: 3},
        {title: 'hu', price: 100, id: 4},
        {title: 'kongtiao', price: 100, id: 5},
        {title: 'luzi', price: 100, id: 6}
      ]
    }
  },
  components: {
    shopcar
  },
  computed: {
    cart () {
      let a = []
      this.shop.forEach(val => {
        if (val.num > 0) {
          a.push(val)
        }
      })
      return a
    },
    ...mapState([
      'vxcart'
    ])
  },
  methods: {
    ...mapMutations([
      'vxaddCart',
      'jian'
    ]),
    addcar (item) {
      if (typeof item.num === 'undefined') {
        this.$set(item, 'num', 0)
      }
      console.log(this.vxcart)
      this.vxaddCart(item)
      item.num++
    },
    devcar (item) {
      item.num--
    }
  }
}
</script>

<style scoped>

</style>

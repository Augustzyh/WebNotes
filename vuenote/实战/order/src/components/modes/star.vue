<template>
    <div class="star star-48" :class="'star-'+size">
      <span class="star-item" v-for="item in num" :class="item.name" :key="item.key"></span>
    </div>
</template>

<script>
export default {
  name: 'star',
  props: ['score', 'size'],
  computed: {
    num () {
      let arr = []
      let int = Math.floor(this.score)
      let float = this.score - int
      let ifLarge = float >= 0.5
      for (let i = 0; i < int; i++) {
        arr.push({name: 'on', key: i})
      }
      let j = int + 1
      if (ifLarge) {
        arr.push({name: 'half', key: j})
      }
      while (arr.length < 5) {
        arr.push({name: 'off', key: ++j})
      }
      return arr
    }
  }
}
</script>

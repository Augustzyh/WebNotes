export default {
  vxaddCart (state, val) {
    state.vxfood.push(val)
    // console.log(state.vxfood)
  },
  vxdecCart (state, food) {
    state.vxfood.forEach((val, idx) => {
      if (val.name === food.name) {
        state.vxfood.splice(idx, 1)
      }
    })
    // console.log(state.vxfood)
  }
}

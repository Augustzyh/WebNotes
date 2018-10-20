cnpm i better-scroll
import Scroll from 'better-scroll'

1 获取元素 父级标签 ref='aaa'
ref='bbb'
2 dom更新完后执行 new Scroll
(1) 子组件
mounted () {
    this.$nextTick(() => {
        /* eslint-disable no-new */
        new Scroll(this.$refs['aaa'], {
            click: true
        })
        new Scroll(this.$refs['bbb'], {
            click: true
        })
    })
}

(2)
子组件
methods: {
    scroll () {
        /* eslint-disable no-new */
        new Scroll(this.$refs['foodsWarapper'], {
            click: true
        })
        new Scroll(this.$refs['menuWrapper'], {
            click: true
        })
    }
}

父组件App：
<router-view ref="scroll"></router-view>
mounted () {
    axios.get('/static/data.json').then(res => {
        console.log(res)
        this.datas.seller = res.data.seller
        this.datas.goods = res.data.goods
        this.datas.ratings = res.data.ratings
        //dom数据传输子组件页渲染完毕执行
        this.$nextTick(() => {
            this.$refs.scroll.scroll()
        })
    })
}


//强制重新计算高度
this.$nextTick(() => {
    if (!this.sc) {   //防止重新绑定 导致触发两次点击事件
        this.sc = new Scroll(this.$refs['listcontent'], {
            click: true
        })
    } else {
        // 强制重新计算高度
        this.sc.refresh()
    }
})
补充 ：router-view 内绑定的 ref='abc'  abc为当前显示路由的子组件，scroll自然就传进去了
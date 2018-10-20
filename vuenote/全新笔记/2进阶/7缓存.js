<keep-alive>
<router-view :datas="datas" ref="scroll"></router-view>
    </keep-alive>

keep-alive即把加载过的组件缓存下来  但是这样会将ajax的数据也缓存下来

只缓存组件 数据更新
activated () {   //这个生命周期函数只有在用了keep-alive后才能生效
}
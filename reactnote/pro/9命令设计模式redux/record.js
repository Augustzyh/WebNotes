//核心架构思想是面向对象的出发点，先设计好，再实现
import {reducer} from "./reactapp/src/redux3/redux3";

何时使用？
命令模式是为了解决命令的请求者和命令的实现者之间的耦合关系
使用场景？
认为是命令的地方都可以使用命令模式
redux有着这样的思想

state只是当前组件的状态,redux提供共同数据,这个并不是react独有的

//本章分布
index.js +
redux1 -> 基本操作
redux2+before->App -》组件使用
redux3+before->App -> 借助中间件处理异步操作  redux-thunk
react-redux + 代码装饰  :  外部app&&index
//安装redux
npm i redux -S

//异步更新
这个是不支持异步更新的，需要借助中间件
cnpm i redux-thunk -S
redux需导入applyMiddleware
使用： 创建时 const store = createStore(reducer, applyMiddleware(thunk))


//调试工具
react devtools
redux devtools



//浏览器开启redux
1  redux 结构 compose
2  const reduxTools = window.devToolsExtension ? window.devToolsExtension() : null
3  创捷更改 const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    reduxTools
))



//react-redux 更优雅的管理数据
cnpm i react-redux -S
index写法：
import {Provider} from "react-redux"
import App from "./reactapp/src/App";
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);
组件内部App，导入一个连接器
import {connect} from "react-redux"
import {addDelay,addChicken,subChicken} from "./redux3/redux3"
底部：
//把参数挂载到props上
const mapStateToProps = (state) => {
    return {num: state}
}
//自动发布
const mapDispatchToProps = {addChicken,addDelay,subChicken}
//一挂挂载到props上便可以再组件内使用
App = connect(mapStateToProps, mapDispatchToProps)(App)




//代码装饰器插件
cnpm i babel-plugin-transform-decorators-legacy -D  babel>7.x去npm搜
1. 显示配置文件 npm run eject //然后关闭项目cnpm i防报错
2.配置文件："babel": {
    "presets": [
        "react-app"
    ],
        "plugins"：  改一下就可以装饰了见外部App
}
import {createStore} from "redux"

//2. reducer 定义将要做的事情 名字随便取哦  (状态，做什么)
function reducer(state=0, action) {
    switch(action.type){
        case "加鸡腿":
            return state+1
        case "减鸡腿":
            return state-1
        default:
            return 100
    }
}

//1. 新建store 数据管理仓库
const store = createStore(reducer)


//3. 获取状态
console.log(store.getState());//未发布状态，默认走default

//5.订阅（关注）  监听数据的变化
function listener() {
    const num = store.getState()
    console.log("listen" + num)
}
store.subscribe(listener)

//4. 派发事件 传递action
store.dispatch({type: "加鸡腿"})
console.log(store.getState());//现在发布了加鸡腿 就是101了

store.dispatch({type: "减鸡腿"})
console.log(store.getState());  //100
store.dispatch({type: "减鸡腿"})
console.log(store.getState());  //99


//以上和react没结合没什么用 这里只是了解以下订阅发布的设计模式
//这里将通过store.dispatch(reducer)方法传递给组建，内部可调用修改 之前用的setState
//其次 subscribe订阅render函数 每次修改都重新渲染
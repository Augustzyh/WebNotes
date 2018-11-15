//若想再其他组建使用 以下需导出
//import {createStore} from "redux"


const add_Chicken = "加鸡腿"
const sub_Chicken = "减鸡腿"
//2. reducer 定义将要做的事情 名字随便取哦  (状态，做什么)
export function reducer(state=0, action) {
    switch(action.type){
        case add_Chicken:
            return state+1
        case sub_Chicken:
            return state-1
        default:
            return 100
    }
}

//action
export function addChicken() {
    return {type: add_Chicken}
}

export function subChicken() {
    return {type: sub_Chicken}
}

//延迟操作
export function addDelay() {
    // 可返回函数
    return dispatch => {
        setTimeout(() => {
            dispatch(addChicken())
        }, 2000)
    }
}
/*function (dispatch) {
    setTimeout(() => {
        dispatch(addChicken())
    }, 2000)
}*/
//中间件 封装了很多实用的方法
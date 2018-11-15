import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import "./redux1/redux1"
//一般再index导入
import {createStore, applyMiddleware, compose} from "redux"
//import {reducer,addChicken,subChicken} from "./redux2/redux2"
import {reducer,addChicken,subChicken,addDelay} from "./redux3/redux3"
import thunk from "redux-thunk"

//浏览器开启redux调试
const reduxTools = window.devToolsExtension ? window.devToolsExtension() : null

//2. 创建store
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    reduxTools
))
function render() {
    ReactDOM.render(
        <App
            store={store}
            add={addChicken}
            sub={subChicken}
            delay={addDelay}
        />
        , document.getElementById('root')
    );
}
render()
//订阅 在组件内部dispatch发布了 想要重新渲染状态，就需要在这里订阅render
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

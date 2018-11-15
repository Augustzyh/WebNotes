import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import "./redux1/redux1"
//一般再index导入
import {createStore, applyMiddleware, compose} from "redux"
//import {reducer,addChicken,subChicken} from "./redux2/redux2"
import {reducer} from "./redux3/redux3"
import thunk from "redux-thunk"

//Provider就是用来处理数据的 这是个组件 redux和这个没关系
import {Provider} from "react-redux"

//浏览器开启redux调试
const reduxTools = window.devToolsExtension ? window.devToolsExtension() : null

//2. 创建store
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    reduxTools
))

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

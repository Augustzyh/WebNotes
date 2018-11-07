import React, { Component } from 'react';
import './App.css';
//具体意义见大纲
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom"
import Home from "./components/test3/Home/Home"
import About from "./components/test3/Home/about"
import NotFound from "./components/test3/Home/not404"
class App2 extends Component {
    //react所有东西都要放到src下哦
    constructor(){
        super()
        this.state = {
            title: "React-router-dom"
        }
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <h1>{this.state.title}</h1>
                    <hr/>
                    <NavLink exact activeClassName="active" to="/">首页</NavLink>
                    <NavLink to="/about">关于</NavLink>
                    <NavLink to="/not404">404</NavLink>
                    <hr/>
                    {/*
                        可以匹配多个，显示多个组件
                        从上往下逐一匹配并只匹配一次终止
                        Switch从上往下逐个匹配 类似于switch
                        最后相当于 default  没有路由走哪个都匹配404
                    */}
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        {/*<Route path="/not404" component={NotFound}></Route>*/}
                        <Route component={NotFound}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App2;

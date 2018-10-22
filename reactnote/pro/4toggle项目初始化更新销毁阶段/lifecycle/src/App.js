import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
      console.log("第一步 constructor初始化数据");
  }
  componentWillMount() {  //相当于vue的created
    // 一般异步请求数据
      console.log("第二步 componentWillMount 异步请求数据");
  }
  render() {
      console.log("第三部 渲染render");
      return (
      <div>
        <h1 ref={"abc"}>hello world</h1>
      </div>
    );
  }
  componentDidMount () {
    //window.onload 所有组件加载完成
      console.log("最后一步 所有组件加载完成 初始化阶段完成",this.refs);
      this.refs.abc.style.color = "red"
  }
}

export default App;

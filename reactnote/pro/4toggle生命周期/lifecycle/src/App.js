import React, { Component } from 'react';
import './App.css';

class MyComponent extends Component {
  constructor () {
    super()
      console.log("第一步 constructor初始化数据");
    this.handleClick = this.handleClick.bind(this)
      this.state = {
        msg: "hello"
      }
  }
  componentWillMount() {  //相当于vue的created
    // 一般异步请求数据
      console.log("第二步 componentWillMount 异步请求数据");
  }
  handleClick(e) {
      // 点击事件的e
      this.setState({
          msg: "world"
      })
  }
  render() {
      console.log("第三部 渲染render");
      return (
      <div>
        <h1 ref={"abc"}>{this.props.xyz}{this.state.msg}</h1>
        <input onClick={this.handleClick} type="button" defaultValue={"更新数据"}/>
      </div>
    );
  }
  componentDidMount () {
    //window.onload 所有组件加载完成
      console.log("最后一步 所有组件加载完成 初始化阶段完成",this.refs);
      this.refs.abc.style.color = "red"
      //操作dom其他方法
      // const ele = document.querySelector("")
      // ReactDOM.findDOMNode(ele)
  }
  // 以下是更新阶段  只有数据发生变化才会进入
    //将要接受来自父组件的属性
    componentWillReceiveProps (p){
        console.log("更1 将要接受父组件的属性",p);
    }
    //组件是否应该更新   一般不需要去写
    shouldComponentUpdate(nextProps,nextState){
      //一般可对比前后值来判断是否需要更新
        console.log("更2 是否更新 默认返回true",nextProps,nextState);
        return true
    }
    //将要更新组件
    componentWillUpdate() {
        console.log("更3 将要更新组件");
    }
    //更新完成
    componentDidUpdate() {
        console.log("更4 更新完成");
    }
    // 销毁阶段   即将销毁
    componentWillUnmount() {
        console.log("组件将要销毁");
    }
}
class App extends Component{
    constructor(){
        super()
        this.state = {
            data: "props",
            onOff: true
        }
        this.changeProps = this.changeProps.bind(this)
        this.toggleUnmount = this.toggleUnmount.bind(this)
    }
    changeProps () {
        this.setState({
            data: "change"
        })
    }
    toggleUnmount(){
        this.setState({
            onOff: !this.state.onOff
        })
    }
    render() {
        return (
            <div>
                {this.state.onOff?<MyComponent xyz={this.state.data} /> : null}
                <input onClick={this.changeProps} type="button" defaultValue={"更新props"}/>
                <input onClick={this.toggleUnmount} type="button" defaultValue={"销毁组件"}/>
            </div>
        )
    }
}
export default App;

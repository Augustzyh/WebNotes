import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux"
import {addDelay,addChicken,subChicken} from "./redux3/redux3"
class App extends Component {
  constructor() {
      super()
      this.state = {
        title: "redux"
      }
  }
  render() {
      console.log(this.props);
      return (
      <div className="App">
          {this.state.title}
          {`现在有${this.props.num}个鸡腿`}
          <br/><br/><br/>
          <input
              type="button"
              defaultValue="加鸡腿"
              onClick={this.props.addChicken}
          />
          <input
              type="button"
              defaultValue="减鸡腿"
              onClick={this.props.subChicken}
          />
          <input
              type="button"
              defaultValue="异步加鸡腿"
              onClick={this.props.addDelay}
          />
      </div>
    );
  }
}

//把参数挂载到props上
const mapStateToProps = (state) => {
    return {num: state}
}
//自动发布
const mapDispatchToProps = {addChicken,addDelay,subChicken}
//一挂挂载到props上便可以再组件内使用
App = connect(mapStateToProps, mapDispatchToProps)(App)

//装饰后
/*@connect(
    state => ({num : state}),
    {addDelay, subChicken, addChicken}
)*/
export default App;

import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import lantuLogo from './static/img/logo.png'

class App extends Component {
    //react所有东西都要放到src下哦
  constructor(){
    super()
      this.state = {
        titleStyle:{
            color:"blue",
            fontSize: "25px"
        }
      }
  }
  render() {
    return (
      <div className="App">
          <h1 style={{color:"red"}}>helloworld</h1>
          <h2 style={this.state.titleStyle}>呵呵呵呵呵呵呵呵</h2>
          <img src={logo} width="100" alt=""/>
          <img src={lantuLogo} alt=""/>
          <img src={require('./static/img/logo.png')} alt=""/>
      </div>
    );
  }
}

export default App;

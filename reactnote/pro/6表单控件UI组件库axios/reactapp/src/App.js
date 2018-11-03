import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import logo from './logo.svg'
import lantuLogo from './static/img/logo.png'
import Home from './components/home/Home'
import Form from './components/home/form'
import Ant from './components/ant'

import Axios from "axios"

class App extends Component {
    //react所有东西都要放到src下哦
  constructor(){
    super()
      this.state = {
        titleStyle:{
            color:"blue",
            fontSize: "25px"
        },
        banner: []
      }
  }
  componentWillMount() {
      Axios.get('http://47.96.29.109/vueProject/vue.php?title=banner')
          .then(res => {
              console.log(res.data);
              this.setState({
                  banner: res.data
              })
          })
  }
  render() {
    return (
      <div className="App">
          <h1 style={{color:"red"}}>helloworld</h1>
          <h2 style={this.state.titleStyle}>呵呵呵呵呵呵呵呵</h2>
          <img src={logo} width="100" alt=""/>
          <img src={lantuLogo} alt=""/>
          <img src={require('./static/img/logo.png')} alt=""/>
          <Home/>
          <hr/>
          <Form/>
          <hr/>
          <hr/>
          <hr/>
          <hr/>
          <hr/>
          <Ant/>
          <ul>
              {
                  this.state.banner.map((item, idx) => {
                      return (
                          <li key={idx}>
                              <p>{item.title}</p>
                              <img src={item.picUrl} alt=""/>
                          </li>
                      )
                  })
              }
          </ul>
      </div>
    );
  }
}

export default App;

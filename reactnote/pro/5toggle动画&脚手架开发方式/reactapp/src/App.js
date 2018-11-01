import React, { Component } from 'react';
import './App.css';
import Header from './component/header/header'
import './component/header/header.css'
import Main from './component/main/main'
import './component/main/main.css'
import Footer from "./component/footer/footer"
import './component/footer/footer.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Main/>
          <Footer/>
      </div>
    );
  }
}

export default App;

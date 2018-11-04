import React, { Component } from 'react';
import './App.css';
//具体意义见大纲
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from "./components/test1/layout"
import Routes from './router/index'

class App extends Component {
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
          <nav>
              <Link to="/">首页</Link>
              <Link to="/product">商品</Link>
              <Link to="/news">新闻</Link>
          </nav>
          <hr/>
            <Layout>
                {/*exact精准匹配只匹配...*/}
                {
                  Routes.map((item,idx) => {
                    if(item.exact){
                      return <Route
                          exact
                          key={idx}
                          path={item.path}
                          component={item.component}
                      ></Route>
                    }else {
                        return <Route
                            key={idx}
                            path={item.path}
                            component={item.component}
                        ></Route>
                    }
                  })
                }
                {/*<Route exact path="/" component={Home}></Route>
                <Route path="/product" component={Product}></Route>
                <Route path="/news" component={News}></Route>
                <Route path="/newsList/:id" component={NewsList}></Route>
                <Route path="/productsList" component={ProductsList}></Route>*/}
            </Layout>
        </div>
      </Router>
    );
  }
}

export default App;

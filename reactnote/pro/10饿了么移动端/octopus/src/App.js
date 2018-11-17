import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Layout from "./components/layout"
import Home from "./components/home";
import Search from "./components/router/search";
import CategoryList from "./components/router/category";
class App extends Component {
  render() {
    return (
      <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/search" component={Search}></Route>
              <Route path="/category/list:id" component={CategoryList}></Route>
            </Switch>
          </Layout>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Layout from "./components/layout"
import Home from "./components/home";
import Search from "./components/router/search";
import CategoryList from "./components/router/category";
import ScarebugSub from "./components/router/scarebuy";
import PromotionSub from "./components/router/promotion";
import Discover from "./components/router/navbottom/discover";
import Mine from "./components/router/navbottom/mine";
import GoodsListSub from "./components/router/goodslist";
class App extends Component {
  render() {
    return (
      <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/search" component={Search}></Route>
              <Route path="/category/list:id" component={CategoryList}></Route>
              <Route path="/scarebuy/sub:id" component={ScarebugSub}></Route>
              <Route path="/promotion/sub:id" component={PromotionSub}></Route>
              <Route path="/discover" component={Discover}></Route>
              <Route path="/mine" component={Mine}></Route>
              <Route path="/goodsList:id" component={GoodsListSub}></Route>
            </Switch>
          </Layout>
      </Router>
    );
  }
}

export default App;

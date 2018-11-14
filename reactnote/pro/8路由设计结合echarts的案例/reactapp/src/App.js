import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Layout from "./components/layout";
import echarts from "echarts"
/*import Home from "./components/home";
import Line from "./components/line";
import NotFound from "./components/notfound";
import SunChart from "./components/sunchart";
import Elephent from "./components/elephent";
import AMap from "./components/map";
import Pie from "./components/pie";
import Gauge from "./components/gauge";
import Parallel from "./components/parallel";
import Calendar from "./components/calendar";*/
import {routes} from "./router/index"
class App extends Component {
  render() {
    return (
      <Router basename={"reactrouterapp"}>
          <Switch>
              <Route path="/" render={() => {
                  return (
                      <Layout>
                          <Switch>
                              {
                                  routes.map((item, idx) => {
                                      if(item.exact) {
                                          return (
                                              <Route
                                                  key={idx}
                                                  exact={item.exact}
                                                  path={item.path}
                                                  component={item.component}
                                              ></Route>
                                          )
                                      }else{
                                          return (
                                              <Route
                                                  key={idx}
                                                  path={item.path}
                                                  render={() => {
                                                      return (
                                                          <item.component
                                                              ec={echarts}
                                                          ></item.component>
                                                      )
                                                  }}
                                              >
                                              </Route>
                                          )
                                      }
                                  })
                              }
                              {/*<Route exact path="/" component={Home}></Route>
                              <Route path="/line" render={() => {
                                  return <Line  ec={echarts}></Line>
                              }}></Route>
                              <Route path="/sunchart" render={() => {
                                return <SunChart  ec={echarts}></SunChart>
                              }}></Route>
                              <Route path="/elephent" render={() => {
                              return <Elephent  ec={echarts}></Elephent>
                              }}></Route>
                              <Route path="/map" render={() => {
                                  return <AMap></AMap>
                              }}></Route>
                              <Route path="/pie" render={() => {
                                  return <Pie  ec={echarts}></Pie>
                              }}></Route>
                              <Route path="/gauge" render={() => {
                                  return <Gauge  ec={echarts}></Gauge>
                              }}></Route>
                              <Route path="/parallel" render={() => {
                                  return <Parallel  ec={echarts}></Parallel>
                              }}></Route>
                              <Route path="/calendar" render={() => {
                                  return <Calendar  ec={echarts}></Calendar>
                              }}></Route>
                               <Route component={NotFound}></Route>*/}
                          </Switch>
                      </Layout>
                  )
              }}></Route>
          </Switch>
      </Router>
    );
  }
}

export default App;

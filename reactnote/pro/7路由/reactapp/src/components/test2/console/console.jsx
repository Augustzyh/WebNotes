import React, {Component} from 'react';
import {Link, Route} from "react-router-dom"
class Console extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <em>控制台</em>
                <hr/>
                {/*<Link to="/console/add">增加用户</Link><br/>
                <Link to="/console/del">删除用户</Link>*/}
                <Link to={`${this.props.match.url}/add`}>增加用户</Link><br/>
                <Link to={`${this.props.match.url}/del`}>删除用户</Link>

                {/*<Route path="/console/add" component={Add}></Route>
                <Route path="/console/del" component={Del}></Route>*/}
                {
                    this.props.routes.map((item, idx) => {
                        return (
                            <Route
                                key={idx}
                                path={item.path}
                                component={item.component}
                            ></Route>
                        )
                    })
                }
            </div>
        );
    }
}

export default Console;
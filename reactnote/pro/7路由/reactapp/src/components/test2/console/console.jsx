import React, {Component} from 'react';
import {Link, Route} from "react-router-dom"
import PropTypes from 'prop-types';

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
                <br/>
                {this.props.abc}
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
//默认属性设置  若父组件没传使用这个
Console.defaultProps = {
    abc: "这是默认的abc属性"
}
Console.propTypes = {
    abc: PropTypes.string
}
export default Console;
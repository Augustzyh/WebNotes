import React, {Component} from 'react';
import {Redirect} from "react-router-dom"
class Not404 extends Component {
    render() {
        return (
            <div>
                这里是404页面,正在准备重定向 可以开个定时器
                <Redirect to="/"></Redirect>
            </div>
        );
    }
}

export default Not404;
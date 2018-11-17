import React, {Component} from 'react';
import {NavLink} from "react-router-dom"
import "./index.scss"
class NavBottom extends Component {
    render() {
        return (
            <div className="navBottom">
                <NavLink exact to={"/"} href=""><i className="iconfont icon-icon-home"></i><span>首页</span></NavLink>
                <NavLink to={"/faxian"} href=""><i className="iconfont icon-foot03"></i><span>发现</span></NavLink>
                <NavLink to={"/cart"} href=""><i className="iconfont icon-Grotrrwwhh"></i><span>订单</span></NavLink>
                <NavLink to={"/mine"} href=""><i className="iconfont icon-wode"></i><span>我的</span></NavLink>
            </div>
        );
    }
}

export default NavBottom;
import React, {Component} from 'react';
import {NavLink} from "react-router-dom"
import "./index.css"
import {navlink} from "./navlink"
class NavLeft extends Component {
    render() {
        return (
            <div className="navLeft">
                <ul>
                    {
                        navlink.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <NavLink
                                        exact={item.exact}
                                        to={item.to}
                                    >{item.title}</NavLink>
                                </li>
                            )
                        })
                    }
                    {/*<li><NavLink exact to="/">首页</NavLink></li>
                    <li><NavLink to="/line">折线图</NavLink></li>
                    <li><NavLink to="/sunchart">旭日图</NavLink></li>
                    <li><NavLink to="/elephent">象形图</NavLink></li>
                    <li><NavLink to="/map">地图</NavLink></li>
                    <li><NavLink to="/pie">饼状图</NavLink></li>
                    <li><NavLink to="/gauge">汽车表盘</NavLink></li>
                    <li><NavLink to="/parallel">平行坐标系</NavLink></li>
                    <li><NavLink to="/calendar">日历坐标</NavLink></li>*/}
                </ul>
            </div>
        );
    }
}

export default NavLeft;
import React, {Component} from 'react';
import "./index.scss"
class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li>综合排序<span className={"iconfont icon-jiantouxia"}></span></li>
                    <li>距离最近</li>
                    <li>品质联盟</li>
                    <li>筛选  <span className={"iconfont icon-screeningclass"}></span></li>
                </ul>
            </div>
        );
    }
}

export default Menu;
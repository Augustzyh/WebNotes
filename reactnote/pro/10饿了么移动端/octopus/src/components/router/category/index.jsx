import React, {Component} from 'react';
import {Link} from "react-router-dom"
import "./index.scss"
import GoodsList from "../../index/goodslist";
import Menu from "../../index/menu";
class CategoryList extends Component {
    render() {
        return (
            <div className="categorylist">
                <div className="head pd20">
                    <div className="back iconfont icon-fanhui"><Link to="/"/></div>
                    <div className="title">美食</div>
                    <div className="tags">
                        <div className="list">
                            <ul>
                                <li><a href="#" className="active">全部</a></li>
                                <li><a href="#">简餐便当</a></li>
                                <li><a href="#">小吃炸串</a></li>
                                <li><a href="#">面食粥店</a></li>
                                <li><a href="#">地方菜系</a></li>
                                <li><a href="#">香锅冒菜</a></li>
                                <li><a href="#">汉堡披萨</a></li>
                                <li><a href="#">日韩料理</a></li>
                                <li><a href="#">轻食西餐</a></li>
                            </ul>
                        </div>
                        <div className="moreIcon iconfont icon-xiala"></div>
                    </div>
                </div>
                {/*下拉吸顶nav*/}
                <Menu/>
                {/*商品列表*/}
                <GoodsList/>
            </div>
        );
    }
}

export default CategoryList;
import React, {Component} from 'react';
import 'antd/dist/antd.css';
import "./index.scss"
import {Link, NavLink} from "react-router-dom"
import { Carousel, Rate } from 'antd';

class Home extends Component {
    render() {
        return (
            <div className="App">
                {/*定位*/}
                <div className="location">
                    <div className="sub">
                        <span className={"dingwei iconfont icon-dingweiweizhi"}></span>
                        <span className={"info"}>西安</span>
                        <span className={"iconfont icon-jiantouxia"}></span>
                    </div>
                </div>

                {/*吸顶盒*/}
                <div className="fixTop">
                    <Link to="/search">
                        <i className="iconfont icon-sousuo"></i>
                        <span>搜索饿了吗商家、商品名称</span>
                    </Link>
                </div>

                {/*分类导航*/}
                <div className="category pd20">
                    <Carousel>
                        <div className="nav-item">
                            <a href="#">
                                <img src={require("../../static/img/category/1.webp")} alt=""/>
                                <span>美食</span>
                            </a>
                            <a href="#">
                                <img src={require("../../static/img/category/2.webp")} alt=""/>
                                <span>午餐</span>
                            </a>
                            <a href="#">
                                <img src={require("../../static/img/category/3.webp")} alt=""/>
                                <span>商超便利</span>
                            </a>
                            <a href="#">
                                <img src={require("../../static/img/category/4.webp")} alt=""/>
                                <span>水果</span>
                            </a>
                            <a href="#">
                                <img src={require("../../static/img/category/5.webp")} alt=""/>
                                <span>甜品商品</span>
                            </a>
                            <a href="#">
                                <img src={require("../../static/img/category/6.webp")} alt=""/>
                                <span>医药健康</span>
                            </a>
                            <a href="#">
                                <img src={require("../../static/img/category/7.webp")} alt=""/>
                                <span>厨房生鲜</span>
                            </a>
                            <a href="#">
                                <img src={require("../../static/img/category/8.webp")} alt=""/>
                                <span>签到收红包</span>
                            </a>
                            <a href="#">
                                <img src={require("../../static/img/category/9.webp")} alt=""/>
                                <span>浪漫鲜花</span>
                            </a>
                            <a href="#">
                                <img src={require("../../static/img/category/10.webp")} alt=""/>
                                <span>跑腿代购</span>
                            </a>
                        </div>
                        <div  className="nav-item">
                            <a href="#">
                                <img src={require("../../static/img/category/11.webp")} alt=""/>
                                <span>地方菜系</span>
                            </a>
                            <a href="#">
                                <img src={require("../../static/img/category/12.webp")} alt=""/>
                                <span>麻辣烫</span>
                            </a>
                        </div>
                    </Carousel>
                </div>

                {/*抢购*/}
                <div className="scarebuy pd20">
                    <a href=""><img src={require("../../static/img/scarebuy/1.png")} alt=""/></a>
                    <a href=""><img src={require("../../static/img/scarebuy/2.png")} alt=""/></a>
                </div>

                {/*促销*/}
                <div className="promotion pd20">
                    <Carousel>
                        <div className="promotion-item"><a href=""><img src={require("../../static/img/promotion/1.webp")} alt=""/></a></div>
                        <div className="promotion-item"><a href=""><img src={require("../../static/img/promotion/2.webp")} alt=""/></a></div>
                        <div className="promotion-item"><a href=""><img src={require("../../static/img/promotion/3.webp")} alt=""/></a></div>
                        <div className="promotion-item"><a href=""><img src={require("../../static/img/promotion/4.webp")} alt=""/></a></div>
                        <div className="promotion-item"><a href=""><img src={require("../../static/img/promotion/5.webp")} alt=""/></a></div>
                    </Carousel>
                </div>

                {/*推荐商家*/}
                <div className="recommend pd20">
                    <div className="recommend-icon"><img src={require("../../static/img/recommend/1.jpg")} alt=""/></div>
                </div>

                {/*下拉吸顶nav*/}
                <div className="menu">
                    <ul>
                        <li>综合排序<span className={"iconfont icon-jiantouxia"}></span></li>
                        <li>距离最近</li>
                        <li>品质联盟</li>
                        <li>筛选  <span className={"iconfont icon-screeningclass"}></span></li>
                    </ul>
                </div>

                {/*商品列表*/}
                <div className="goodsList pd20">
                    <ul>
                        <li className="shopInfo">
                            <div className="logo">
                                <img src={require("../../static/img/recommend/goodslist1.webp")} alt=""/>
                            </div>
                            <div className="goodInfo">
                                <p className="title">鸭不腻烤肉</p>
                                <Rate value={5} />
                                <span className="ant-rate-text">5</span>
                                <span className="ant-rate-text">月售1480单</span>
                                <div className="money">
                                    <div className="cost">
                                        <span>¥20起送</span>
                                        &nbsp;|&nbsp;
                                        <span>远距离配送费¥3.6</span>
                                    </div>
                                    <div className="spend">
                                        <span>2.52km</span>
                                        &nbsp;|&nbsp;
                                        <span >42分钟</span>
                                    </div>
                                </div>
                                <div className="type">
                                    <span className="type-name">盖浇饭</span>
                                    {/*<span>
                                        <img src="" alt=""/>
                                        <span>
                                            口碑人气好店
                                        </span>
                                    </span>*/}
                                </div>
                                <div className="discount">
                                    <div>
                                        <span className="disicon discount-green">首</span>
                                        <span>新用户下单立减17元</span>
                                    </div>
                                    <div>
                                        <span className="disicon discount-red">减</span>
                                        <span>满59减18，满99减30</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="shopInfo">
                            <div className="logo">
                                <img src={require("../../static/img/recommend/goodslist1.webp")} alt=""/>
                            </div>
                            <div className="goodInfo">
                                <p className="title">鸭不腻烤肉</p>
                                <Rate value={5} />
                                <span className="ant-rate-text">5</span>
                                <span className="ant-rate-text">月售1480单</span>
                                <div className="money">
                                    <div className="cost">
                                        <span>¥20起送</span>
                                        &nbsp;|&nbsp;
                                        <span>远距离配送费¥3.6</span>
                                    </div>
                                    <div className="spend">
                                        <span>2.52km</span>
                                        &nbsp;|&nbsp;
                                        <span >42分钟</span>
                                    </div>
                                </div>
                                <div className="type">
                                    <span className="type-name">盖浇饭</span>
                                    {/*<span>
                                        <img src="" alt=""/>
                                        <span>
                                            口碑人气好店
                                        </span>
                                    </span>*/}
                                </div>
                                <div className="discount">
                                    <div>
                                        <span className="disicon discount-green">首</span>
                                        <span>新用户下单立减17元</span>
                                    </div>
                                    <div>
                                        <span className="disicon discount-red">减</span>
                                        <span>满59减18，满99减30</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="shopInfo">
                            <div className="logo">
                                <img src={require("../../static/img/recommend/goodslist1.webp")} alt=""/>
                            </div>
                            <div className="goodInfo">
                                <p className="title">鸭不腻烤肉</p>
                                <Rate value={5} />
                                <span className="ant-rate-text">5</span>
                                <span className="ant-rate-text">月售1480单</span>
                                <div className="money">
                                    <div className="cost">
                                        <span>¥20起送</span>
                                        &nbsp;|&nbsp;
                                        <span>远距离配送费¥3.6</span>
                                    </div>
                                    <div className="spend">
                                        <span>2.52km</span>
                                        &nbsp;|&nbsp;
                                        <span >42分钟</span>
                                    </div>
                                </div>
                                <div className="type">
                                    <span className="type-name">盖浇饭</span>
                                    {/*<span>
                                        <img src="" alt=""/>
                                        <span>
                                            口碑人气好店
                                        </span>
                                    </span>*/}
                                </div>
                                <div className="discount">
                                    <div>
                                        <span className="disicon discount-green">首</span>
                                        <span>新用户下单立减17元</span>
                                    </div>
                                    <div>
                                        <span className="disicon discount-red">减</span>
                                        <span>满59减18，满99减30</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="shopInfo">
                            <div className="logo">
                                <img src={require("../../static/img/recommend/goodslist1.webp")} alt=""/>
                            </div>
                            <div className="goodInfo">
                                <p className="title">鸭不腻烤肉</p>
                                <Rate value={5} />
                                <span className="ant-rate-text">5</span>
                                <span className="ant-rate-text">月售1480单</span>
                                <div className="money">
                                    <div className="cost">
                                        <span>¥20起送</span>
                                        &nbsp;|&nbsp;
                                        <span>远距离配送费¥3.6</span>
                                    </div>
                                    <div className="spend">
                                        <span>2.52km</span>
                                        &nbsp;|&nbsp;
                                        <span >42分钟</span>
                                    </div>
                                </div>
                                <div className="type">
                                    <span className="type-name">盖浇饭</span>
                                    {/*<span>
                                        <img src="" alt=""/>
                                        <span>
                                            口碑人气好店
                                        </span>
                                    </span>*/}
                                </div>
                                <div className="discount">
                                    <div>
                                        <span className="disicon discount-green">首</span>
                                        <span>新用户下单立减17元</span>
                                    </div>
                                    <div>
                                        <span className="disicon discount-red">减</span>
                                        <span>满59减18，满99减30</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="shopInfo">
                            <div className="logo">
                                <img src={require("../../static/img/recommend/goodslist1.webp")} alt=""/>
                            </div>
                            <div className="goodInfo">
                                <p className="title">鸭不腻烤肉</p>
                                <Rate value={5} />
                                <span className="ant-rate-text">5</span>
                                <span className="ant-rate-text">月售1480单</span>
                                <div className="money">
                                    <div className="cost">
                                        <span>¥20起送</span>
                                        &nbsp;|&nbsp;
                                        <span>远距离配送费¥3.6</span>
                                    </div>
                                    <div className="spend">
                                        <span>2.52km</span>
                                        &nbsp;|&nbsp;
                                        <span >42分钟</span>
                                    </div>
                                </div>
                                <div className="type">
                                    <span className="type-name">盖浇饭</span>
                                    {/*<span>
                                        <img src="" alt=""/>
                                        <span>
                                            口碑人气好店
                                        </span>
                                    </span>*/}
                                </div>
                                <div className="discount">
                                    <div>
                                        <span className="disicon discount-green">首</span>
                                        <span>新用户下单立减17元</span>
                                    </div>
                                    <div>
                                        <span className="disicon discount-red">减</span>
                                        <span>满59减18，满99减30</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="shopInfo">
                            <div className="logo">
                                <img src={require("../../static/img/recommend/goodslist1.webp")} alt=""/>
                            </div>
                            <div className="goodInfo">
                                <p className="title">鸭不腻烤肉</p>
                                <Rate value={5} />
                                <span className="ant-rate-text">5</span>
                                <span className="ant-rate-text">月售1480单</span>
                                <div className="money">
                                    <div className="cost">
                                        <span>¥20起送</span>
                                        &nbsp;|&nbsp;
                                        <span>远距离配送费¥3.6</span>
                                    </div>
                                    <div className="spend">
                                        <span>2.52km</span>
                                        &nbsp;|&nbsp;
                                        <span >42分钟</span>
                                    </div>
                                </div>
                                <div className="type">
                                    <span className="type-name">盖浇饭</span>
                                    {/*<span>
                                        <img src="" alt=""/>
                                        <span>
                                            口碑人气好店
                                        </span>
                                    </span>*/}
                                </div>
                                <div className="discount">
                                    <div>
                                        <span className="disicon discount-green">首</span>
                                        <span>新用户下单立减17元</span>
                                    </div>
                                    <div>
                                        <span className="disicon discount-red">减</span>
                                        <span>满59减18，满99减30</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="shopInfo">
                            <div className="logo">
                                <img src={require("../../static/img/recommend/goodslist1.webp")} alt=""/>
                            </div>
                            <div className="goodInfo">
                                <p className="title">鸭不腻烤肉</p>
                                <Rate value={5} />
                                <span className="ant-rate-text">5</span>
                                <span className="ant-rate-text">月售1480单</span>
                                <div className="money">
                                    <div className="cost">
                                        <span>¥20起送</span>
                                        &nbsp;|&nbsp;
                                        <span>远距离配送费¥3.6</span>
                                    </div>
                                    <div className="spend">
                                        <span>2.52km</span>
                                        &nbsp;|&nbsp;
                                        <span >42分钟</span>
                                    </div>
                                </div>
                                <div className="type">
                                    <span className="type-name">盖浇饭</span>
                                    {/*<span>
                                        <img src="" alt=""/>
                                        <span>
                                            口碑人气好店
                                        </span>
                                    </span>*/}
                                </div>
                                <div className="discount">
                                    <div>
                                        <span className="disicon discount-green">首</span>
                                        <span>新用户下单立减17元</span>
                                    </div>
                                    <div>
                                        <span className="disicon discount-red">减</span>
                                        <span>满59减18，满99减30</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/*底部导航*/}
                <div className="navBottom">
                    <NavLink exact to={"/"} href=""><i className="iconfont icon-icon-home"></i><span>首页</span></NavLink>
                    <NavLink to={"/faxian"} href=""><i className="iconfont icon-foot03"></i><span>发现</span></NavLink>
                    <NavLink to={"/cart"} href=""><i className="iconfont icon-Grotrrwwhh"></i><span>订单</span></NavLink>
                    <NavLink to={"/mine"} href=""><i className="iconfont icon-wode"></i><span>我的</span></NavLink>
                </div>
            </div>
        );
    }
}
export default Home;
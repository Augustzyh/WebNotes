import React, {Component} from 'react';
import "./index.scss"
import GoBack from "../../oftenuse/back";
class GoodsListSub extends Component {
    render() {
        return (
            <div className={"shopList"}>
                <GoBack/>
                <div className="shopContent">
                    <div className="headerbg">
                        <div className="shopIcon">
                            <img src={require('./img/shopIcon.webp')} alt=""/>
                        </div>
                    </div>
                    
                    <div className="shopDetial">
                        <div className="title">鸭不腻烤肉</div>
                        <div className="comment">
                            <span>评价 4.7</span>
                            <span>月售2343单</span>
                            <span>蜂鸟快送35分钟</span>
                        </div>
                        <div className="cash">
                            <img src={require("./img/money.png")} alt=""/>
                        </div>
                        <div className="newuser">
                            <span className="first">首单</span>
                            <span className="userReduce">新用户下单立减14元(不与其它活动同享)</span>
                            <span className="discount">10个优惠</span>
                        </div>
                        <div className="tip">
                            公告：餐厅是我的事业，口味是我的职业。您的满意是我们的追求。呷不腻烧烤欢迎您。
                        </div>
                    </div>
                </div>
                <div className="foodList">
                    <ul>
                        <li>
                            <div className={'foodIcon'}>
                                <img src={require('./img/1.jpeg')} alt=""/>
                            </div>
                            <div className={'foodInfo'}>
                                <div className={'info'}>
                                    <p className={'title'}> 招牌大鸡腿 </p>
                                    <p className={'mainMaterial'}>主要原料: 鸡腿</p>
                                    <p className={'goodComment'}>
                                        <span>月售1541份</span>
                                        <span>好评率98%</span>
                                    </p>
                                </div>
                                <div className={'price'}>
                                    <div className={'money'}>￥9</div>
                                    <div className={'addOrReduce'}>
                                        <span className={'remove iconfont icon-jian'}></span>
                                        <span className={'num'}>1</span>
                                        <span className={'add iconfont icon-jia1'}></span>
                                    </div>
                                </div>
                                <div className={'buyCart'}>
                                    <div className={'cart'}>
                                        <div className={'cartIcon iconfont icon-qicheqianlian-1-copy'}>
                                            <span className={'num'}>1</span>
                                        </div>

                                        <div className={'countPrice'}>￥<span>100</span></div>
                                    </div>

                                    <a href={'/'} className={'buy'}>去结算</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default GoodsListSub;
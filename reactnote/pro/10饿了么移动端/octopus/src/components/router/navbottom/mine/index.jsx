import React, {Component} from 'react';
import "./index.scss"
import Header from "../../../oftenuse/header";
import NavBottom from "../../../index/navbottom";
class Mine extends Component {
    render() {
        return (
            <div className="mine">
                <Header title={"我的"} />
                <div className="avator pd20">
                    <div className="icon">
                        <img src="" alt=""/>
                    </div>
                    <div className="descripe">
                        <div className="userInfo">
                            <a href="#" className="login">
                                <span>登陆</span>
                                <span>/</span>
                                <span>注册</span>
                            </a>
                        </div>
                        <div><i className="iconfont icon-shouji2"></i>登陆后享更多特权</div>
                    </div>
                    <div className="arrow"><i className="iconfont icon-iconfontyoujiantou"></i></div>
                </div>
                <div className="mainInfo">
                    <a href=""><i className="iconfont icon-caifu-mian"></i><span>钱包</span></a>
                    <a href=""><i className="iconfont icon-hongbao"></i><span>红包</span></a>
                    <a href=""><i className="iconfont icon-jifen-xianxing"></i><span>金币</span></a>
                </div>
                <div className="detialInfo">
                    <a href="#" className="infoList">
                        <span className="iconfont icon-wodedizhi" style={{color: "#4fd1fd"}}></span>
                        <span className="title">我的地址</span>
                    </a>
                </div>
                <div className="detialInfo">
                    <a href="#" className="infoList">
                        <span className="iconfont icon-xingzhuang" style={{color: "#fdab08"}}></span>
                        <span className="title">金币商城</span>
                    </a>
                    <a href="#" className="infoList">
                        <span className="iconfont icon-liwu" style={{color: "#f85044"}}></span>
                        <span className="title">分享拿10元现金</span>
                    </a>
                </div>
                <div className="detialInfo">
                    <a href="#" className="infoList">
                        <span className="iconfont icon-kefu" style={{color: "#11fc54"}}></span>
                        <span className="title">我的客服</span>
                    </a>
                    <a href="#" className="infoList">
                        <span className="iconfont icon-xiazaieliaomaapp" style={{color: "#33a6fd"}}></span>
                        <span className="title">下载饿了么app</span>
                    </a>
                </div>

                {/*底部导航*/}
                <NavBottom/>
            </div>
        );
    }
}

export default Mine;
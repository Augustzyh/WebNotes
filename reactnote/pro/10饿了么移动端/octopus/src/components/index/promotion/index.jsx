import React, {Component} from 'react';
import { Carousel } from 'antd';
import {Link} from "react-router-dom"
import "./index.scss"
class Promotion extends Component {
    render() {
        return (
            <div className="promotion pd20">
                <Carousel autoplay={true}>
                    <div className="promotion-item"><Link to={"/promotion/sub1"}><img src={require("../../../static/img/promotion/1.webp")} alt=""/></Link></div>
                    <div className="promotion-item"><Link to={"/promotion/sub2"}><img src={require("../../../static/img/promotion/2.webp")} alt=""/></Link></div>
                    <div className="promotion-item"><Link to={"/promotion/sub3"}><img src={require("../../../static/img/promotion/3.webp")} alt=""/></Link></div>
                    <div className="promotion-item"><Link to={"/promotion/sub4"}><img src={require("../../../static/img/promotion/4.webp")} alt=""/></Link></div>
                    <div className="promotion-item"><Link to={"/promotion/sub5"}><img src={require("../../../static/img/promotion/5.webp")} alt=""/></Link></div>
                </Carousel>
            </div>
        );
    }
}

export default Promotion;
import React, {Component} from 'react';
import "./index.scss"
import { Rate } from 'antd';
import Goods from "../../oftenuse/goods";
class GoodsList extends Component {
    render() {
        return (
            <div className="goodsList pd20">
                <ul>
                    <Goods id="1"/>
                    <Goods id="2"/>
                    <Goods id="3"/>
                    <Goods id="4"/>
                    <Goods id="5"/>
                    <Goods id="6"/>
                </ul>
            </div>
        );
    }
}

export default GoodsList;
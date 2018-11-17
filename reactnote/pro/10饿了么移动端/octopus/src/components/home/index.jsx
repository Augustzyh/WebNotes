import React, {Component} from 'react';
import 'antd/dist/antd.css';
import "./index.scss"

/*以下全在index内*/
import Location from "../index/location";
import FixTop from "../index/fixTop";
import Category from "../index/category";
import Scarebuy from "../index/scarebuy";
import Promotion from "../index/promotion";
import Recommend from "../index/recommend";
import Menu from "../index/menu";
import GoodsList from "../index/goodslist";
import NavBottom from "../index/navbottom";

class Home extends Component {
    render() {
        return (
            <div className="App">
                {/*定位*/}
                <Location/>

                {/*吸顶盒*/}
                <FixTop/>

                {/*分类导航*/}
                <Category/>

                {/*抢购*/}
                <Scarebuy/>

                {/*促销*/}
                <Promotion/>

                {/*推荐商家*/}
                <Recommend/>

                {/*下拉吸顶nav*/}
                <Menu/>

                {/*商品列表*/}
                <GoodsList/>

                {/*底部导航*/}
                <NavBottom/>

            </div>
        );
    }
}
export default Home;
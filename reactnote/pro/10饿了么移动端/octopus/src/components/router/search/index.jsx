import React, {Component} from 'react';
import {Icon, Input} from "antd"
import {Link} from "react-router-dom"
import "./index.scss"
const Search1 = Input.Search;
class Search extends Component {
    render() {
        return (
            <div className="search pd20">
                <div className="top">
                    <Link to="/"><Icon type="left" /></Link>
                    <div className="search1">
                        <Search1
                            placeholder="输入商家、商品名称"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                    </div>
                    <span>搜索</span>
                </div>

                <div className="hotSearch">
                    <div className="title">热门搜索</div>
                    <div className="hotGoods">
                        <span>胡辣汤</span>
                        <span>黄焖鸡</span>
                        <span>蛋糕</span>
                        <span>砂锅</span>
                        <span>炸鸡</span>
                        <span>星巴克</span>
                        <span>奶茶</span>
                        <span>饺子</span>
                        <span>冒菜</span>
                        <span>香锅</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
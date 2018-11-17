import React, {Component} from 'react';
import "./index.scss"
class CategoryList extends Component {
    render() {
        return (
            <div className="categorylist">
                <div className="head pd20">
                    <div className="back iconfont icon-fanhui"></div>
                    <div className="title">美食</div>
                </div>
            </div>
        );
    }
}

export default CategoryList;
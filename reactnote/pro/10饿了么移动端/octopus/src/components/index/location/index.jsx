import React, {Component} from 'react';
import "./index.scss"
class Location extends Component {
    render() {
        return (
            <div className="location">
                <div className="sub">
                    <span className={"dingwei iconfont icon-dingweiweizhi"}></span>
                    <span className={"info"}>西安</span>
                    <span className={"iconfont icon-jiantouxia"}></span>
                </div>
            </div>
        );
    }
}

export default Location;
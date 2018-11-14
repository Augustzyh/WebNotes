import React, {Component} from 'react';
import "./index.css"
import "../../static/fonts/iconfont.css"
class NavTop extends Component {
    render() {
        return (
            <div className="navTop">
                <ul>
                    <li><a href="/" className="active">August</a></li>
                    <li><a href="/" className="iconfont icon-qing1"></a></li>
                    <li><a href="/" className="iconfont icon-tianqi1"></a></li>
                    <li><a href="/" className="iconfont icon-ditu"></a></li>
                    <li><a href="/" className="iconfont icon-weibiaoti2fuzhi12"></a></li>
                </ul>
            </div>
        );
    }
}

export default NavTop;
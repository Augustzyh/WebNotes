import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div id="header">
                <div className="h-main">
                    {/*!--logo--*/}
                    <div className="h-m-logo">
                        <img src="" alt="" width="132" height="37" />
                    </div>
                    {/*!--nav--*/}
                    <div className="h-m-nav">
                        <ul className="nav-list1">
                            <li className="active">首页</li>
                            <li>移动校园</li>
                            <li>经典案例</li>
                            <li>公司动态</li>
                            <li>招贤纳士</li>
                            <li>联系我们</li>
                        </ul>
                        <ul className="nav-list2">
                            <li className="active">首页</li>
                            <li>移动校园</li>
                            <li>经典案例</li>
                            <li className="more">更多<img alt="" src=""/>
                                <div className="more-hide">
                                    <ul>
                                        <li>行业新闻</li>
                                        <li>招贤纳士</li>
                                        <li>联系我们</li>
                                        <li>兰途家族</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
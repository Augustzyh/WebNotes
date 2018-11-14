import React, {Component} from 'react';
import "./index.css"
import Logo from "../logo"
import NavLeft from "../navleft"
import NavTop from "../navtop"
class Layout extends Component {
    render() {
        return (
            <div className="main">
                <div className="leftSide">
                    <div className="logo">
                        <Logo></Logo>
                    </div>
                    <NavLeft></NavLeft>
                </div>
                <div className="rightSide">
                    <NavTop></NavTop>
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
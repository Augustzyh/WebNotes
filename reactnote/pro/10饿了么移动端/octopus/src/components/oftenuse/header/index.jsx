import React, {Component} from 'react';
import "./index.scss"
import GoBack from "../back";

class Header extends Component {
    render() {
        return (
            <div className="categorylist">
                <div className="head pd20">
                    <GoBack/>
                    <div className="title">{this.props.title}</div>
                </div>
            </div>
        );
    }
}

export default Header;
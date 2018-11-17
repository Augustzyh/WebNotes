import React, {Component} from 'react';
import "./index.scss"
class Recommend extends Component {
    render() {
        return (
            <div className="recommend pd20">
                <div className="recommend-icon"><img src={require("../../../static/img/recommend/1.jpg")} alt=""/></div>
            </div>
        );
    }
}

export default Recommend;
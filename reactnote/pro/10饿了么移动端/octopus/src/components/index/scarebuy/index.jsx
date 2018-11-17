import React, {Component} from 'react';
import "./index.scss"
class Scarebuy extends Component {
    render() {
        return (
            <div className="scarebuy pd20">
                <a href=""><img src={require("../../../static/img/scarebuy/1.png")} alt=""/></a>
                <a href=""><img src={require("../../../static/img/scarebuy/2.png")} alt=""/></a>
            </div>
        );
    }
}

export default Scarebuy;
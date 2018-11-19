import React, {Component} from 'react';
import "./index.scss"
import {Link} from "react-router-dom"
class Scarebuy extends Component {
    render() {
        return (
            <div className="scarebuy pd20">
                <Link to="/scarebuy/sub1"><img src={require("../../../static/img/scarebuy/1.png")} alt=""/></Link>
                <Link to="/scarebuy/sub2"><img src={require("../../../static/img/scarebuy/2.png")} alt=""/></Link>
            </div>
        );
    }
}

export default Scarebuy;
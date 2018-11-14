import React, {Component} from 'react';
import "./index.css"
class NotFound extends Component {
    render() {
        return (
            <div className="notfound">
                <img src={require("./404.png")} alt=""/>
            </div>
        );
    }
}

export default NotFound;
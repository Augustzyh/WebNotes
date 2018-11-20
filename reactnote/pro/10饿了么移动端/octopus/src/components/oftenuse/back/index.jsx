import React, {Component} from 'react';
import "./index.scss";
class GoBack extends Component {
    handleBack = ()=>{
        window.history.go(-1)
    }
    render() {
        return (
            <i onClick={this.handleBack} className={'back iconfont icon-fanhui'}></i>
        );
    }
}

export default GoBack;
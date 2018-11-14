import React, {Component} from 'react';
import {option} from "./elephent";

class Elephent extends Component {
    componentDidMount() {
        let ele = this.refs.elephent
        let ec = this.props.ec
        // 基于准备好的dom，初始化echarts实例
        let myChart = ec.init(ele);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
    render() {
        return (
            <div ref='elephent' style={{background: "#ddd"}}></div>
        );
    }
}

export default Elephent;
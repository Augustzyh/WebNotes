import React, {Component} from 'react';
import {option} from "./gauge"
class Gauge extends Component {
    componentDidMount() {
        let ele = this.refs.line
        let ec = this.props.ec
        // 基于准备好的dom，初始化echarts实例
        let myChart = ec.init(ele);
        // 使用刚指定的配置项和数据显示图表。
        setInterval(function (){
            option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
            option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
            option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
            option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
            myChart.setOption(option);
        },2000)
    }
    render() {
        return (
            <div ref='line'></div>
        );
    }
}

export default Gauge;
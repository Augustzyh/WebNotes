import React, {Component} from 'react';

class Home extends Component {
    constructor () {
        super()
        this.state = {
            user: "hang",
            list: []
        }
    }
    handlerClick = () => {
        console.log(this.refs.txt.value);  //此方法非约束性控件，一般不用
    }
    inputChange = (e) => {
        //console.log(e.target.value);  实现双向数据绑定
        this.setState({
            user: e.target.value
        })
    }
    inputKeyUp = (e) => {
        if(e.keyCode === 13){
            console.log(e.target.value);
            this.state.list.push(e.target.value)
            this.setState({
                list : this.state.list
            })
        }
    }
    render() {
        return (
            <div>
                <h2>表单</h2>
                <input onChange={this.inputChange} type="text" ref="txt" />
                <button onClick={this.handlerClick}>获取input的值</button>
                <b>实现双向数据绑定hhh:{this.state.user}</b>
                <br/>
                <input type="text" onKeyUp={this.inputKeyUp}/>
                <ul>
                    {
                        this.state.list.map((item, idx) => {
                            return(
                                <li key={idx}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Home;
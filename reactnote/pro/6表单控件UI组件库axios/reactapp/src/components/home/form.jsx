import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super()
        //监听状态约束性组件！用value一定要onChange
        this.state = {
            user: "hang",
            sex: '',
            city: '',
            cityList: ["西安","贵阳","成都"],
            like: [
                {
                    title: "play",
                    checked: true
                },
                {
                    title: "fly",
                    checked: true
                },{
                    title: "eat",
                    checked: true
                },{
                    title: "sleep",
                    checked: false
                },
            ],
            textVal : ''
        }
    }
    inputChange = (e) => {
        console.log(e.target.value);
        this.setState({
            user: e.target.value
        })
    }
    handleSubmit = (e) => {
        //阻止默认事件不跳转
        e.preventDefault()
        console.log(this.state.user,
            this.state.sex === '1'? "女" : "男",
            this.state.city,
            this.state.like,
            this.state.textVal
            );
    }
    handleSex = (e) => {
        this.setState({
            sex: e.target.value
        })
    }
    handleCity = (e) => {
        console.log(e.target.value)
        this.setState({
            city: e.target.value
        })
    }
    handleLike = (key) => {
        //console.log(e.target.checked);
        const like = this.state.like
        like[key].checked = !like[key].checked
        this.setState({
            like
        })
    }
    handleTextarea = (e) => {
        console.log(e.target.value);
        this.setState({
            textVal: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" defaultValue="txt" placeholder="please enter"/>
                <br/>
                <input type="text" value="txt" onChange={this.inputChange}/>
                <br/><br/>
                <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
                    用户名: <input type="text" value={this.state.user} onChange={this.inputChange}/>
                    性别: 男<input type="radio" value="0" checked={this.state.sex === '0'} onChange={this.handleSex}/>
                    女 <input type="radio" value="1"  checked={this.state.sex === '1'} onChange={this.handleSex}/>
                    <br/><br/><br/>
                    {/*react重构 select不必写value*/}
                    <select onChange={this.handleCity}>
                        {
                            this.state.cityList.map((item, idx) => {
                                return (
                                    <option key={idx}>{item}</option>
                                )
                            })
                        }
                    </select>
                    <br/><br/>
                    爱好：
                    {
                        this.state.like.map((item, idx) => {
                            return (
                                <input
                                    type="checkbox"
                                    key={idx}
                                    checked={item.checked}
                                    onChange={this.handleLike.bind(this,idx)}
                                />
                            )
                        })
                    }
                    <br/><br/>
                    <textarea value={this.state.textVal} onChange={this.handleTextarea}></textarea>
                    <input type="submit" defaultValue={"点击提交"}/>
                </form>
            </div>
        );
    }
}

export default Form;
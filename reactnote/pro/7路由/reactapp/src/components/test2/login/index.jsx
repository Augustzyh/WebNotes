import React, {Component} from 'react';
import {Redirect} from "react-router-dom"
class Login extends Component {
    /*constructor(){
        super()
        /!*this.state = {

        }*!/
    }*/
    //state写这也可以哦
    state = {
        onOffLogin: false
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const ele = this.refs
        if(ele.user.value === 'aaa' && ele.psw.value === '123' ){
            console.log("登陆成功");
            this.setState({
                onOffLogin: true
            })
        }
    }
    render() {
        if(this.state.onOffLogin){
            //from参数 监听当前是哪个路由 然后进行跳转 以下是其他写法
            /*<Redirect from="/news" to={{pathname:"/"}}/>*/
            return <Redirect to="/"/>
        }
        return (
            <div>
                <p>这是登陆页面</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="user"/><br/>
                    <input type="password" ref="psw"/><br/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default Login;
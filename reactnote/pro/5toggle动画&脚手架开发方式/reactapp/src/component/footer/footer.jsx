import React, {Component} from 'react';

class Footer extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div id="copy">
                <span>备案号：蜀ICP备13025447号-1</span>
                <span>©2013-2017 版权所有</span>
                <span>成都兰途网络科技有限公司</span>
            </div>
        );
    }
}

export default Footer;
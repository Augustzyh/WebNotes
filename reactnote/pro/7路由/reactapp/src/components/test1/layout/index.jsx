import React, {Component} from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                <p>这是layout,让其他三个页面在这里显示</p>
                {/*如下代码承载其他组件内容*/}
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
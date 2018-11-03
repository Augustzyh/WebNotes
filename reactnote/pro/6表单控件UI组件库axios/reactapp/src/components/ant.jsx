import React, {Component} from 'react';
import { Button,Icon,Pagination,Calendar   } from 'antd';
class Ant extends Component {
    showTotal(total) {
        return `Total ${total} items`;
    }
    onPanelChange(value, mode) {
        console.log(value, mode);
    }
    render() {
        return (
            <div>
                <Button type="primary" shape="circle" icon="search" />
                <Button type="primary" icon="search">Search</Button>
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <br />
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <Button type="dashed" shape="circle" icon="search" />
                <Button type="dashed" icon="search">Search</Button>
                <Icon type="fast-forward" theme="outlined" className="iconhang" />
                <Pagination size="small" total={500} />
                <Pagination size="small" total={50} showSizeChanger showQuickJumper />
                <Pagination size="small" total={50} showTotal={this.showTotal} />
                <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
            </div>
        );
    }
}

export default Ant;
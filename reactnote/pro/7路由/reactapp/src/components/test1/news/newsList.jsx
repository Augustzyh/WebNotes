import React, {Component} from 'react';

class NewsList extends Component {
    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                <i>新闻详情</i>
            </div>
        );
    }
}

export default NewsList;
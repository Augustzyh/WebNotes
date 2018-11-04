import React, {Component} from 'react';
import Url from "url"
class ProductsList extends Component {
    render() {
        const query = Url.parse(this.props.location.search,true).query
        //console.log(Url.parse(this.props.location.search,true));
        console.log(query.id);
        return (
            <div>
                <i>这是商品详情</i>
            </div>
        );
    }
}

export default ProductsList;
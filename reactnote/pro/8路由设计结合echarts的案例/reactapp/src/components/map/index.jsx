import React, {Component} from 'react';
import { Map, Marker, Circle } from 'react-amap';
class AMap extends Component {
    constructor(){
        super();
        this.state = {
            center: {longitude: 109, latitude: 34.6},
            radius: 5000,
            visible: true,
            style: {strokeColor: '#fffc16',fillColor:"#fffc16"},
            draggable: true,
        };
        this.toolEvents = {
            created: (tool) => {
                this.tool = tool;
            }
        }
        this.mapPlugins = ['ToolBar'];
        this.mapCenter = {longitude: 109, latitude: 34.6};
        this.markerPosition = {longitude: 109, latitude: 34.6};
    }
    render() {
        return (
            <div>
                <Map
                    amapkey={'788e08def03f95c670944fe2c78fa76f'}
                    plugins={this.mapPlugins}
                    center={this.mapCenter}
                    zoom={10}
                >
                    <Circle
                        center={ this.state.center }
                        radius={ this.state.radius }
                        visible={ this.state.visible }
                        style={ this.state.style }
                        draggable={ this.state.draggable }
                    />
                    <Marker position={this.markerPosition} />
                </Map>
            </div>
        );
    }
}

export default AMap;
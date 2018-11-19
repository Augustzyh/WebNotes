import React, {Component} from 'react';
import "./index.scss"
class Discover extends Component {
    render() {
        return (
            <div className="discover">
                <div className="discovervideo">
                    <div className="videoContainer">
                        <div className="con">
                            <video width={'100%'} height={'100%'} autoPlay muted src="https://app-builder-resource.oss-cn-shanghai.aliyuncs.com/prod/uploadckjn5re0ra.mp4"></video>
                        </div>
                    </div>
                </div>
                <div className="discovermap"></div>
            </div>
        );
    }
}

export default Discover;
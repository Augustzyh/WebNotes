import React, {Component} from 'react';

class Main extends Component {
    render() {
        return (
            <div id="banner">
                <div className="b-part">
                    <div className="part part1">
                        <div className="img1"></div>
                        <div className="img2"></div>
                    </div>
                    <div className="part part2">
                        <div className="img1">
                            <p><img src="../../../static/img/index/bg2-1.png" alt=""/></p>
                            <p><img src="../../../static/img/index/bg2-2.png" alt=""/></p>
                            <p>
                                <img src="../../../static/img/index/bg2-3.png" alt=""/></p>
                        </div>
                        <div className="img2"></div>
                    </div>
                    <div className="part part3">
                        <div className="img1"></div>
                        <div className="img2">
                            <p><img src="../../../static/img/index/bg3-3.png" alt=""/></p>
                            <p><img src="../../../static/img/index/bg3-4.png" alt=""/></p>
                            <p>
                                <img src="../../../static/img/index/bg3-5.png" alt=""/></p>
                        </div>
                    </div>
                </div>
                <div className="b-tab">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Main;
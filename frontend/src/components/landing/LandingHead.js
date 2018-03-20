import React, { Component } from 'react';
import children from '../../images/children.jpg';
import coding from '../../images/coding_web23.jpg';
import swift from '../../images/swiftother01.jpg';

import * as $ from 'jquery';

class LandingHead extends Component {

    componentDidMount() {
        $('.carousel').carousel({
            interval: 3000
        });
    }

    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={swift} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={children} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={coding} alt="Third slide"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingHead;

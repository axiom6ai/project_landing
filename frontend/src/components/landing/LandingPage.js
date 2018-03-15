import React, { Component } from 'react';

import LandingHead from './LandingHead';
import LandingBody from './LandingBody';
import './LandingPage.css';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <LandingHead />
                <LandingBody />
            </div>
        );
    }
}

export default LandingPage;

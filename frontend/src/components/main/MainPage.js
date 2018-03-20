import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './MainPage.css';

import BioPage from '../biography/BioPage';
import DemoPage from '../demo/DemoPage';
import MemberDetailPage from '../biography/MemberDetailPage';

class MainPage extends Component {
    render() {
        return (
            <div>
                <div className="main-content-wrapper">
                    <Route path='/main/bio' component={BioPage} />
                    <Route path='/main/members/:id' component={MemberDetailPage} />
                    <Route path='/main/demo' component={DemoPage} />
                </div>
            </div>
        );
    }
}

export default MainPage;

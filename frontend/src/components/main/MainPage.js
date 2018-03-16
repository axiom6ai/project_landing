import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavMenu from '../common/NavMenu';

import BioPage from '../biography/BioPage';
import DemoPage from '../demo/DemoPage';
import MemberDetailPage from '../biography/MemberDetailPage';

class MainPage extends Component {
    render() {
        return (
            <div>
                <NavMenu />
                <Route path='/main/bio' component={BioPage} />
                <Route path='/main/members/:id' component={MemberDetailPage} />
                <Route path='/main/demo' component={DemoPage} />
            </div>
        );
    }
}

export default MainPage;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavMenu from '../common/NavMenu';

import BioPage from '../biography/BioPage';
import DemoPage from '../demo/DemoPage';

class MainPage extends Component {
    render() {
        return (
            <div>
                <NavMenu />
                <Switch>
                    <Route path='/main/bio' component={BioPage} />
                    <Route path='/main/demo' component={DemoPage} />
                </Switch>
            </div>
        );
    }
}

export default MainPage;

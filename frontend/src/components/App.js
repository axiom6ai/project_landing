import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LandingPage from './landing/LandingPage';
import MainPage from './main/MainPage';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path='/' component={LandingPage} />
                <Route path='/main' component={MainPage} />
            </div>
        );
    }
}

export default App;

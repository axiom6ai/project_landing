import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LandingPage from './landing/LandingPage';
import MainPage from './main/MainPage';
import Footer from './common/Footer';
import NavMenu from './common/NavMenu';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavMenu />
                <div className="content-wrapper">
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/main' component={MainPage} />
                </div>
                <div className="footer-wrapper">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;

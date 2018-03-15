import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="container">
                    <div className="menu-container">
                        <div className="menu-item">
                            <Link to="main/bio">
                                <div>
                                    <MaterialIcon icon="group" color="black" size={100} />
                                </div>
                                <div className="menu-item-text">Biography</div>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="main/demo">
                                <div>
                                    <MaterialIcon icon="airplay" color="black" size={100} />
                                </div>
                                <div className="menu-item-text">Demo</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavMenu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand"
                        to="/"
                        activeClassName="active">
                        Home
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link"
                                to="/main/bio"
                                activeClassName="active">
                                Bio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"
                                to="/main/demo"
                                activeClassName="active">
                                Demo
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}


export default NavMenu;

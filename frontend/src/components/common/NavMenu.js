import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import brand from '../../images/brand_1.png';
import MaterialIcon from 'material-icons-react';
import './NavMenu.css';

const initNavBarClass = 'navbar navbar-expand-lg navbar-wrapper';

class NavMenu extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            navBarClass: initNavBarClass
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let className;
        if (window.scrollY > 0) {
            className = 'navbar navbar-expand-lg navbar-wrapper fixed';
        } else {
            className = initNavBarClass;
        }

        this.setState({
            navBarClass: className
        });
    }

    render() {
        return (
            <div className={this.state.navBarClass}>
                <nav className="container">
                    <NavLink className="navbar-brand"
                            to="/"
                            activeClassName="active">
                            <img src={brand} height="45" width="45" alt="logo"/>
                    </NavLink>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span>
                            <MaterialIcon icon="list" color="#FFFFFF" size={40} />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse navbar-list" id="navbarNav">
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
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/main/demo"
                                    activeClassName="active">
                                    Articles
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/main/demo"
                                    activeClassName="active">
                                    Partner
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}


export default NavMenu;

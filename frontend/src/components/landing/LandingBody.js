import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';

class LandingBody extends Component {
    render() {
        return (
            <div className="landing-body">
                <div className="container">
                    <div className="menu-container">
                        <div className="menu-item">
                            <Link to="main/bio">
                                <div>
                                    <MaterialIcon icon="group" color="#80ADD7" size={100} />
                                </div>
                                <div className="menu-item-text">Biography</div>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="main/demo">
                                <div>
                                    <MaterialIcon icon="airplay" color="#0ABDA0" size={100} />
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

export default LandingBody;

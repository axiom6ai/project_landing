import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as memberActions from '../../actions/memberActions';

class BioPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                Biopage
            </div>
        );
    }
}

BioPage.propTypes = {
    members: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        members: state.members
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(memberActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BioPage);

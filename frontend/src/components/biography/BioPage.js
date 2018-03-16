import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MemberList from './MemberList';

import * as memberActions from '../../actions/memberActions';

class BioPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const members = this.props.members;
        const memberPictures = this.props.memberPictures;
        return (
            <div>
                <MemberList members={members} memberPictures={memberPictures} />
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
        members: state.members,
        memberPictures: state.pictures
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(memberActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BioPage);

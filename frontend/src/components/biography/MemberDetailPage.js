import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../../actions/memberActions';
import * as _ from 'lodash';

class MemberDetailPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log(this.props.member);
        return (
            <div></div>
        );
    }
}

MemberDetailPage.propTypes = {
    member: PropTypes.object.isRequired,
};

function getMemberById(members, id) {
    const member = members.filter(member => member.id === parseInt(id));
    if (member) {
        return member[0];
    }
    return null;
}

function mapStateToProps(state, ownProps) {
    const memberId = ownProps.location.pathname.split('/').slice(-1)[0];
    let member = {};
    if (memberId && !_.isEmpty(state.members)) {
        member = getMemberById(state.members, memberId);
    }

    return {
        member: member
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(memberActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetailPage);

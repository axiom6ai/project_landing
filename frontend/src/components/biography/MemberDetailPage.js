import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../../actions/memberActions';
import * as _ from 'lodash';
import ReactHtmlParser from 'react-html-parser';

import { Menu } from 'semantic-ui-react';
import './biography.css';

const languages = [{
    key: 'en',
    value: 'English'
}, {
    key: 'fr',
    value: 'Français'
}, {
    key: 'ch',
    value: '中文'
}];

class MemberDetailPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedLang: languages[0]
        };

        this.selectLanguage = this.selectLanguage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.member.id !== nextProps.member.id) {
            this.setState({
                course: Object.assign({}, nextProps.member)
            });
        }
    }

    selectLanguage = (language) => (e) => {
        return this.setState({
            selectedLang: language
        });
    }

    render() {
        const { selectedLang } = this.state;
        const member = this.props.member;
        return (
            <div className="container">
                <Menu pointing secondary className="language-bar">
                    <Menu.Item name='English'
                        active={selectedLang.value === 'English'}
                        onClick={this.selectLanguage(languages[0])}/>
                    <Menu.Item name='Français'
                        active={selectedLang.value === 'Français'}
                        onClick={this.selectLanguage(languages[1])}/>
                    <Menu.Item name='中文'
                        active={selectedLang.value === '中文'}
                        onClick={this.selectLanguage(languages[2])}/>
                </Menu>
                <div className="row member-detail">
                    <div className="member-img-wrapper">
                        <div>
                            <img src={this.props.imgSrc}
                                className="member-img img-responsive img-rounded" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="member-info-wrapper">
                            <h2><strong>{member.firstName + ' ' + member.lastName}</strong></h2>
                            <p>
                                {ReactHtmlParser(member.bio[selectedLang.key])}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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

    let imgSrc = state.pictures[member.pictureKey]
    return {
        member: member,
        imgSrc: imgSrc
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(memberActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetailPage);

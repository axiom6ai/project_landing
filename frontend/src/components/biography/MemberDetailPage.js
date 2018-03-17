import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../../actions/memberActions';
import * as _ from 'lodash';

import { Menu } from 'semantic-ui-react';
import './biography.css';

const languages = [
    'en',
    'fr',
    'ch'
];

class MemberDetailPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedLang: languages[0]
        };

        this.setToEnglish = this.setToEnglish.bind(this);
        this.setToFrench = this.setToFrench.bind(this);
        this.setToChinese = this.setToChinese.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.member.id !== nextProps.member.id) {
            this.setState({
                course: Object.assign({}, nextProps.member)
            });
        }
    }

    setToEnglish() {
        return this.setState({
            selectedLang: languages[0]
        });
    }

    setToFrench() {
        return this.setState({
            selectedLang: languages[1]
        });
    }

    setToChinese() {
        return this.setState({
            selectedLang: languages[2]
        });
    }

    render() {
        const { selectedLang } = this.state;
        return (
            <div className="container">
                <Menu pointing secondary className="language-bar">
                    <Menu.Item name='en'
                        active={selectedLang === 'en'}
                        onClick={this.setToEnglish}/>
                    <Menu.Item name='fr'
                        active={selectedLang === 'fr'}
                        onClick={this.setToFrench}/>
                    <Menu.Item name='ch'
                        active={selectedLang === 'ch'}
                        onClick={this.setToChinese}/>
                </Menu>
                <div className="row member-detail">
                    <div>
                        <div className="col-md-6">
                            <img src={this.props.imgSrc}
                                className="member-img img-responsive img-rounded" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p><strong>Lorem ipsum dolor sit amet, ei purt</strong></p>
                        <p>
                            {this.props.member.bio[selectedLang]}
                        </p>
                        <blockquote>
                            Pri pertinacia elaboraret te, an eirmod delicatissimi nec. Eu liber quodsi maiorum mei. Civibus perfecto rationibus id his, est noster nostrud aliquando at.
                        </blockquote>
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

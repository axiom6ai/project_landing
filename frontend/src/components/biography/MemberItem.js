import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
import linkedinLogo from '../../images/logo.svg';
import './biography.css';

const MemberItem = ({member, imgSrc}) => {
    return (
        <Card>
            <Card.Content>
                <Image src={imgSrc}
                    floated='right'
                    width={80}
                    height={80}
                    circular />
                <Card.Header>
                    {member.firstName + ' ' + member.lastName}
                </Card.Header>
                <Card.Meta>
                    <a href={member.socialMediaLink.linkedin}>
                        <img className="linkedin-logo" src={linkedinLogo} alt="logo" />
                    </a>
                </Card.Meta>
                <Card.Description>
                    {member.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Link to={'/main/members/' + member.id}>
                    <Button basic color='green'>View Detail</Button>
                </Link>
            </Card.Content>
        </Card>
    );
};

MemberItem.propTypes = {
    member: PropTypes.object.isRequired
};

export default MemberItem;

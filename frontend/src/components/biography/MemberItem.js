import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'semantic-ui-react';
import linkedinLogo from '../../images/logo.svg';
import facebookLogo from '../../images/facebook.svg';
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
                    Neque porro quisquam
                    <img className="linkedin-logo" src={linkedinLogo} alt="logo" />
                    <img className="facebook-logo" src={facebookLogo} alt="logo" />
                </Card.Meta>
                <Card.Description>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>View Detail</Button>
                </div>
            </Card.Content>
        </Card>
    );
};

MemberItem.propTypes = {
    member: PropTypes.object.isRequired
};

export default MemberItem;

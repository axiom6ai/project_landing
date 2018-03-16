import React from 'react';
import PropTypes from 'prop-types';
import MemberItem from './MemberItem';
import { Card } from 'semantic-ui-react';

const MemberList = ({members, memberPictures}) => {
    return (
        <div className="container">
            <Card.Group>
                {members.map(member =>
                    <MemberItem key={member.id}
                        member={member}
                        imgSrc={memberPictures[member.pictureKey]} />
                )}
            </Card.Group>
        </div>
    );
};

MemberList.propTypes = {
    members: PropTypes.array.isRequired,
    memberPictures: PropTypes.object.isRequired
};

export default MemberList;

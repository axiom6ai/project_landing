import * as types from './actionTypes';
import memberApi from '../mockApi/mockMemberApi';

function loadMembersSuccess(members) {
    return {
        type: types.LOAD_MEMBERS_SUCCESS,
        members: members
    };
}

export function loadMembers() {
    return function(dispatch) {
        return memberApi.getAllMembers().then(members => {
            dispatch(loadMembersSuccess(members));
        }).catch(error => {
            throw(error);
        });
    };
}

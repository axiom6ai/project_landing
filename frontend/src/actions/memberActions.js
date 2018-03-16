import * as types from './actionTypes';
import memberApi from '../mockApi/mockMemberApi';

function loadMembersSuccess(members) {
    return {
        type: types.LOAD_MEMBERS_SUCCESS,
        members: members
    };
}

function loadMemberPicsSuccess(pictures) {
    return {
        type: types.LOAD_MEMBER_PICS_SUCCESS,
        pictures: pictures
    }
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

export function loadMembersPictures() {
    return function(dispatch) {
        return memberApi.getMemberPictures().then(pictures => {
            dispatch(loadMemberPicsSuccess(pictures));
        }).catch(error => {
            throw(error);
        });
    };
}

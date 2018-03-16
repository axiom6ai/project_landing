import * as types from '../actions/actionTypes';
import initialState from './initialState';

function pictureReducer(state = initialState.pictures, action) {
    switch(action.type) {
        case types.LOAD_MEMBER_PICS_SUCCESS:
            return action.pictures;

        default:
            return state;
    }
}

export default pictureReducer;

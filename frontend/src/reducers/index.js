import { combineReducers } from 'redux';
import members from './memberReducer';
import pictures from './pictureReducer';

const rootReducer = combineReducers({
    members,
    pictures
});

export default rootReducer;

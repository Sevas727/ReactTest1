import {combineReducers} from 'redux';
import videosReducer from './videosReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    userReducer,
    videosReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import AuthenticationReducer from './Authentication-Reducer';

export default combineReducers({
    auth: AuthenticationReducer
});
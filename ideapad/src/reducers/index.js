import { combineReducers } from 'redux';
import AuthenticationReducer from './Authentication-Reducer';
import IdeaPadFormReducer from './IdeaPad-Form-Reducer';

export default combineReducers({
    auth: AuthenticationReducer,
    ideaPadForm: IdeaPadFormReducer, 
});
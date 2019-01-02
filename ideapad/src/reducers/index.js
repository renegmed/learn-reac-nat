import { combineReducers } from 'redux';
import AuthenticationReducer from './Authentication-Reducer';
import IdeaPadFormReducer from './IdeaPad-Form-Reducer';
import IdeasReducer from './Ideas-Reducer';

export default combineReducers({
    auth: AuthenticationReducer,
    ideaPadForm: IdeaPadFormReducer, 
    ideas: IdeasReducer
});
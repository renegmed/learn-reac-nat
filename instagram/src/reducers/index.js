import { combineReducers } from 'redux';
import PhotosReducers from './Photos-Reducer';

const rootReducer = combineReducers({
    photos: PhotosReducers
})

export default rootReducer;
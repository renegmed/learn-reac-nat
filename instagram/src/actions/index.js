import axios from 'axios';

export function getPhotos() {  // returns a function for async processing by middleware thunk
    return (dispatch) => {      // whenever getPhotos() is called, this will be called asynchronuously and result is received by reducer
        axios.get('http://localhost:3000/photos')  
            .then( (response) => {
                dispatch({
                    type: 'GET_PHOTOS',
                    payload: response.data
                });
            }).catch (err => console.log(err));
    } 
}
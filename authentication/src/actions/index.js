import firebase from 'firebase';

export const authInputChange = ({field, value}) => {
    return {
        type: 'AUTH_INPUT_CHANGE',
        payload: {field, value},   // field: 'email', value: 'test@mytest.com'

    }
}

export const login = ({ email, password }) => {
    return (dispatch) => { 
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({type: 'LOGIN_SUCCESS', payload: user});  // this goes to reducers
            })
            .catch(function(error){
                dispatch({type: 'LOGIN_FAILURE'});
            });
    }
}

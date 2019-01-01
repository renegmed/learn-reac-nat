const initialState = {
    email: '',
    password: '',
    user: {},
    error: '',
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_INPUT_CHANGE':
            // newstate = {email: 'newemail', password: 'newpassword'}
            return { ...state, [action.payload.field]: action.payload.value}  // replace the current state with payload value of payload field
        
        case 'LOGIN_SUCCESS':
            //console.log("[Authentication-Reducer] success!");
            return { ...state, user: action.payload, error: false, loading: false};
        
        case 'LOADING':
            return {...state, loading: true};
        
        case 'LOGIN_FAILURE':
            //console.log("[Authentication-Reducer] error!");
            return { ...state, error: 'Authentication Failed', loading: false};    
        
        default:
            return state;
    }
} 
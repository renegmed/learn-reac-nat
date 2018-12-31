const initialState = {
    email: '',
    password: '',
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_INPUT_CHANGE':
            // newstate = {email: 'newemail', password: 'newpassword'}
            return { ...state, [action.payload.field]: action.payload.value}  // replace the current state with payload value of payload field
    
        default:
            return state;
    }
} 
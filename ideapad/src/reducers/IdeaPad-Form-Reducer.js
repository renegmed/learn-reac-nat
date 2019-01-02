const initialState = {
    title: '',
    idea: '', 
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'IDEA_INPUT_CHANGE':
            // newstate = {title: 'newtitle', idea: 'newidea'}
            return { ...state, [action.payload.field]: action.payload.value}  // replace the current state with payload value of payload field
        
        case 'NEW_IDEA':
            return initialState;

        case 'IDEA_UPDATED':
            return initialState;

        case 'IDEA_DELETED':
            return initialState;
            
        default:
            return state;
    }
} 
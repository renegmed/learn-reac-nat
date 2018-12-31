export const authInputChange = (obj) => {
    return {
        type: 'AUTH_INPUT_CHANGE',
        payload: obj,   // filed: 'email', 'text': 'test@mytest.com'

    }
}
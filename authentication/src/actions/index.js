export const authInputChange = (obj) => {
    return {
        type: 'AUTH_INPUT_CHANGE',
        payload: obj,   // field: 'email', 'text': 'test@mytest.com'

    }
}
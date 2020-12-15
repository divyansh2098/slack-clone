export const INITIAL_STATE = {
    user: 'Divyansh'
}

export const actionTypes = {
    SET_USER_DATA: 'SET_USER_DATA'
}

const auth_reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.SET_USER_DATA:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default auth_reducer


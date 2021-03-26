import { SIGNIN_FAILED, SIGNIN_PENDING, SIGNIN_SUCCESS, INPUT_CHANGE } from "./constants"



const initLoginState = {
    user: [],
    username: "",
    password: "",
    errorMsg: "",
    isLoaderHidden: true,
    isLoading: false
}

export const signIn = (state = initLoginState, action={}) => {
    switch(action.type){
        case SIGNIN_PENDING:
            return Object.assign({}, state, { isLoaderHidden: false, isLoading: false })
        case SIGNIN_SUCCESS:
            return Object.assign({}, state, { user: action.payload })
        case SIGNIN_FAILED:
            return Object.assign({}, state, { errorMsg: "invalid credentials" })
        case INPUT_CHANGE:
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
}
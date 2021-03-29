import { REMEMBER_USER, SIGNIN_FAILED, SIGNIN_PENDING, SIGNIN_SUCCESS } from "./constants"

const initLoginState = {
    user: [],
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
            return Object.assign({}, state, { errorMsg: "invalid credentials" , isLoaderHidden: true})
        case REMEMBER_USER:
            return Object.assign({}, state, { user: action.payload })
        default:
            return state;
    }
}
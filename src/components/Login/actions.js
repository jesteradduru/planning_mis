import { SIGNIN_FAILED, SIGNIN_PENDING, SIGNIN_SUCCESS, INPUT_CHANGE } from "./constants"

export const onInputChange = e => ({
    type: INPUT_CHANGE,
    payload: {[e.target.name]: e.target.value}
})

export const signIn = (username, password) => (dispatch) => {
    dispatch({type: SIGNIN_PENDING});
    fetch("http://localhost:3001/signin", {
        method: "post",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            username: username, password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data === "invalid"){
            dispatch({type: SIGNIN_FAILED});
        }else{
            dispatch({type: SIGNIN_SUCCESS, payload: data});
        }
    })
    .catch(console.log)
}
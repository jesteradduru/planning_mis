import { SIGNIN_FAILED, SIGNIN_PENDING, SIGNIN_SUCCESS, REMEMBER_USER } from "./constants"
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const signIn = (formData) => (dispatch) => {

    dispatch({type: SIGNIN_PENDING});
    fetch("http://localhost:3001/signin", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: formData.get("username"),
            password: formData.get("password")
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data === "error"){
            dispatch({type: SIGNIN_FAILED});
        }else{
            dispatch({type: SIGNIN_SUCCESS, payload: data});
            cookies.set("user", data, "/");
        }
    })
    .catch(console.log)
}

export const rememberUser = (user) => ({
    type: REMEMBER_USER,
    payload: user
})
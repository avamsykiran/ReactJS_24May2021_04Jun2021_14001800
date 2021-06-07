import axios from 'axios';
import { createErrAction, createLoginAction, createRegisterDoneAction, createWaitAction } from './userActions';

const loginApiUrl = "http://localhost:9999/login";
const registerApiUrl = "http://localhost:9999/register";

const handleError =(err,dispatch,errMsg) => {
    console.log(err);
    dispatch(createErrAction(errMsg));
}

export const registerThunk =(user) => (dispatch) => {

    dispatch(createWaitAction());

    axios.post(registerApiUrl,user).then(
        res => dispatch(createRegisterDoneAction()),
        err => handleError(err,dispatch,"Unable to register")
    );

}

export const loginThunk =(user) => (dispatch) => {
    
    dispatch(createWaitAction());

    axios.post(loginApiUrl,user).then(
        res => {
            let token = res.data.token;
            sessionStorage.setItem("token",token);
            sessionStorage.setItem("user",JSON.stringify(user));
            dispatch(createLoginAction(user));
        },
        err => handleError(err,dispatch,err.message || "Invalid Credits");
    );

}
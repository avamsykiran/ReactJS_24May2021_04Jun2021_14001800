import axios from 'axios';
import { createErrAction, createLoginAction, createRegisterDoneAction, createWaitAction } from './userActions';

const loginApiUrl = "http://localhost:9999/login";
const registerApiUrl = "http://localhost:9999/register";
const userInfoUrl = "http://localhost:9999/users";

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
            getUserInfo(user.emailId,dispatch,token);
        },
        err => handleError(err,dispatch,err.message || "Invalid Credits")
    );

}

const getUserInfo = (email,dispatch,token) => {
    dispatch(createWaitAction());
  
    axios.get(`${userInfoUrl}/${email}`,{headers:{"Authorization":`Bearer ${token}`}}).then(
        resp => {
            sessionStorage.setItem("user",resp.data);
            dispatch(createLoginAction(resp.data))
        },
        err =>  handleError(err,dispatch,err.message || "Sorry unable to fetech user info")
    )
}
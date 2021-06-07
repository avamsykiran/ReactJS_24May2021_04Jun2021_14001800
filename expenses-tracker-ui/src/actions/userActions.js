
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER_DONE = "register done";
export const WAIT = "wait";
export const ERROR = "error";

export const createWaitAction = () => ({type:WAIT});
export const createErrAction = (err) => ({type:ERROR,err});
export const createLoginAction = (user) => ({type:LOGIN,user});
export const createLogoutAction = () => ({type:LOGOUT});
export const createRegisterDoneAction = () => ({type:REGISTER_DONE });
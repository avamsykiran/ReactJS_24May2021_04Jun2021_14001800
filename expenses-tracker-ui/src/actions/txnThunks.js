import axios from 'axios';
import {
    createAddTxnAction,
    createErrorAction,
    createWaitAction,
    createDelTxnAction,
    createLoadTxnsAction
} from './txnActions'

const txnApiUrl = "http://localhost:9999/txns";
const userInfoUrl = "http://localhost:9999/users";

const getAddOrRetriveTxnUrl = () => {
    let userId = JSON.parse(sessionStorage.getItem("user")).userId;
    return `${userInfoUrl}/${userId}/trans`;
}

const getDelTxnUrl = (txnId) => {
    return `${txnApiUrl}/${txnId}`;
}

const handleError =(err,dispatch,errMsg) => {
    console.log(err);
    dispatch(createErrAction(errMsg));
}

export const getAllTxnsThunk = () => (dispatch) => {
    dispatch(createWaitAction())

    let token = sessionStorage.getItem("token");

    axios.get(getAddOrRetriveTxnUrl(),{headers:{"Authorization":`Bearer ${token}`}}).then(
        resp => dispatch(createLoadTxnsAction(resp.data)),
        err =>  handleError(err,dispatch,err.message || "Sorry unable to fetech transactions")
    )
}

export const addTxnThunk = (txn) => (dispatch) => {
    dispatch(createWaitAction())

    let token = sessionStorage.getItem("token");

    axios.post(getAddOrRetriveTxnUrl(),txn,{headers:{"Authorization":`Bearer ${token}`}}).then(
        resp => dispatch(createAddTxnAction(resp.txn)),
        err =>  handleError(err,dispatch,err.message || "Sorry unable to add transactions")
    )
}

export const delTxnThunk = (txnId) => (dispatch) => {
    dispatch(createWaitAction())

    let token = sessionStorage.getItem("token");

    let headers = {headers:{"Authorization":`Bearer ${token}`}};
    console.log(headers);
    axios.delete(getDelTxnUrl(txnId),headers).then(
        resp => dispatch(createDelTxnAction(txnId)),
        err =>  handleError(err,dispatch,err.message || "Sorry unable to delete transactions")
    )
}
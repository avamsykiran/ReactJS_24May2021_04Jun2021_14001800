
export const ADD_TXN = "ADD TXN"
export const DEL_TXN = "DEL TXN"
export const LOAD_TXNS = "LOAD TXNS"
export const WAIT ="WAIT"
export const ERROR = "ERROR"

export const createWaitAction = () => ({type:WAIT})
export const createErrorAction = (err) => ({type:ERROR,err})
export const createLoadTxnsAction = (txns) => ({type:LOAD_TXNS,txns})
export const createAddTxnAction = (txn) => ({type:ADD_TXN,txn})
export const createDelTxnAction = (txnId) => ({type:DEL_TXN,txnId})
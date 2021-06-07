import {
    WAIT,
    ERROR,
    LOAD_TXNS,
    DEL_TXN,
    ADD_TXN
} from '../actions/txnActions';

const initState = ()=>({
    txnsList:null,
    wait:false,
    err:null
});


const txnsReducer = (state=initState(),action) => {
    let modifiedState=null;

    switch(action.type){
        case WAIT:
            modifiedState={...state,wait:true,err:null}
            break;
        case ERROR:
            modifiedState={...state,wait:false,err:action.err}
            break;
        case LOAD_TXNS:
            modifiedState={txnsList:action.txns,wait:false,err:null}
            break;
        case ADD_TXN:
            modifiedState={txnsList:[...state.txnsList,action.txn],err:null,wait:false}
            break;
        case DEL_TXN:
            modifiedState={txnsList:state.txnsList.filter(t=>t.txnId!==action.txnId),err:null,wait:false}
            break;
        default:
            modifiedState={...state}
    }
    return modifiedState;
};

export default txnsReducer;
import {
    ERROR,
    WAIT,
    LOGIN,
    LOGOUT,
    REGISTER_DONE
} from '../actions/userActions';

const initState = () => {

    let user =null;

    if(sessionStorage.getItem("user")){
        user = JSON.parse(sessionStorage.getItem("user"));
    }

    return ({
        wait: false,
        err: null,
        currentUser: user
    })
};

const usersReducer = (state = initState(), action) => {
    let modifiedState = null;

    switch (action.type) {
        case LOGIN:
            modifiedState = { currentUser: action.user, wait: false, err: null }
            break;
        case LOGOUT:
            sessionStorage.clear();
            modifiedState = { currentUser: null, wait: false, err: null }
            break;
        case WAIT:
            modifiedState = { ...state, wait: true, err: null }
            break;
        case ERROR:
            modifiedState = { ...state, wait: false, err: action.err }
            break;
        case REGISTER_DONE:
            modifiedState = { currentUser: null, wait: false, err: null }
            break;
        default:
            modifiedState = { ...state }
    }
    return modifiedState;
};

export default usersReducer;
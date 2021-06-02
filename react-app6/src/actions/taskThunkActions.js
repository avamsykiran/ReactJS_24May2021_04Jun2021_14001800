import axios from 'axios';
import { createErrorAction, createWaitAction, createLoadTasksAction} from './taskActions'

const apiUrl = "http://localhost:5656/tasks";

export const loadTasksThunk = () => (dispatch) => {
    dispatch(createWaitAction());
    axios.get(apiUrl).then(
        response => dispatch(createLoadTasksAction(response.data)), 
        err => {
            console.log(err);
            dispatch(createErrorAction("Unable to laod data! Inconvinience regreted"))
        }
    );
};

export const addTaskThunk = (task) => (dispatch) => {
    dispatch(createWaitAction());
    axios.post(apiUrl,task).then(
        response => loadTasksThunk()(dispatch),
        err => {
            console.log(err);
            dispatch(createErrorAction("Unable to save data! Inconvinience regreted"))
        }
    );
};

export const saveTaskThunk = (task) => (dispatch) => {
    dispatch(createWaitAction());
    axios.put(apiUrl,task).then(
        response => loadTasksThunk()(dispatch),
        err => {
            console.log(err);
            dispatch(createErrorAction("Unable to save data! Inconvinience regreted"))
        }
    );
};

export const delTaskThunk = (taskId) => (dispatch) => {
    dispatch(createWaitAction());
    axios.delete(`${apiUrl}/${taskId}`).then(
        response => loadTasksThunk()(dispatch),
        err => {
            console.log(err);
            dispatch(createErrorAction("Unable to delete data! Inconvinience regreted"))
        }
    );
};


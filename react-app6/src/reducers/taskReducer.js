import { EDIT_TASK, CANCEL_EDIT, LOAD_TASKS, ERROR, WAIT } from '../actions/taskActions'

const initialState = () => ({
    tasks: [],
    tasksDone: 0,
    tasksNotDone: 0,
    errMsg: null,
    shallWait: false
});

const updateStatestics = (tasks) => {
    let tasksDone = tasks.filter(t => t.isDone).length;
    let tasksNotDone = tasks.filter(t => !t.isDone).length;

    return [tasksDone, tasksNotDone];
}

const taskReducer = (oldState = initialState(), action) => {
    let modifiedState = null;
    let tasks = null;
    let tasksDone = 0;
    let tasksNotDone = 0;

    switch (action.type) {
        case LOAD_TASKS:
            tasks = [...action.tasks];
            [tasksDone, tasksNotDone] = updateStatestics(tasks);
            modifiedState = { tasks, tasksDone, tasksNotDone, shallWait: false, errMsg: null };
            break;
        case EDIT_TASK:
            tasks = oldState.tasks.map(t => t.taskId !== action.taskId ? t : { ...t, isEdit: true });
            modifiedState = { ...oldState, tasks };
            break;
        case CANCEL_EDIT:
            tasks = oldState.tasks.map(t => t.taskId !== action.taskId ? t : { ...t, isEdit: null });
            modifiedState = { ...oldState, tasks };
            break;
        case WAIT:
            modifiedState = { ...oldState, shallWait: true };
            break;
        case ERROR:
            modifiedState = { ...oldState, errMsg:action.errMsg };
            break;
        default:
            modifiedState = { ...oldState };
            break;
    }

    return modifiedState;
};

export default taskReducer;
import { ADD_TASK, EDIT_TASK, TOGGLE_STATUS, CANCEL_EDIT, SAVE_TASK, DEL_TASK } from '../actions/taskActions'

const initialState = () => ({
    tasks: [
        { taskId: 1, taskName: "Create Product BackLog", isDone: true },
        { taskId: 2, taskName: "Create Sprint1 BackLog", isDone: true },
        { taskId: 3, taskName: "Create Sprint2 BackLog", isDone: false },
        { taskId: 4, taskName: "Create Test Data", isDone: false },
        { taskId: 5, taskName: "Create Test Suites", isDone: false }
    ],
    tasksDone: 2,
    tasksNotDone: 3
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
        case ADD_TASK:
            tasks = [...oldState.tasks, action.task];
            [tasksDone, tasksNotDone] = updateStatestics(tasks);
            modifiedState = { tasks, tasksDone, tasksNotDone };
            break;
        case SAVE_TASK:
            tasks = oldState.tasks.map(t => t.taskId !== action.task.taskId ? t : action.task);
            [tasksDone, tasksNotDone] = updateStatestics(tasks);
            modifiedState = { tasks, tasksDone, tasksNotDone };
            break;
        case DEL_TASK:
            tasks = oldState.tasks.filter(t => t.taskId !== action.taskId);
            [tasksDone, tasksNotDone] = updateStatestics(tasks);
            modifiedState = { tasks, tasksDone, tasksNotDone };
            break;
        case TOGGLE_STATUS:
            tasks = oldState.tasks.map(t => t.taskId !== action.taskId ? t : { ...t, isDone: !t.isDone });
            [tasksDone, tasksNotDone] = updateStatestics(tasks);
            modifiedState = { tasks, tasksDone, tasksNotDone };
            break;
        case EDIT_TASK:
            tasks = oldState.tasks.map(t => t.taskId !== action.taskId ? t : { ...t, isEdit:true });
            modifiedState = { ...oldState, tasks };
            break;
        case CANCEL_EDIT: 
            tasks = oldState.tasks.map(t => t.taskId !== action.taskId ? t : { ...t, isEdit:null });
            modifiedState = { ...oldState, tasks };
            break;
        default:
            modifiedState = { ...oldState };
            break;
    }

    return modifiedState;
};

export default taskReducer;
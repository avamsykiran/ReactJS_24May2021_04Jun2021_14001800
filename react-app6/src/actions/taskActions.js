
export const LOAD_TASKS = "load tasks";
export const EDIT_TASK = "edit task";
export const CANCEL_EDIT = "cancel edit";
export const WAIT = "wait";
export const ERROR = "ERROR";


export const createLoadTasksAction = (tasks) => ({ type: LOAD_TASKS, tasks });

export const createEditTaskAction = (taskId) => ({ type: EDIT_TASK, taskId });

export const createCancelEditAction = (taskId) => ({ type: CANCEL_EDIT, taskId });

export const createErrorAction = (errMsg) => ({ type: ERROR, errMsg });

export const createWaitAction = () => ({ type: WAIT });

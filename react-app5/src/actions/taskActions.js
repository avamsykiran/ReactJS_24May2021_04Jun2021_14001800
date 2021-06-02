
export const ADD_TASK = "add task";
export const DEL_TASK = "delete task";
export const EDIT_TASK = "edit task";
export const CANCEL_EDIT = "cancel edit";
export const SAVE_TASK = "save task";
export const TOGGLE_STATUS = "toggle status";

export const createAddTaskAction = (task) => ({ type: ADD_TASK, task });

export const createEditTaskAction = (taskId) => ({ type: EDIT_TASK, taskId });

export const createDelTaskAction = (taskId) => ({ type: DEL_TASK, taskId });

export const createCancelEditAction = (taskId) => ({ type: CANCEL_EDIT, taskId });

export const createSaveTaskAction = (task) => ({ type: SAVE_TASK, task });

export const createToggleStatusAction = (taskId) => ({ type: TOGGLE_STATUS,taskId });

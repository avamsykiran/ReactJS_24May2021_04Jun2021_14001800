import {connect} from 'react-redux';

import { createDelTaskAction,createToggleStatusAction,createEditTaskAction} from '../actions/taskActions';

const TaskView = ({task,toggleStatus,deleteTask,editTask}) => (
    <div className="row m-1">
        <div className="col-1 text-right">{task.taskId}.</div>
        <div className="col">
            <span 
                className="mr-1"
                onClick={e => toggleStatus(task.taskId) } >
                {task.isDone ? 
                    <i className="fa fa-check-square-o" /> : 
                    <i className="fa fa-square-o" />
                }
            </span>
            {task.taskName}
        </div>
        <div className="col-2">
            <button className="btn btn-sm text-primary mr-1" 
                onClick={e => editTask(task.taskId) }>
                 <i className="fa fa-pencil" />
            </button>
            <button className="btn btn-sm text-danger" 
                onClick={e => deleteTask(task.taskId) }>
                 <i className="fa fa-trash" />
            </button>
        </div>
    </div>
);

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    toggleStatus: taskId => dispatch(createToggleStatusAction(taskId)),
    deleteTask: taskId => dispatch(createDelTaskAction(taskId)),
    editTask: taskId => dispatch(createEditTaskAction(taskId))
});

const connectToStore = connect(mapStateToProps,mapDispatchToProps);

export default connectToStore(TaskView);
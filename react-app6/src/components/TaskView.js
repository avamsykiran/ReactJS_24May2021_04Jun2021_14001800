import {connect} from 'react-redux';

import { createEditTaskAction } from '../actions/taskActions';
import { delTaskThunk,saveTaskThunk} from '../actions/taskThunkActions';

const TaskView = ({task,toggleStatus,deleteTask,editTask}) => (
    <div className="row m-1">
        <div className="col-1 text-right">{task.taskId}.</div>
        <div className="col">
            <span 
                className="mr-1"
                onClick={e => toggleStatus({...task,isDone:!task.isDone}) } >
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
    toggleStatus: task => dispatch(saveTaskThunk(task)),
    deleteTask: taskId => dispatch(delTaskThunk(taskId)),
    editTask: taskId => dispatch(createEditTaskAction(taskId))
});

const connectToStore = connect(mapStateToProps,mapDispatchToProps);

export default connectToStore(TaskView);
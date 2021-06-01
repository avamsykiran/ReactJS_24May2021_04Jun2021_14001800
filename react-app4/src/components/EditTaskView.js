import {useState} from 'react';
import {connect} from 'react-redux';
import {createToggleStatusAction,createCancelEditAction,createSaveTaskAction} from '../actions/taskActions';

const EditTaskView = ({ task, toggleStatus, saveTask, cancelEditTask }) => {

    let [taskName,setTaskName] = useState(task.taskName);

    const handleSubmit = e => {
        e.preventDefault();
        saveTask({...task,taskName,isEdit:null})
    }

    return (
        <form className="row m-1" onSubmit={handleSubmit}>
            <div className="col-1 text-right">{task.taskId}.</div>
            <div className="col">
                <span
                    className="mr-1"
                    onClick={e => toggleStatus(task.taskId)} >
                    {task.isDone ?
                        <i className="fa fa-check-square-o" /> :
                        <i className="fa fa-square-o" />
                    }
                </span>
                <input type="text" value={taskName} onChange={e=> setTaskName(e.target.value)} />
            </div>
            <div className="col-2">
                <button className="btn btn-sm text-primary mr-1" type="submit">
                    <i className="fa fa-save" />
                </button>
                <button className="btn btn-sm text-danger" type="button"
                    onClick={e => cancelEditTask(task.taskId)}>
                    <i className="fa fa-close" />
                </button>
            </div>
        </form>
    );
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    toggleStatus: taskId => dispatch(createToggleStatusAction(taskId)),
    saveTask: task => dispatch(createSaveTaskAction(task)), 
    cancelEditTask: taskId => dispatch(createCancelEditAction(taskId))
});

const connectToStore = connect(mapStateToProps,mapDispatchToProps);

export default connectToStore(EditTaskView);

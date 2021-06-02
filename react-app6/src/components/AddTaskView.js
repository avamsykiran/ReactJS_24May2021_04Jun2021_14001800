import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { addTaskThunk } from '../actions/taskThunkActions'

const AddTaskView = ({ addTask }) => {

    let [taskId, setTaskId] = useState(0);
    let [taskName, setTaskName] = useState("");
    let [isDone, setIsDone] = useState(false);
    let [isSaved,setIsSaved] = useState(false);

    const handleFormSubmit = e => {
        e.preventDefault();
        addTask({ taskId, taskName, isDone });
        setIsSaved(true);
    }

    return isSaved ? <Redirect to="/taskList" /> :  (
        <form className="form-inline p-2 m-2" onSubmit={handleFormSubmit}>
            <input type="number" className="form-control mr-1" value={taskId}
                placeholder="Task Id" onChange={e => setTaskId(parseInt(e.target.value))} />
            <input type="text" className="form-control mr-1" value={taskName}
                placeholder="Task Name" onChange={e => setTaskName(e.target.value)} />
            <button className="btn btn-sm btn-primary">ADD</button>
        </form>
    );

};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    addTask: task => dispatch(addTaskThunk(task))
});

const connectToStore = connect(mapStateToProps,mapDispatchToProps);

export default connectToStore(AddTaskView);
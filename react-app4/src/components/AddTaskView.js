import { useState } from 'react';

const AddTaskView = ({ addTask }) => {

    let [taskId, setTaskId] = useState(0);
    let [taskName, setTaskName] = useState("");
    let [isDone, setIsDone] = useState(false);

    const handleFormSubmit = e => {
        e.preventDefault();
        addTask({ taskId, taskName, isDone });
        setTaskId(0);
        setTaskName("");
        setIsDone(false);
    }

    return (
        <form className="form-inline" onSubmit={handleFormSubmit}>
            <input type="number" className="form-control mr-1" value={taskId}
                placeholder="Task Id" onChange={e => setTaskId(parseInt(e.target.value))} />
            <input type="text" className="form-control mr-1" value={taskName}
                placeholder="Task Name" onChange={e => setTaskName(e.target.value)} />
            <button className="btn btn-sm btn-primary">ADD</button>
        </form>
    );

};

export default AddTaskView;
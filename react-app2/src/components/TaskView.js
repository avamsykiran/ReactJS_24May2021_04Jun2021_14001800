
const TaskView = (props) => (
    <div className="row m-1">
        <div className="col-1 text-right">{props.task.taskId}.</div>
        <div className="col-2 text-center">
            {props.task.isDone ? "DONE" : "PENDING"}
        </div>
        <div className="col">{props.task.taskName}</div>
        <div className="col-2">
            <button className="btn btn-sm btn-danger">DELETE</button>
        </div>
    </div>
);

export default TaskView;
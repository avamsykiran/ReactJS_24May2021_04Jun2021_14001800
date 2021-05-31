/*
const TaskView = (props) => (
    <div className="row m-1">
        <div className="col-1 text-right">{props.task.taskId}.</div>
        <div className="col">
            <span 
                className="mr-1"
                onClick={e => props.toggleStatus(props.task.taskId) } >
                {props.task.isDone ? 
                    <i className="fa fa-check-square-o" /> : 
                    <i className="fa fa-square-o" />
                }
            </span>
            {props.task.taskName}
        </div>
        <div className="col-1">
            <button className="btn btn-sm text-danger" 
                onClick={e => props.deleteTask(props.task.taskId) }>
                 <i className="fa fa-trash" />
            </button>
        </div>
    </div>
);*/

const TaskView = ({task,toggleStatus,deleteTask}) => (
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
        <div className="col-1">
            <button className="btn btn-sm text-danger" 
                onClick={e => deleteTask(task.taskId) }>
                 <i className="fa fa-trash" />
            </button>
        </div>
    </div>
);


export default TaskView;
import { Component, Fragment } from 'react'

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                { taskId: 1, taskName: "Create Product BackLog", isDone: true },
                { taskId: 2, taskName: "Create Sprint1 BackLog", isDone: true },
                { taskId: 3, taskName: "Create Sprint2 BackLog", isDone: false },
                { taskId: 4, taskName: "Create Test Data", isDone: false },
                { taskId: 5, taskName: "Create Test Suites", isDone: false }
            ],
            tasksDone: 2,
            tasksNotDone: 3
        }
    }

    render() {

        let { tasks, tasksDone, tasksNotDone } = this.state;

        return (
            <Fragment>
                <h3>Tasks List</h3>

                <div>
                    <span className="badge badge-primary p-2 mr-2">Complete: <strong>{tasksDone}</strong></span>
                    <span className="badge badge-danger p-2 mr-2">InComplete: <strong>{tasksNotDone}</strong></span>
                    <span className="badge badge-secondary p-2 mr-2">Total: <strong>{tasks.length}</strong></span>
                </div>
            </Fragment>
        );
    }
}

export default TaskList;
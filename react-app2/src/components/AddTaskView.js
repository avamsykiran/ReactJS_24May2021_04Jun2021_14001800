import { Component } from 'react'

class AddTaskView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskId: 0,
            taskName: "",
            isDone: false
        }
    }

    handleFormSubmit = e => {
        e.preventDefault();

        let task = { taskId: this.state.taskId, taskName: this.state.taskName, isDone: this.state.isDone };

        this.props.addTask(task);

        this.setState({ taskId: 0, taskName: "", isDone: false });
    }

    render() {
        let { taskId, taskName, isDone } = this.state;

        return (
            <form className="form-inline" onSubmit={this.handleFormSubmit}>
                <input type="number" className="form-control mr-1" value={taskId}
                    placeholder="Task Id" onChange={e => this.setState({ taskId: parseInt(e.target.value) })} />
                <input type="text" className="form-control mr-1" value={taskName}
                    placeholder="Task Name" onChange={e => this.setState({ taskName: e.target.value })} />
                <button className="btn btn-sm btn-primary">ADD</button>
            </form>
        );
    }
};

export default AddTaskView;
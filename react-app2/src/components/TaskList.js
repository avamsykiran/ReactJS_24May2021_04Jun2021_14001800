import { Component, Fragment } from 'react'
import AddTaskView from './AddTaskView';
import TaskView from './TaskView';

class TaskList extends Component {
    constructor(props) {
        super(props)
        console.log("Constructor called")
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

    updateDashboard = (tasks) => {
        let tasksDone=0;
        let tasksNotDone=0;

        tasksDone = tasks.filter(t => t.isDone).length;
        tasksNotDone = tasks.length - tasksDone;

        return {tasksDone,tasksNotDone};
    }

    addTask = (task) => {
        let tasks = [...this.state.tasks,task];
        let {tasksDone,tasksNotDone} = this.updateDashboard(tasks);
        this.setState({tasks,tasksDone,tasksNotDone});
    }

    deleteTask = (taskId) =>{
        let tasks = this.state.tasks.filter(t => t.taskId!=taskId);
        let {tasksDone,tasksNotDone} = this.updateDashboard(tasks);
        this.setState({tasks,tasksDone,tasksNotDone});
    }

    toggleStatus = (taskId) => {
        let task = this.state.tasks.find(t => t.taskId==taskId);
        let modifiedTask = {...task,isDone:!task.isDone};
        let tasks = this.state.tasks.map(t => t.taskId!=taskId?t:modifiedTask);
        let {tasksDone,tasksNotDone} = this.updateDashboard(tasks);
        this.setState({tasks,tasksDone,tasksNotDone});
    }

    componentDidMount(){
        console.log("componentDidMount method called")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate method called")
    }

    componentDidCatch(){
        console.log("componentDidCatch method called")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount method called")
    }
    
    render() {
        console.log("Render method called")
        let { tasks, tasksDone, tasksNotDone } = this.state;

        return (
            <Fragment>
                <h3>Tasks List</h3>

                <div className="p-2 m-2">
                    <span className="badge badge-primary p-2 mr-2">Complete: <strong>{tasksDone}</strong></span>
                    <span className="badge badge-danger p-2 mr-2">InComplete: <strong>{tasksNotDone}</strong></span>
                    <span className="badge badge-secondary p-2 mr-2">Total: <strong>{tasks.length}</strong></span>
                </div>

                <AddTaskView 
                    className="p-2 m-2 col-6" 
                    addTask={this.addTask}
                />

                <div className="p-2 m-2 col-6">
                    {tasks.map(task => (
                       <TaskView 
                            key={task.taskId} 
                            task={task} 
                            deleteTask={this.deleteTask}
                            toggleStatus={this.toggleStatus}
                        />
                    ))}
                </div>
            </Fragment>
        );
    }
}

export default TaskList;
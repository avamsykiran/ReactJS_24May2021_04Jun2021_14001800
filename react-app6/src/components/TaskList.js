import { useEffect } from 'react';
import { connect } from 'react-redux';
import EditTaskView from './EditTaskView';
import TaskView from './TaskView';
import { loadTasksThunk } from '../actions/taskThunkActions';

const TaskList = ({ tasks, loadData }) => {

    useEffect(loadData,[]);

    return (
        <div className="p-2 m-2 col-6">
            <h5>Tasks List</h5>

            {tasks.map(task => (
                task.isEdit ?
                    <EditTaskView key={task.taskId} task={task} /> :
                    <TaskView key={task.taskId} task={task} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
    loadData: () => dispatch(loadTasksThunk())
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(TaskList);
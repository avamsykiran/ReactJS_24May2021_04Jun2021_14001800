import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTasksThunk } from '../actions/taskThunkActions';

const Dashboard = ({ tasksDone, tasksNotDone, loadData }) => {

    useEffect(loadData,[]);
    
    return (
        <div className="p-2 m-2">
            <span className="badge badge-primary p-2 mr-2">Complete: <strong>{tasksDone}</strong></span>
            <span className="badge badge-danger p-2 mr-2">InComplete: <strong>{tasksNotDone}</strong></span>
            <span className="badge badge-secondary p-2 mr-2">Total: <strong>{tasksDone + tasksNotDone}</strong></span>
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasksDone: state.tasksDone,
    tasksNotDone: state.tasksNotDone
});

const mapDispatchToProps = (dispatch) => ({
    loadData: () => dispatch(loadTasksThunk())
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(Dashboard);
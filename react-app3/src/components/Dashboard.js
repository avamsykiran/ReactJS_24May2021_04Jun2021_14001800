
const Dashboard = ({tasksDone,tasksNotDone}) => (
    <div className="p-2 m-2">
        <span className="badge badge-primary p-2 mr-2">Complete: <strong>{tasksDone}</strong></span>
        <span className="badge badge-danger p-2 mr-2">InComplete: <strong>{tasksNotDone}</strong></span>
        <span className="badge badge-secondary p-2 mr-2">Total: <strong>{tasksDone+tasksNotDone}</strong></span>
    </div>
);

export default Dashboard;
import { Fragment } from 'react'
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TaskList from './components/TaskList';
import AddTaskView from './components/AddTaskView';

const App = (props) => (
  <Fragment>
    <Header appName="TaskManager" />
    <main className="container-fluid p-4">
      <Dashboard />      
      <AddTaskView />
      <TaskList />
    </main>
  </Fragment>
);

export default App;

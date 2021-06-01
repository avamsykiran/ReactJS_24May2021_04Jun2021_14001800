import { Fragment } from 'react'
import Header from './components/Header';
import TaskList from './components/TaskList';

const App = (props) => (
  <Fragment>
    <Header appName="TaskManager" />
    <main className="container-fluid p-4">
       <TaskList />
    </main>
  </Fragment>
);

export default App;

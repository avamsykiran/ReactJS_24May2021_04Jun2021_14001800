import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TaskList from './components/TaskList';
import AddTaskView from './components/AddTaskView';
import StatusStrip from './components/StatusStrip';

const App = (props) => (
  <Router>
    <Header appName="TaskManager" />
    <main className="container-fluid p-4">
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/addTask" component={AddTaskView} />
        <Route path="/taskList" component={TaskList} />
      </Switch>
    </main>
    <StatusStrip />
  </Router>
);

export default App;

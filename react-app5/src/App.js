import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TaskList from './components/TaskList';
import AddTaskView from './components/AddTaskView';

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
  </Router>
);

export default App;

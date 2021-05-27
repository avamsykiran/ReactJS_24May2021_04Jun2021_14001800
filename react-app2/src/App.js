import { Component,Fragment } from 'react'
import Header from './components/Header';
import TaskList from './components/TaskList';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "TaskManager"
    };
  }

  render() {
    return (
      <Fragment>
        <Header appName={this.state.title} />
        <main className="container-fluid p-4">
         <TaskList />
        </main>
      </Fragment>
    );
  }
}

export default App;

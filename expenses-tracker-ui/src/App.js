import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';

const App = () => (
  <Router>
    <Header />
    <Main />
  </Router>
);

export default App;

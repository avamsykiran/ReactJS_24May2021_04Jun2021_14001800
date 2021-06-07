import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import Dashboard from './Dashboard';
import Login from './Login';
import AddTxn from './AddTxn';
import Register from './Register'

const Main = ({ isLogged }) => (
    <main className="container-fluid p-4">
        {isLogged &&
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/newTxn" component={AddTxn} />
            </Switch>
        }

        {!isLogged &&
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/newUser" component={Register} />
            </Switch>
        }
    </main>
);


const mapStateToProps = (state) => ({
    isLogged: state.users.currentUser != null
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Main);

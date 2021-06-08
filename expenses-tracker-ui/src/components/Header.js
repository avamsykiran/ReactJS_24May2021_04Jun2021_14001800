import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createLogoutAction} from '../actions/userActions';

const Header = ({ isLogged,userName,logout }) => (
    <header className="navbar nav-dark bg-dark navbar-expand-sm">
        <Link to="/" className="navbar-brand">ExpensesTracker</Link>

        {isLogged &&
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/newTxn" className="nav-link">New Transaction</Link>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn btn-info btn-sm" onClick={e => logout()}>
                        {userName} | Logout
                    </button>
                </li>
            </ul>
        }

        {!isLogged &&
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/newUser" className="nav-link">New User</Link>
                </li>
            </ul>
        }

    </header>
);

const mapStateToProps = (state) => ({
    isLogged: state.users.currentUser != null,
    userName: state.users.currentUser?state.users.currentUser.userName:null
});

const mapDispatchToProps = (dispatch) => ({
   logout: () => dispatch(createLogoutAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
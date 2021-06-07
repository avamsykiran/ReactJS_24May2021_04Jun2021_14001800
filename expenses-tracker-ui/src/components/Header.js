import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const Header = ({ isLogged }) => (
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
                    <Link to="/logout" className="nav-link">Logout</Link>
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
    isLogged: state.users.currentUser != null
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
import { Link } from 'react-router-dom';

const Header = ({ appName }) => (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <Link to="/" className="navbar-brand">{appName}</Link>

        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    <i className="fa fa-home" /> Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/taskList">
                    <i className="fa fa-list" /> Tasks
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/addTask">
                    <i className="fa fa-plus" /> New Task
                </Link>
            </li>
        </ul>
    </nav>
);

export default Header;
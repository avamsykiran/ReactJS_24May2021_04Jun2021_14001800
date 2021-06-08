import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { loginThunk } from '../actions/userThunks'

const Login = ({wait,err,doLogin}) => {

    let [emailId,setEmailId] = useState();
    let [password,setPassword] = useState();
    let [islogged,setIslogged] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        
        doLogin({emailId,password});
        setIslogged(true);
    }

    return islogged && !wait && !err? <Redirect to="/" />  : (
        <div className="col-sm-5 mx-auto mt-2 p-2">
            <h4 className="text-center">Lgoin Form</h4>
            
            {wait && <strong>Please wait while verifing...</strong>}
            {err && <strong>{err}</strong>}

            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Email Id</label>
                    <input className="form-control" type="email" value={emailId} required
                    onChange={e => setEmailId(e.target.value) }/>
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input className="form-control" type="password" value={password} required
                    onChange={e => setPassword(e.target.value) }/>
                </div>
                <button className="btn btn-block btn-primary">
                    Sign In
            </button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    wait: state.users.wait,
    err:state.users.err
});

const mapDispatchToProps =  (dispatch) => ({
    doLogin: (user) => dispatch(loginThunk(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

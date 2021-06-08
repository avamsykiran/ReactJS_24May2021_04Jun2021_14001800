import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { registerThunk } from '../actions/userThunks'

const Register = ({addUser}) => {

    let [userName,setUserName] = useState();
    let [emailId,setEmailId] = useState();
    let [password,setPassword] = useState();
    let [isSaved,setIsSaved] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        
        addUser({userName,emailId,password});

        setIsSaved(true);
    }

    return isSaved? <Redirect to="/" />  : (
        <div className="col-sm-5 mx-auto mt-2 p-2">
            <h4 className="text-center">Registration Form</h4>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">User Name</label>
                    <input className="form-control" type="text" value={userName} required
                    onChange={e => setUserName(e.target.value) }/>
                </div>
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
                    Sign Up
            </button>
            </form>
        </div>
    );
};

const mapStateToProps =null;

const mapDispatchToProps =  (dispatch) => ({
    addUser: (user) => dispatch(registerThunk(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

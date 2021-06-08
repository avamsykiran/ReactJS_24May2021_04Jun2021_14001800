

import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { addTxnThunk } from '../actions/txnThunks'

const AddTxn = ({doAddTxn}) => {

    let [header,setHeader] = useState();
    let [amount,setAmount] = useState();
    let [dateAndTime,setDateAndTime] = useState();
    let [tranType,setTranType]= useState();
    let [isSaved,setIsSaved] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        
        doAddTxn({header,amount,dateAndTime,tranType});

        setIsSaved(true);
    }

    return isSaved? <Redirect to="/" />  : (
        <div className="col-sm-5 mx-auto mt-2 p-2">
            <h4 className="text-center">Registration Form</h4>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Header</label>
                    <input className="form-control" type="text" value={header} required
                    onChange={e => setHeader(e.target.value) }/>
                </div>
                <div className="form-group">
                    <label className="form-label">Amount</label>
                    <input className="form-control" type="decimal" value={amount} required
                    onChange={e => setAmount(parseFloat(e.target.value)) }/>
                </div>
                <div className="form-group">
                    <label className="form-label">Date</label>
                    <input className="form-control" type="datetime-local" value={dateAndTime} required
                    onChange={e => setDateAndTime(e.target.value) }/>
                </div>
                <div className="form-group">
                    <label className="form-label">Transaction Type</label>
                    <select className="form-control"  value={tranType} required
                    onChange={e => setTranType(e.target.value) }>
                        <option value="">---SELECT---</option>
                        <option value="INCOME">INCOME</option>
                        <option value="EXPENSE">EXPENSE</option>
                    </select>
                </div>
              
                <button className="btn btn-block btn-primary">
                    Add Transaction
            </button>
            </form>
        </div>
    );
};

const mapStateToProps =null;

const mapDispatchToProps =  (dispatch) => ({
    doAddTxn: (txn) => dispatch(addTxnThunk(txn))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTxn);

import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getAllTxnsThunk } from '../actions/txnThunks';
import { useEffect } from "react";

const Dashboard = ({ txns, wait, err, loadData }) => {

    useEffect(loadData,[])
    return (
        <div className="col-sm-9 p-2 mx-auto">
            {wait && <strong>Please wait while loading data</strong>}
            {err && <strong>{err}</strong>}
            {!wait && !err &&
                <table className="table table-border table-hover">
                    <thead>
                        <tr>
                            <th>TxnId</th>
                            <th>Date</th>
                            <th>Header</th>
                            <th>Credit</th>
                            <th>Debit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {txns && txns.map(t => (
                            <tr key={t.txnId}>
                                <td>{t.txnId}</td>
                                <td>{t.dateAndTime}</td>
                                <td>{t.header}</td>
                                <td>{t.tranType === "INCOME" && t.amount}</td>
                                <td>{t.tranType !== "INCOME" && t.amount}</td>
                            </tr>
                        )
                        )}
                        {!txns && (
                            <tr >
                                <td colSpan="5">No transactions yet</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    txns: state.txns.txnsList,
    wait: state.txns.wait,
    err: state.txns.err
});

const mapDispatchToProps = (dispatch) => ({
    loadData: () => dispatch(getAllTxnsThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

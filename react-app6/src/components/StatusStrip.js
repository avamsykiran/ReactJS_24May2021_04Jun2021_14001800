import { connect } from 'react-redux';

const StatusStrip = ({shallWait,err}) => (
    <footer className="bg-dark text-light fixed-bottom">
        <div className="col-sm-6 mx-auto p-2 text-center">

            {err && <strong>ERRor! {err} </strong>}
            
            {shallWait && <strong>Please wait while loading...</strong>}

            {!err && !shallWait && <strong>All Good And Ready..!</strong> }
        </div>
    </footer>
);

const mapStateToProps = (state) => ({
    shallWait: state.shallWait,
    err: state.errMsg
});

const mapDispatchToProps = null;

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(StatusStrip);
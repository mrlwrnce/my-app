function Modal(props) {
    function cancelHandler(){
        props.onCancel();
    }

    function confirmHandler(){
        props.onConfirm();
    }

    return (
        <div className="modal">
            <div className="modal-header">
                <h3>Delete</h3>
            </div>
            <div className="modal-body">
                <p>Are you sure?</p>
            </div>
            <div className="modal-footer">
                <button className="btn btn-cancel" onClick={cancelHandler}>Cancel</button>
                <button className="btn btn-submit" onClick={confirmHandler}>Confirm</button>
            </div>
        </div>
    )
}

export default Modal;
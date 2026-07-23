import '../App.css'

export default function ConfirmDelete( { onConfirm, onCancel } ) {

    return (
        <div className="modal-overlay">

            <div className="modal">

                <h2>Delete Job?</h2>

                <p>
                    This action cannot be undone.
                </p>

                <div className="modal-buttons">

    <button
        className="cancel-btn"
        onClick={onCancel}
    >
        Cancel
    </button>

    <button
        className="delete-btn"
        onClick={onConfirm}
    >
        Delete
    </button>

</div>

            </div>

        </div>
    )

}
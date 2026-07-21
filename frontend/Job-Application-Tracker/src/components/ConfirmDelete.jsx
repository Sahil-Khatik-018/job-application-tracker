export default function ConfirmDelete() {

    return (
        <div className="modal-overlay">

            <div className="modal">

                <h2>Delete Job?</h2>

                <p>
                    This action cannot be undone.
                </p>

                <div>

                    <button>
                        Cancel
                    </button>

                    <button>
                        Delete
                    </button>

                </div>

            </div>

        </div>
    )

}
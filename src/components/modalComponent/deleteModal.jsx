import React from 'react'
// import './deleteModal.scss'
// import './bookModal.scss'
import Button from '../button/button'
import useBookHook from '../hooks/useBookHook';

function DeleteModal({ deleteBookModal, onDeleteSubmitHandler }) {

    const { refetchBooks } = useBookHook()
    return (
        <div className='bookModal-container'>
            <div className='delete-bookModal-item'>
                <i className="fa-solid fa-x" onClick={() => {
                    deleteBookModal();
                    // refetchBooks()
                }}></i>
                <div className='delete-modal-overlay'>
                    <p>Are you sure about deleting this book?</p>
                    <div className='button-container'>
                        <Button value="YES"
                            onClick={onDeleteSubmitHandler} />
                        <Button value="NO"
                            onClick={() => {
                                deleteBookModal();
                            }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal

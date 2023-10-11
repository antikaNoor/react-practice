import React from 'react'
import Button from '../button/button'
import './bookModal.scss'

function DeleteModal({ deleteBookModal, onDeleteSubmitHandler }) {

    return (
        <div className='bookModal-container'>
            <div className='delete-bookModal-item'>

                <div className='delete-modal-overlay'>
                    <i className="fa-solid fa-x" onClick={() => {
                        deleteBookModal();
                    }}></i>
                    <p>Are you sure about deleting this book?</p>
                    <div className='button-container'>
                        <Button value="YES"
                            onClick={onDeleteSubmitHandler} />
                        <Button value="NO"
                            onClick={() => {
                                onDeleteSubmitHandler();
                            }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal

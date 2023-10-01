import React from 'react'
import './bookModal.scss'
import Button from '../button/button'

function DeleteModal({ deleteBookModal, onDeleteSubmitHandler }) {

    return (
        <div className='bookModal-container'>
            <div className='bookModal-item'>
                <i className="fa-solid fa-x" onClick={deleteBookModal}></i>
                <div className='modal-overlay'>
                    <p>Are you sure about deleting this book?</p>
                    <Button value="YES"
                        onClick={onDeleteSubmitHandler} />
                    <Button value="NO"
                        onClick={() => {
                            deleteBookModal();
                        }} />
                </div>
            </div>
        </div>
    )
}

export default DeleteModal

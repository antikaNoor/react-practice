import React from 'react'
import './bookModal.scss'

function DeleteModal({deleteBookModal}) {
    return (
        <div className='bookModal-container'>
            <div className='bookModal-item'>
                <i className="fa-solid fa-x" onClick={deleteBookModal}></i>
                {/* <div className='modal-overlay'> */}
                    {/* <img className='book-img' src={relatedBook.image}></img>
                    <div className='info-container'>
                        <p className='title'><b>{relatedBook.title}</b></p>
                        <p className='author'>{relatedBook.author}</p>
                        {relatedBook.rating && <div className="star-container">{stars}</div>}
                        <p className='genre'>{genre_}</p>
                        <p className='description'>{relatedBook.description} {relatedBook.description}</p>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default DeleteModal

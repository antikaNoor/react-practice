import React, { useState } from 'react'
import ReviewModal from '../modalComponent/ReviewComponent'

function ReviewData({ rating, text, reviewFormData }) {
    // const { editFormData, onEditChangeHandler, onEditSubmitHandler } = useBookHook();

    // modal
    const [showBookModal, setShowBookModal] = useState(false)

    //show or hide the modal
    const reviewBookModal = () => {
        setShowBookModal(!showBookModal)
    }

    return (
        <>
            {showBookModal && <ReviewModal
                rating={rating}
                text={text}
                reviewFormData={reviewFormData}
                reviewBookModal={reviewBookModal} />}

            <i className="fa-solid fa-pen-to-square"
                onClick={(e) => {
                    reviewBookModal()
                }}></i>
        </>
    )
}

export default ReviewData
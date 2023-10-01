import React, { useState } from 'react'
import DeleteModal from '../modalComponent/deleteModal'

function DeleteData({ onDeleteSubmitHandler }) {
    // const { fetchedData, currentPage, totalPages, fetchBooks, searchQuery, handleSearchQuery, sortOptionLabels, orderOptionLabels,
    //     handleSortChange, handleOrderChange, orderOptions, sortOptions, selectedSortOption, selectedOrderOption } = useBookHook();

    // modal
    const [showBookModal, setShowBookModal] = useState(false)
    // const [relatedBook, setRelatedBook] = useState([])

    //show or hide the modal
    const deleteBookModal = () => {
        setShowBookModal(!showBookModal)
    }

    return (
        <>
            {showBookModal && <DeleteModal
                deleteBookModal={deleteBookModal}
                onDeleteSubmitHandler={onDeleteSubmitHandler} />}
            <i className="fa-solid fa-trash"
                onClick={(e) => {
                    deleteBookModal()
                }}></i>
        </>
    )
}

export default DeleteData
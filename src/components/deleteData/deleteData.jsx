import React, { useState } from 'react'
import Header from '../header/header'
import Card from '../card/card'
// import '../fetchData/fetchData.scss'
import Footer from '../footer/footer'
import SearchBar from '../searchBar/searchBar'
import Pagination from '../pagination/pagination'
import BookModal from '../modalComponent/bookModal'
import Dropdown from '../dropdown/dropdown'
import useBookHook from '../hooks/useBookHook'
import DeleteModal from '../modalComponent/deleteModal'

function DeleteData() {
    // const { fetchedData, currentPage, totalPages, fetchBooks, searchQuery, handleSearchQuery, sortOptionLabels, orderOptionLabels,
    //     handleSortChange, handleOrderChange, orderOptions, sortOptions, selectedSortOption, selectedOrderOption } = useBookHook();

    // modal
    const [showBookModal, setShowBookModal] = useState(false)
    const [relatedBook, setRelatedBook] = useState([])

    //show or hide the modal
    const deleteBookModal = () => {
        setShowBookModal(!showBookModal)
    }

    return (
        <>
        {showBookModal && <DeleteModal deleteBookModal={deleteBookModal} />}
            <i className="fa-solid fa-trash"
                onClick={(e) => {
                    deleteBookModal()
                }}></i>
        </>
    )
}

export default DeleteData
import React, { useState } from 'react'
import Header from '../header/header'
import Card from '../card/card'
import './fetchData.scss'
import Footer from '../footer/footer'
import SearchBar from '../searchBar/searchBar'
import Pagination from '../pagination/pagination'
import BookModal from '../modalComponent/bookModal'
import Dropdown from '../dropdown/dropdown'
import useBookHook from '../hooks/useBookHook'

function FetchData() {
    const { fetchedData, currentPage, totalPages, fetchBooks, searchQuery, handleSearchQuery, sortOptionLabels, orderOptionLabels,
        handleSortChange, handleOrderChange, orderOptions, sortOptions, selectedSortOption, selectedOrderOption } = useBookHook();

    //search
    const searchType = 'text';
    const searchPlaceholder = 'Search by title, author, or genre...';

    // modal
    const [showBookModal, setShowBookModal] = useState(false)
    const [relatedBook, setRelatedBook] = useState([])

    //show or hide the modal
    const updateModal = () => {
        setShowBookModal(!showBookModal)
    }

    return (
        <div className='container'>
            {/* header */}
            <Header />
            {/* modal */}
            {showBookModal && <BookModal updateModal={updateModal} relatedBook={relatedBook} />}
            {/* searching */}
            <div className='search-book'>
                <SearchBar type={searchType}
                    placeholder={searchPlaceholder}
                    value={searchQuery}
                    onChange={handleSearchQuery} />
                <div className='dropdown'>
                    <Dropdown title="Sort by"
                        labels={[...sortOptionLabels]}
                        options={sortOptions}
                        selectedOption={selectedSortOption}
                        onChange={handleSortChange} />
                    <Dropdown title="Order by"
                        labels={[...orderOptionLabels]}
                        options={orderOptions}
                        selectedOption={selectedOrderOption}
                        onChange={handleOrderChange} />
                </div>
            </div>
            {/* card and modal */}
            {fetchedData && <Card data={fetchedData} updateModal={updateModal} setRelatedBook={setRelatedBook} />}
            {/* pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={fetchBooks} />
            <Footer />
        </div>
    )
}

export default FetchData
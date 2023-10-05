import React, { useState } from 'react'
import Card from '../../components/card/card'
import './AllBooksList.scss'
import SearchBar from '../../components/searchBar/searchBar'
import Pagination from '../../components/pagination/pagination'
import BookModal from '../../components/modalComponent/bookModal'
import Dropdown from '../../components/dropdown/dropdown'
import useBookHook from '../../hooks/useBookHook'
import Header2 from '../../components/header/header2'
import Footer from '../../components/footer/footer'

function FetchData() {
    const { noBooksFound, fetchedData, currentPage, totalPages, fetchBooks, searchQuery, handleSearchQuery, sortOptionLabels, orderOptionLabels,
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
            <Header2 />
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
            {noBooksFound ? (
                <div className="no-books-found-message">No books found</div>
            ) : (
                fetchedData && <Card data={fetchedData} updateModal={updateModal} setRelatedBook={setRelatedBook} />
            )}
            {/* {fetchedData && <Card data={fetchedData} updateModal={updateModal} setRelatedBook={setRelatedBook} />} */}
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
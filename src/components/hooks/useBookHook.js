import { useEffect, useState } from 'react'
// import Card from '../card/card'

const useBookHook = () => {
    //fetch data from api
    const [fetchedData, setFetchedData] = useState(null)

    //pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    //search
    const [searchQuery, setSearchQuery] = useState('')
    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value)
    }

    //sorting (select option)
    const [selectedSortOption, setSelectedSortOption] = useState('');
    const [selectedOrderOption, setSelectedOrderOption] = useState('');

    const handleSortChange = (e) => {

        setSelectedSortOption(e.target.value);
    };
    const handleOrderChange = (e) => {
        setSelectedOrderOption(e.target.value);
    };

    const sortOptions = [
        { value: '', label: '' },
        { value: 'price', label: 'Price' },
        { value: 'rating', label: 'Rating' },
    ];

    const orderOptions = [
        { value: '', label: '' },
        { value: 'asc', label: 'Ascending' },
        { value: 'desc', label: 'Descending' },
    ];
    const sortOptionLabels = sortOptions.map((option) => option.label);
    const orderOptionLabels = orderOptions.map((option) => option.label);

    const fetchBooks = (page) => {
        // Fetch data from API
        fetch(`http://localhost:8000/book/get-all-books?page=${page}&limit=6&sortParam=${selectedSortOption}&sortOrder=${selectedOrderOption}&search=${searchQuery}`)
            .then((response) => response.json())
            .then((result) => {
                setTotalPages(Math.ceil(result.data.totalRecords / 6));
                setCurrentPage(page);
                setFetchedData(result)
            })
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        console.log("changed")
        fetchBooks(currentPage)
    }, [currentPage, searchQuery, selectedSortOption, selectedOrderOption]);

    return {
        fetchedData, currentPage, totalPages, fetchBooks, searchQuery, handleSearchQuery, sortOptionLabels, orderOptionLabels,
        handleSortChange, handleOrderChange, orderOptions, sortOptions, selectedSortOption, selectedOrderOption
    }
}

export default useBookHook;
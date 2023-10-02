import { useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axiosInstance'
// import axios from 'axios'

const useBookHook = () => {
    /* FUNCTIONALITY FOR FETCHING ALL BOOKS */

    //fetch data from api
    const [fetchedData, setFetchedData] = useState(null)
    const [noBooksFound, setNoBooksFound] = useState(false);

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
        axiosInstance
            .get(`/get-all-books?page=${page}&limit=6&sortParam=${selectedSortOption}&sortOrder=${selectedOrderOption}&search=${searchQuery}`)
            .then((response) => response.data)
            .then((data) => {
                // Check if there are no books found
                if (data.data.totalRecords === 0) {
                    console.log("lalal")
                    setNoBooksFound(true);
                } else {
                    setNoBooksFound(false);
                }
                setTotalPages(Math.ceil(data.data.totalRecords / 6));
                setCurrentPage(page);
                setFetchedData(data)
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) {
                    // Handle AxiosError here, e.g., show a user-friendly error message.
                    console.error("Axios Error:", error);
                } else {
                    // Handle other errors (network error, timeout, etc.) here.
                    console.error("Other Error:", error);
                }
            })
    }

    useEffect(() => {
        const timeOutFunc = setTimeout(() => {
            console.log("changed")
            fetchBooks(currentPage)
        }, 1000);

        return () => clearTimeout(timeOutFunc);
    }, [currentPage, searchQuery, selectedSortOption, selectedOrderOption]);

    /* FUNCTIONALITY FOR ADDING BOOKS */

    //set the form data
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: [],
        description: '',
        pages: null,
        price: null,
        stock: null,
        branch: [],
        image: ''
    })

    const onChangeHandler = (e) => {
        // getting name and value pair from frontend
        const { name, value } = e.target
        // setting the name and value in the formdata object 
        setFormData({ ...formData, [name]: value })
    }






    return {
        // for fetching
        noBooksFound, fetchedData, fetchBooks,
        currentPage, totalPages,
        searchQuery, handleSearchQuery,
        sortOptionLabels, orderOptionLabels, handleSortChange, handleOrderChange,
        orderOptions, sortOptions, selectedSortOption, selectedOrderOption,
        // for adding book
        formData, onChangeHandler
    }
}

export default useBookHook;
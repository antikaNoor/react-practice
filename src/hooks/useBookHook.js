import { useEffect, useState } from 'react'
import { axiosInstance } from '.././utils/axiosInstance'
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
            .get(`/book/get-all-books?page=${page}&limit=6&sortParam=${selectedSortOption}&sortOrder=${selectedOrderOption}&search=${searchQuery}`)
            .then((response) => response.data)
            .then((data) => {
                // Check if there are no books found
                if (data.data.totalRecords === 0) {
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
        }, 500);

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

    const handleAddBook = (formData) => {
        // Make a POST request to your API endpoint
        axiosInstance
            .post('/book/add-book', formData)
            .then((response) => {
                if (response.status !== 200) {
                    alert("Something went wrong.")
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.data
            })
            .then((data) => {
                alert("Book Added Successfully!")
                console.log('Book added successfully:', data);
            })
            .catch((error) => {
                alert('Error adding book:', error)
                console.error('Error adding book:', error);
            });
    };

    // const onSubmitHandler = () => {
    //     handleAddBook(formData);
    // };

    const onChangeHandler = (e) => {
        // getting name and value pair from frontend
        const { name, value } = e.target
        // setting the name and value in the formdata object 
        // If the input field is 'genre', split the value by commas and store it as an array
        if (name === 'genre') {
            const genreArray = value.split(',').map((genre) => genre.trim());
            setFormData({ ...formData, [name]: genreArray });
        } else {
            // For other input fields, set the value directly into the formData object
            setFormData({ ...formData, [name]: value });
        }
    }

    const refetchBooks = () => {
        fetchBooks(currentPage);
    };

    return {
        // for fetching
        noBooksFound, fetchedData, fetchBooks,
        currentPage, totalPages,
        searchQuery, handleSearchQuery,
        sortOptionLabels, orderOptionLabels, handleSortChange, handleOrderChange,
        orderOptions, sortOptions, selectedSortOption, selectedOrderOption,
        // for adding book
        formData, onChangeHandler, refetchBooks, handleAddBook
    }
}

export default useBookHook;
import { useEffect, useState } from 'react'

const useBookHook = () => {
    /* FUNCTIONALITY FOR FETCHING ALL BOOKS */

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
    
    const handleAddBook = (formData) => {
        // Make a POST request to your API endpoint
        fetch('http://localhost:8000/book/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    alert("Something went wrong.")
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                response.json()
            })
            .then((data) => {
                alert("Book Added Successfully!")
                console.log('Book added successfully:', data);
            })
            .catch((error) => {
                console.error('Error adding book:', error);
            });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        handleAddBook(formData); // Call the handleAddBook function from your custom hook
    };

    /* FUNCTIONALITY FOR EDITING BOOKS */

    const onEditChangeHandler = (e) => {
        // getting name and value pair from frontend
        const { name, value } = e.target
        // setting the name and value in the formdata object 
        setFormData({ ...formData, [name]: value })
    }
    
    const handleEditBook = (EditFormData) => {
        // Make a POST request to your API endpoint
        fetch('http://localhost:8000/book/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    alert("Something went wrong.")
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                response.json()
            })
            .then((data) => {
                alert("Book Added Successfully!")
                console.log('Book added successfully:', data);
            })
            .catch((error) => {
                console.error('Error adding book:', error);
            });
    };

    const onEditSubmitHandler = (e) => {
        e.preventDefault();
        handleAddBook(formData); // Call the handleAddBook function from your custom hook
    };

    return {
        // for fetching
        fetchedData, fetchBooks,
        currentPage, totalPages,
        searchQuery, handleSearchQuery,
        sortOptionLabels, orderOptionLabels, handleSortChange, handleOrderChange,
        orderOptions, sortOptions, selectedSortOption, selectedOrderOption,
        // for adding book
        formData, onChangeHandler, onSubmitHandler
    }
}

export default useBookHook;
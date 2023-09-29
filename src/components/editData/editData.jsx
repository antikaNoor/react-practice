import React, { useEffect, useState } from 'react'
import AddBookForm from '../form/addBookForm';
import { useParams } from 'react-router-dom';
import EditBookForm from '../form/editBookForm';

function EditData() {
    const { bookId } = useParams()

    const handleEditBook = (formData) => {
        // console.log(formData)
        // Make a POST request to your API endpoint
        fetch(`http://localhost:8000/book/edit-book/:${bookId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    alert("Please fill all the fields properly.")
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                response.json()
            })
            .then((data) => {
                console.log('Book added successfully:', data);
                setBookData(data)
                // Handle success or show a success message to the user
            })
            .catch((error) => {
                console.error('Error adding book:', error);
                // Handle error or show an error message to the user
            });
    };




    useEffect(() => {
        console.log("handleInputs")
        // handleInputs()
        // fetchBooks(currentPage)
    }, []);

    // console.log(bookData)

    return (
        <div>
            <h1>Edit Book</h1>
            <EditBookForm onSubmit={handleEditBook} />
        </div>
    );
}

export default EditData
import React, { useEffect, useState } from 'react'

import AddBookForm from '../form/addBookForm';

function PostData() {
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
                console.log('Book added successfully:', data);
                // Handle success or show a success message to the user
            })
            .catch((error) => {
                console.error('Error adding book:', error);
                // Handle error or show an error message to the user
            });
    };

    return (
        <div>
            <h1>Add a New Book</h1>
            <AddBookForm onSubmit={handleAddBook} />
        </div>
    );
}

export default PostData
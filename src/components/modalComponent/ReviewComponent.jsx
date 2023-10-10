import React from 'react'
import './bookModal.scss'
import Form from '../form/form'
import Button from '../button/button'
import { useForm, Controller } from "react-hook-form"

function EditModal({ rating, text, reviewFormData, onReviewSubmitHandler, reviewBookModal }) {
    const {
        handleSubmit,
        control,
        formState: { errors },
        getValues,
    } = useForm({
        mode: onchange,
        defaultValues: {
            rating: null,
            text: ''
        }
    });

    const onSubmitHandler = (reviewFormData) => {
        console.log("Form is submitted ");
        console.log("The rating ", getValues("rating"));
        console.log("The text ", getValues("text"));
        // handleAddBook(data)
    };
    return (
        <div className='bookModal-container'>
            <div className='bookModal-item'>
                <i className="fa-solid fa-x" onClick={reviewBookModal}></i>

                <div className='add-book-container'>
                    <h1 className='add-book-header'>Edit This Book</h1>
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <div className='review-container'>
                            <div className='form-items'>
                                <h4>Rating</h4>
                                <Controller
                                    name="rating"
                                    control={control}
                                    rules={{
                                        pattern: {
                                            value: /^[1-9][0-9]*$/,
                                            message: "Rating must not contain numbers or spaces",
                                        },
                                    }}
                                    render={({ field }) => (
                                        <input
                                            placeholder="Enter rating"
                                            {...field}
                                            style={{ border: errors.rating ? "1px solid red" : "" }}
                                        />
                                    )}
                                />
                                {errors.rating && <h5>{errors.rating.message}</h5>}
                            </div>
                            <div className='form-items'>
                                <h4>Add a Review</h4>
                                <Controller
                                    name="text"
                                    control={control}
                                    rules={{
                                        maxLength: {
                                            value: 1000,
                                            message: "Maximum length must be 1000",
                                        }
                                    }}
                                    render={({ field }) => (
                                        <input
                                            placeholder="Add a review"
                                            {...field}
                                            style={{ border: errors.text ? "1px solid red" : "" }}
                                        />
                                    )}
                                />
                                {errors.text && <h5>{errors.text.message}</h5>}
                            </div>
                        </div>
                        <button type="submit">Add</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default EditModal

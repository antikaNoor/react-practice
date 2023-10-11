import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import useBookHook from '../../hooks/useBookHook';
import Button from '../../components/button/button';
import './AddBook.scss'
import { useForm, Controller } from "react-hook-form"
import Header from '../../components/header/header';

function AddBook() {

    const { handleAddBook } = useBookHook()

    const {
        handleSubmit,
        control,
        formState: { errors },
        getValues,
    } = useForm({
        mode: onchange,
        defaultValues: {
            title: "",
            author: "",
            description: "",
            pages: null,
            price: null,
            stock: null,
            branch: "",
            image: ""
        }
    });

    const onSubmitHandler = (data) => {
        data.genre = data.genre.split(',').map(genre => genre.trim());
        data.branch = data.branch.split(',').map(branch => branch.trim());
        console.log("Form is submitted ");
        console.log("The title ", getValues("title"));
        console.log("The author ", getValues("author"));
        console.log("The genre ", data.genre);
        console.log("The description ", getValues("description"));
        console.log("The price ", getValues("price"));
        console.log("The stock ", getValues("stock"));
        console.log("The branch ", data.branch);
        console.log("The image ", getValues("image"));
        handleAddBook(data)
    };

    return (

        <>
            <Header />
            <div className='add-book-container'>
                <h1 className='add-book-header'>Add a New Book</h1>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className='form-container'>
                        <div className='form-items'>
                            <h4>Title</h4>
                            <Controller
                                name="title"
                                control={control}
                                rules={{
                                    required: "Title is required",
                                    minLength: {
                                        value: 1,
                                        message: "Minimum length must be 1",
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "Maximum length must be 100",
                                    },
                                    pattern: {
                                        value: /^[^\d]+$/,
                                        message: "Title must not contain numbers or spaces",
                                    },
                                }}
                                render={({ field }) => (
                                    <input
                                        placeholder="Enter title"
                                        {...field}
                                        style={{ border: errors.title ? "1px solid red" : "" }}
                                    />
                                )}
                            />
                            {errors.title && <h5>{errors.title.message}</h5>}
                        </div>

                        <div className='form-items'>
                            <h4>Author</h4>
                            <Controller
                                name="author"
                                control={control}
                                rules={{
                                    required: "Author name is required",
                                    minLength: {
                                        value: 1,
                                        message: "Minimum length must be 1",
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "Maximum length must be 100",
                                    },
                                    pattern: {
                                        value: /^[^\d]+$/,
                                        message: "Author must not contain numbers.",
                                    },
                                }}
                                render={({ field }) => (
                                    <input
                                        placeholder="Enter author"
                                        {...field}
                                        style={{ border: errors.author ? "1px solid red" : "" }}
                                    />
                                )}
                            />
                            {errors.author && <h5>{errors.author.message}</h5>}
                        </div>

                        <div className='form-items'>
                            <h4>Genre</h4>
                            <Controller
                                name="genre"
                                control={control}
                                rules={{
                                    pattern: {
                                        value: /^[^\d]+$/,
                                        message: "Genre must not contain numbers.",
                                    },
                                }}
                                render={({ field }) => (
                                    <input
                                        placeholder="Enter genre"
                                        {...field}
                                        style={{ border: errors.genre ? "1px solid red" : "" }}
                                    />
                                )}
                            />
                            {errors.genre && <h5>{errors.genre.message}</h5>}
                        </div>

                        <div className='form-items'>
                            <h4>Description</h4>
                            <Controller
                                name="description"
                                control={control}
                                rules={{
                                    maxLength: {
                                        value: 1000,
                                        message: "Maximum length must be 1000",
                                    }
                                }}
                                render={({ field }) => (
                                    <input
                                        placeholder="Enter description"
                                        {...field}
                                        style={{ border: errors.description ? "1px solid red" : "" }}
                                    />
                                )}
                            />
                            {errors.description && <h5>{errors.description.message}</h5>}
                        </div>

                        <div className='form-items'>
                            <h4>Price</h4>
                            <Controller
                                name="price"
                                control={control}
                                rules={{
                                    required: "Price is required",

                                    pattern: {
                                        value: /^[1-9][0-9]*$/,
                                        message: "Price must be a non-negative integer",
                                    },
                                }}
                                render={({ field }) => (
                                    <input
                                        placeholder="Enter price"
                                        {...field}
                                        style={{ border: errors.price ? "1px solid red" : "" }}
                                    />
                                )}
                            />
                            {errors.price && <h5>{errors.price.message}</h5>}
                        </div>
                        <div className='form-items'>
                            <h4>Stock</h4>
                            <Controller
                                name="stock"
                                control={control}
                                rules={{
                                    required: "stock is required",
                                    pattern: {
                                        value: /^[1-9][0-9]*$/,
                                        message: "Stock must be a non-negative integer",
                                    },
                                }}
                                render={({ field }) => (
                                    <input
                                        placeholder="Enter stock"
                                        {...field}
                                        style={{ border: errors.stock ? "1px solid red" : "" }}
                                    />
                                )}
                            />
                            {errors.stock && <h5>{errors.stock.message}</h5>}
                        </div>

                        <div className='form-items'>
                            <h4>Pages</h4>
                            <Controller
                                name="pages"
                                control={control}
                                rules={{
                                    pattern: {
                                        value: /^[1-9][0-9]*$/,
                                        message: "Pages must be a non-negative integer",
                                    },
                                }}
                                render={({ field }) => (
                                    <input
                                        placeholder="Enter pages"
                                        {...field}
                                        style={{ border: errors.pages ? "1px solid red" : "" }}
                                    />
                                )}
                            />
                            {errors.pages && <h5>{errors.pages.message}</h5>}
                        </div>

                        <div className='form-items'>
                            <h4>Branch</h4>
                            <Controller
                                name="branch"
                                control={control}
                                rules={{
                                    pattern: {
                                        value: /^[^\d]+$/,
                                        message: "Genre must not contain numbers.",
                                    },
                                }}
                                render={({ field }) => (
                                    <input
                                        placeholder="Enter branch"
                                        {...field}
                                        style={{ border: errors.branch ? "1px solid red" : "" }}
                                    />
                                )}
                            />
                            {errors.branch && <h5>{errors.branch.message}</h5>}
                        </div>

                        <div className='form-items'>
                            <h4>Image URL</h4>
                            <Controller
                                name="image"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        placeholder="Enter image url"
                                        {...field}
                                        style={{ border: errors.image ? "1px solid red" : "" }}
                                    />

                                )}
                            />
                            {errors.image && <h5>{errors.image.message}</h5>}
                        </div>

                    </div>
                    <button className="btn" type="submit">Add</button>
                </form>
            </div>
        </>
    );
}

export default AddBook
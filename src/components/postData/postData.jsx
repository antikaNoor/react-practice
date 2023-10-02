// import Form from '../form/form'
import useBookHook from '../hooks/useBookHook';
import Button from '../button/button'
import './postData.scss'
import { useForm, Controller } from "react-hook-form"

function PostData() {

    const {
        handleSubmit,
        control,
        formState: { errors },
        getValues,
    } = useForm();

    const onSubmitHandler = () => {
        console.log("Form is submitted ");
        console.log("The title ", getValues("title"));
        console.log("The author ", getValues("author"));
        console.log("The genre ", getValues("genre"));
        console.log("The description ", getValues("description"));
        console.log("The price ", getValues("price"));
        console.log("The stock ", getValues("stock"));
        console.log("The branch ", getValues("branch"));
        console.log("The image ", getValues("image"));
    };

    return (
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
                                    value: 6,
                                    message: "Minimum length must be 6",
                                },
                                maxLength: {
                                    value: 100,
                                    message: "Maximum length must be 100",
                                },
                                pattern: {
                                    value: /^[^\s]+$/,
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
                                    value: 6,
                                    message: "Minimum length must be 5",
                                },
                                maxLength: {
                                    value: 100,
                                    message: "Maximum length must be 100",
                                },
                                pattern: {
                                    value: /^[^\d\s]+$/,
                                    message: "Author must not contain numbers or spaces",
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
                                    placeholder="Enter image"
                                    {...field}
                                    style={{ border: errors.image ? "1px solid red" : "" }}
                                />
                            )}
                        />
                        {errors.image && <h5>{errors.image.message}</h5>}
                    </div>
                    {/* <Form className='form-items'
                    label='Title'
                    type='text'
                    name='title'
                    value={formData.title}
                    placeholder=''
                    onChange={onChangeHandler}

                />
                <Form className='form-items'
                    label='Author'
                    type='text'
                    name='author'
                    value={formData.author}
                    placeholder=''
                    onChange={onChangeHandler}

                />
                <Form className='form-items'
                    label='Genre'
                    type='text'
                    name='genre'
                    value={formData.genre}
                    placeholder=''
                    onChange={onChangeHandler}

                />
                <Form className='form-items'
                    label='Description'
                    type='text'
                    name='description'
                    value={formData.description}
                    placeholder=''
                    onChange={onChangeHandler}

                />
                <Form className='form-items'
                    label='Pages'
                    type='text'
                    name='pages'
                    value={formData.pages}
                    placeholder=''
                    onChange={onChangeHandler}

                />
                <Form className='form-items'
                    label='Price'
                    type='text'
                    name='price'
                    value={formData.price}
                    placeholder=''
                    onChange={onChangeHandler}

                />
                <Form className='form-items'
                    label='Stock'
                    type='text'
                    name='stock'
                    value={formData.stock}
                    placeholder=''
                    onChange={onChangeHandler}

                />
                <Form className='form-items'
                    label='Branches'
                    type='text'
                    name='branch'
                    value={formData.branch}
                    placeholder=''
                    onChange={onChangeHandler}

                />
                <Form className='form-items'
                    label='Image URL'
                    type='text'
                    name='image'
                    value={formData.image}
                    placeholder=''
                    onChange={onChangeHandler}

                /> */}
                </div>
                <button type="submit">Submit</button>
                {/* <Button type='submit'
                    value='Submit'
                    onClick={onSubmitHandler} /> */}
            </form>
        </div>
    );
}

export default PostData
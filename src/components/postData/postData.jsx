import Form from '../form/form'
import useBookHook from '../hooks/useBookHook';
import Button from '../button/button'
import './postData.scss'

function PostData() {
    const { formData, onChangeHandler, onSubmitHandler } = useBookHook()
    
    return (
        <div className='add-book-container'>
            <h1 className='add-book-header'>Add a New Book</h1>

            <div className='form-container'>
                <Form className='form-items'
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
                    
                />
            </div>
            <Button type='submit'
                value='Submit'
                onClick={onSubmitHandler} />
        </div>
    );
}

export default PostData
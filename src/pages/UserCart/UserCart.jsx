import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBookToCart, removeBookFromCart } from '../../redux/Slices/CartSlice';
import Button from '../../components/button/button'
import Header from '../../components/header/header'
import useCartHook from '../../hooks/useCartHook'
import './UserCart.scss'
import { PiPlusSquareFill, PiMinusSquareFill } from 'react-icons/pi'

function UserCart() {
    const dispatch = useDispatch();
    const { fetchedCart, handleAddToCart, handleDeleteFromCart, handleCheckout } = useCartHook()

    const [relatedBook, setRelatedBook] = useState([])
    const [quantity, setQuantity] = useState(null)
    let [count, setCount] = useState(0)

    const handleDelete = () => {

        dispatch(removeBookFromCart(relatedBook))
        const bought_books = {
            id: relatedBook.id._id,
            amount: count
        }
        count = 0
        handleDeleteFromCart(bought_books)
    }

    const handleAdd = () => {

        dispatch(addBookToCart(relatedBook))
        const bought_books = {
            id: relatedBook.id._id,
            amount: count
        }
        count = 0
        handleAddToCart(bought_books)
    }

    useEffect(() => {
    }, [relatedBook, quantity, count])

    console.log(count)
    return (
        <>
            <Header />
            <div className='cart-container'>
                <h2>Your Cart</h2>

                {fetchedCart?.bought_books?.map((book) => {

                    return (
                        <div className='info-container'>
                            <div>Title: {book.id.title}</div>
                            <div>Unit price: {book.id.price}</div>
                            <div>Total price: {book.id.price * book.quantity}</div>
                            <div className='quantity-container'>
                                <PiPlusSquareFill
                                    style={{ fontSize: '24px' }}
                                    onClick={() => {
                                        setRelatedBook(book)
                                        setQuantity(book.quantity++)
                                        setCount(count + 1)

                                    }}
                                />
                                <div>Quantity: {book.quantity}</div>
                                <PiMinusSquareFill
                                    style={{ fontSize: '24px' }}
                                    onClick={() => {
                                        setRelatedBook(book)
                                        setQuantity(book.quantity--)
                                        setCount(count + 1)
                                    }}
                                />
                                <Button type='submit'
                                    value='Update'
                                    onClick={() => {
                                        handleAdd()
                                    }}
                                />
                            </div>
                        </div>
                    )
                })}

                {fetchedCart &&
                    <div>Subtotal: {fetchedCart?.total_spent}</div>
                }
            </div>
            <div className='checkout-container'>
                <Button
                    type='submit'
                    value='Checkout'
                    onClick={() => {
                        console.log("checkout clicked")
                        console.log("data from cart", fetchedCart._id)
                        handleCheckout(fetchedCart._id)
                    }}
                />
            </div>
        </>
    )
}

export default UserCart
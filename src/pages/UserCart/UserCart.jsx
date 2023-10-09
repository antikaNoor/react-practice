import React from 'react'
import Header from '../../components/header/header'
import useCartHook from '../../hooks/useCartHook'

function MyCart() {
    const { fetchedCart } = useCartHook()
    return (
        <>
            <Header />
            <div>{fetchedCart}</div>
            <div>MyCart</div>
        </>
    )
}

export default MyCart
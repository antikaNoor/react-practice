import { axiosInstance, axiosInstanceToken } from '.././utils/axiosInstance'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookToCart, clearCart } from '../redux/Slices/CartSlice';
import { useNavigate } from 'react-router-dom';

const useCartHook = () => {
    const user = useSelector((state) => state.user);
    const checkString = localStorage.getItem("user");
    const check = JSON.parse(checkString)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = async (bought_books) => {
        console.log("user id", user.reader);
        console.log("bought_books from hook", bought_books);

        try {
            const response = await axiosInstanceToken.post('/cart/add-to-cart', {
                reader: user.reader,
                bought_books,
            },
                {
                    headers: {
                        'Authorization': `Bearer ${check.token}`,
                        'Content-Type': 'application/json',
                    },
                });

            if (response.status === 200) {
                dispatch(clearCart());

                alert("Successfully added to cart!");
                console.log('Successfully added to cart!', response.data);
            } else {
                // Handle non-200 status code here if necessary
                alert("Something went wrong.");
                console.error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            alert('Error adding to cart');
            console.error('Error adding to cart:', error);
        }
    };

    const [fetchedCart, setFetchedCart] = useState([]);
    const fetchedCartApi = async () => {
        // Fetch data from API with custom headers
        await axiosInstanceToken
            .get("/cart/show-my-cart", {
                headers: {
                    'Authorization': `Bearer ${check.token}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                console.log(response.data.data)
                setFetchedCart(response.data.data)
            })
            .catch((error) => {
                // Handle other errors (network error, timeout, etc.) here.
                console.error("Other Error:", error);
            })
    };
    useEffect(() => {
        fetchedCartApi();
    }, []);

    return { handleAddToCart, fetchedCart };
};

export default useCartHook;

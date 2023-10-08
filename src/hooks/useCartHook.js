import { axiosInstance, axiosInstanceToken } from '.././utils/axiosInstance'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, addToCart, logoutUser } from '../redux/Slices/UserSlice';
import { useNavigate } from 'react-router-dom';

const useCartHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const selector = useSelector()
    const cartData = useSelector((state) => ({
        reader: state.user?._id,
        bought_books: {
            id: state.user?.cart?._id,
            amount: 1
        }
    }));

    const handleAddToCart = async () => {

        // Make a POST request to your API endpoint
        console.log("cartBookId", cartData)
        // console.log("cartreader", cartReaderId)
        await axiosInstance
            .post('/cart/add-to-cart', cartData)
            .then((response) => {
                if (response.status !== 200) {
                    alert("Something went wrong.")
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.cartData
            })
            .then((cartBookId) => {
                alert("Successfully added to cart!")
                console.log('Successfully added to cart!', cartData);
            })
            .catch((error) => {
                alert('Error adding to cart')
                console.error('Error adding to cart up:', error);
            });


    }
    return { handleAddToCart }
}

export default useCartHook;
import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: "cart",
    initialState: [], // Initial state is an empty array
    reducers: {
        addBookToCart: (state, action) => {
            const bookToAdd = action.payload;
            const existingBook = state.find((book) => book?._id === bookToAdd?._id);

            if (existingBook) {
                console.log("exist", existingBook)
                existingBook.quantity += 1;
            } else {
                state.push({
                    ...bookToAdd,
                    quantity: 1,
                });
            }
        },
        removeBookToCart: (state, action) => {
            return state.filter((book) => book._id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            console.log(action.payload);
            const bookToUpdate = state.find((book) => book._id == action.payload);
            if (bookToUpdate && bookToUpdate.quantity < 10 && bookToUpdate.quantity >= 0) {
                bookToUpdate.quantity += 1;
            }
            return state;
        },
        decreaseQuantity: (state, action) => {
            const bookToUpdate = state.find((book) => book._id == action.payload);
            if (bookToUpdate && bookToUpdate.quantity > 1) {
                bookToUpdate.quantity -= 1;
            }
            return state;
        },
        clearCart: () => [], // Clear the cart by returning an empty array
    },
});

export const {
    addBookToCart,
    removeBookToCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartReducer.actions;

export default cartReducer.reducer;
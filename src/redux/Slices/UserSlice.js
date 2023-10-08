import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user"));

const initialState = savedUser
    ? savedUser
    : {
        _id: "",
        email: "",
        token: "",
        userProfileImage: null,
        cart: [],
    };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state._id = action.payload._id
            state.email = action.payload.email;
            state.token = action.payload.token;

            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        addToCart: (state, action) => {
            if (!Array.isArray(state.cart)) {
                state.cart = [];
            }
            state.cart.push(action.payload);
        },
        updateUserProfileImage: (state, action) => {
            state.userProfileImage = action.payload;
        },
        logoutUser: (state) => {
            state.email = "";
            state.token = "";
            state.cart = [];
            localStorage.removeItem('user');
        },
    },
});

export const { addUser, addToCart, updateUserProfileImage, logoutUser } = userSlice.actions;

export default userSlice.reducer;
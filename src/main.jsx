import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/Store/store.js';
import { addUser } from './redux/Slices/UserSlice'; // Import the actions

const savedUser = JSON.parse(localStorage.getItem('user'));

// If user data exists in local storage, dispatch actions to update the store
if (savedUser) {
  store.dispatch(addUser(savedUser)); // Dispatch the addUser action
  // Assuming you have saved cart data in local storage, you can dispatch addToCart as well
  // if (savedUser.cart) {
  //   savedUser.cart.forEach((item) => {
  //     store.dispatch(addToCart(item)); // Dispatch the addToCart action for each item in the cart
  //   });
  // }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
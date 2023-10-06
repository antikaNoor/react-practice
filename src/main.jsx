import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from "./redux/Store/store.js";

const savedUser = JSON.parse(localStorage.getItem('user'));

// If user data exists in local storage, dispatch an action to update the store
if (savedUser) {
  store.dispatch({
    type: 'user/addUser', // Use your actual action type here
    payload: savedUser,
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

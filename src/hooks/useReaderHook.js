import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance, axiosInstanceToken } from '.././utils/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

const useReaderHook = () => {
  const [fetchedTransaction, setFetchedTransaction] = useState([]);
  const [fetchedAllUsers, setFetchedAllUsers] = useState([])
  const [allTransactions, setAllTransactions] = useState([])
  const checkString = localStorage.getItem("user");
  const check = JSON.parse(checkString)

  const fetchTransactions = async () => {
    // Fetch data from API with custom headers
    await axiosInstanceToken
      .get("/cart/show-my-transaction", {
        headers: {
          'Authorization': `Bearer ${check.token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // console.log(response.data.data)
        setFetchedTransaction(response.data.data)
      })
      .catch((error) => {
        // Handle other errors (network error, timeout, etc.) here.
        console.error("Other Error:", error);
      })
  };

  const updateBalance = async () => {
    try {
      const response = await axiosInstanceToken.put('/reader/update-balance',
        {
          headers: {
            'Authorization': `Bearer ${check.token}`,
            'Content-Type': 'application/json',
          },
        });

      // console.log("balance from hook", balance)
      if (response.status === 200) {

        alert("Successfully updated balance!");
        console.log('Successfully updated balance!', response.data);
      } else {
        alert("Something went wrong.");
        console.error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      alert('Error updating balace');
      console.error('Error updating balace:', error);
    }
  }

  const getAllUser = async () => {
    // Fetch data from API with custom headers
    await axiosInstanceToken
      .get("/reader/get-user-info", {
        headers: {
          'Authorization': `Bearer ${check.token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // console.log(response.data.data)
        setFetchedAllUsers(response.data.data)
      })
      .catch((error) => {
        // Handle other errors (network error, timeout, etc.) here.
        console.error("Other Error:", error);
      })
  }

  // DELETE


  const handleDeleteUser = (readerId) => {
    axiosInstanceToken
      .delete(`/reader/delete-reader/${readerId}`, {
        headers: {
          'Authorization': `Bearer ${check.token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          alert("Something went wrong.")
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.data
      })
      .then((data) => {
        swal("Book Deleted Successfully!")
        console.log('Book deleted successfully:', data);
      })
      .catch((error) => {
        if (error.response.data.success === false) {
          swal(error.response.data.message);
        }
        console.error('Error deleting book:', error.response.data.success);
      });
  };

  const handleEditUser = (readerId) => {
    axiosInstanceToken
      .patch(`/reader/edit-reader/${readerId}`, {
        headers: {
          'Authorization': `Bearer ${check.token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          alert("Something went wrong.")
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.data
      })
      .then((data) => {
        swal("Book Edited Successfully!")
        console.log('Book Edited successfully:', data);
      })
      .catch((error) => {
        if (error.response.data.success === false) {
          swal(error.response.data.message);
        }
        console.error('Error editing book:', error.response);
      });
  };

  const onEditSubmitHandler = (readerId) => {
    handleEditUser(readerId)
  }

  const onDeleteSubmitHandler = (readerId) => {
    // e.preventDefault();
    //api
    handleDeleteUser(readerId);
    // window.location.reload();
  };

  const getAllTransactions = async () => {
    // Fetch data from API with custom headers
    await axiosInstanceToken
      .get("/cart/get-transaction", {
        headers: {
          'Authorization': `Bearer ${check.token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // console.log(response.data.data)
        setAllTransactions(response.data.data)
      })
      .catch((error) => {
        // Handle other errors (network error, timeout, etc.) here.
        console.error("Other Error:", error);
      })
  }

  useEffect(() => {
    fetchTransactions();
    getAllUser()
    getAllTransactions()
  }, []);

  return { fetchedTransaction, updateBalance, fetchedAllUsers, allTransactions, onDeleteSubmitHandler, onEditSubmitHandler };
};

export default useReaderHook;

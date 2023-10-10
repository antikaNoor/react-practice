import React, { useState, useEffect } from 'react';
import { axiosInstance, axiosInstanceToken } from '.././utils/axiosInstance';

const useReaderHook = () => {
  const [fetchedTransaction, setFetchedTransaction] = useState([]);
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
  useEffect(() => {
    fetchTransactions();

  }, []);

  return { fetchedTransaction };
};

export default useReaderHook;

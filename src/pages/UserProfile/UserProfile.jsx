import React from 'react';
import './UserProfile.scss'
import { useSelector } from 'react-redux';
import Header from '../../components/header/header';
import useReaderHook from '../../hooks/useReaderHook';
import { useForm, Controller } from "react-hook-form";
import ReviewData from '../../components/ReviewData/ReviewData';
import Button from '../../components/button/button';

function UserProfile({ updateModal }) {
  const { fetchedTransaction } = useReaderHook()
  const boughtBooks = fetchedTransaction ? fetchedTransaction.bought_books : [];
  const user = useSelector((state) => state.user);

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: onchange,
    defaultValues: {
      rating: null,
      text: ''
    }
  });

  const onSubmitHandler = () => {
    console.log("Form is submitted ");
    console.log("The rating ", getValues("rating"));
    console.log("The text ", getValues("text"));
    // handleAddBook(data)
  };

  return (
    <div>
      <Header />
      <div className='profile-container'>
        <div className='reader-info-container'>
          <h2>User Profile</h2>
          <p>username: {user.reader_name}</p>
          <p>Email: {user.reader_email}</p>
        </div>

        {/* {JSON.stringify(fetchedData)} */}
        <div className='transaction-container'>
          <h2>Books You've Bought</h2>
          {fetchedTransaction?.map((bookInfo, index) => (
            bookInfo?.bought_books?.map((book, innerIndex) => {
              return (
                <div className='transaction-items' key={innerIndex}>
                  <div>{book?.id?.title}</div>
                  <div>{book?.id?.author}</div>
                  <div>{book?.id?.genre}</div>

                  <div>
                    <Button
                      type='submit'
                      value='Add Review'
                      onClick={() => {
                        console.log("Button is clicked")
                        updateModal()
                      }} />
                  </div>
                </div>
              )
            })
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

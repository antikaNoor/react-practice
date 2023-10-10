// UserProfile.js
import React, { useEffect, useState } from 'react';
import './UserProfile.scss';
import { useSelector } from 'react-redux';
import Header from '../../components/header/header';
import useReaderHook from '../../hooks/useReaderHook';
import useReviewHook from '../../hooks/useReviewHook';
import { useForm, Controller } from 'react-hook-form';
import ReviewModal from '../../components/modalComponent/ReviewModal';
import Button from '../../components/button/button';

function UserProfile() {
  const { fetchedTransaction } = useReaderHook();
  const { fetchedReview } = useReviewHook()
  const boughtBooks = fetchedTransaction ? fetchedTransaction.bought_books : [];
  const user = useSelector((state) => state.user);
  const [relatedBook, setRelatedBook] = useState([])

  console.log("revvv", fetchedReview)

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Show or hide the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleSetRelatedBook = (book) => {
    setRelatedBook(book);
  }

  return (
    <div>
      <Header />

      <div className='profile-container'>
        <div className='reader-info-container'>
          <h2>User Profile</h2>
          <p>username: {user.reader_name}</p>
          <p>Email: {user.reader_email}</p>
        </div>

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
                        toggleModal();
                        handleSetRelatedBook(book)
                        console.log('Button is clicked');
                      }}
                    />
                  </div>
                </div>
              );
            })
          ))}
        </div>

        <div className='review-container'>
          <h2>Your Reviews</h2>
          {fetchedReview?.map((review, index)=>{
            return (
              <div className='review-items' key={index}>
                <div>{review?.book?.title}</div>
                <div>{review?.rating}</div>
                <div>{review?.text}</div>

                <div>
                    <Button
                      type='submit'
                      value='Edit Review'
                      onClick={() => {
                        // toggleModal();
                        // handleSetRelatedBook(book)
                        console.log('Button is clicked');
                      }}
                    />
                  </div>
              </div>
            )
          })}
        </div>

      </div>

      {isModalOpen && (
        <ReviewModal
          relatedBook={relatedBook?.id?._id}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );

}

export default UserProfile;

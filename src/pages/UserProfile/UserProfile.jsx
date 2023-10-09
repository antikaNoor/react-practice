import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header/header';
import useReaderHook from '../../hooks/useReaderHook';
// import useReaderHook from '../../hooks/useReaderHook'; // Import your custom hook

function UserProfile() {
  const { fetchedTransaction } = useReaderHook()
  const boughtBooks = fetchedTransaction ? fetchedTransaction.bought_books : [];
  const user = useSelector((state) => state.user);

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
          {fetchedTransaction?.map((bookInfo) => (
            bookInfo?.bought_books?.map(book => {
              return (
                <div className='transaction-container'>
                  <div>{book?.id?.title}</div>
                  <div>{book?.id?.author}</div>
                  <div>{book?.id?.genre}</div>
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

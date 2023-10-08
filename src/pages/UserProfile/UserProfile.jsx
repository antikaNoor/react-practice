import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header/header';
import useReaderHook from '../../hooks/useReaderHook'; // Import your custom hook

function UserProfile() {
  const user = useSelector((state) => state.user);

  // Use the custom hook to access imageUrl and handleFileUpload
  const { imageUrl, handleFileUpload } = useReaderHook();

  return (
    <div>
      <Header />
      <div className='profile-container'>
        <div className='reader-info-container'>
          <h2>User Profile</h2>
          <p>username: {user.reader_name}</p>
          <p>Email: {user.reader_email}</p>
          <input type="file" accept="image/*" onChange={handleFileUpload} />
          {imageUrl && <img src={imageUrl} alt="Profile" />}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

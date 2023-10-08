import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfileImage } from '../redux/Slices/UserSlice';

const useReaderHook = () => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const storedImageUrl = localStorage.getItem('userProfileImage');
    if (storedImageUrl) {
      setImageUrl(storedImageUrl);
    }
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const uploadedImageUrl = event.target.result;
        setImageUrl(uploadedImageUrl);

        // Save the image URL in local storage
        localStorage.setItem('userProfileImage', uploadedImageUrl);

        // Dispatch an action to update the user's profile image in Redux
        dispatch(updateUserProfileImage(uploadedImageUrl));
      };

      reader.readAsDataURL(file);
    }
  };

  // Return an object with the properties and functions you want to use in your component
  return { imageUrl, handleFileUpload };
};

export default useReaderHook;

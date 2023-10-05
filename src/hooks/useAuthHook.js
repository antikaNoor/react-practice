import { useEffect, useState } from 'react'
import { axiosInstance, axiosInstanceToken } from '.././utils/axiosInstance'

const useAuthHook = () => {
    const handleSignUp = (formData) => {
        // Make a POST request to your API endpoint
        console.log(formData)
        axiosInstance
            .post('/auth/signup', formData)
            .then((response) => {
                if (response.status !== 200) {
                    alert("Something went wrong.")
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.data
            })
            .then((data) => {
                alert("Sign up completed!")
                console.log('Sign up completed!:', data);
            })
            .catch((error) => {
                alert('Error signing up:')
                console.error('Error signing up:', error);
            });


    };

    const handleLogin = (formData) => {
        // Make a POST request to your API endpoint
        console.log(formData)
        axiosInstanceToken
            .post('/auth/login', formData)
            .then((response) => {
                if (response.status !== 200) {
                    alert("Something went wrong.")
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.data
            })
            .then((response) => {
                //get token from response
                const token = response.data.token;
                console.log("token", token)

                //set JWT token to local
                localStorage.setItem("token", token);
            })
            .catch((error) => {
                alert('Authentication failed!')
                console.error('Error logging in:', error);
            });
    }
    return { handleSignUp, handleLogin }
}

export default useAuthHook;
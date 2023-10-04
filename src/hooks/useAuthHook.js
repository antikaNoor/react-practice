import { useEffect, useState } from 'react'
import axiosInstance from '.././utils/axiosInstance'

//set the form data
// const [formData, setFormData] = useState({
//     reader_name: "",
//     reader_email: "",
//     password: ""
// })

const useAuthHook = () => {
    const handleSignUp = (formData) => {
        // Make a POST request to your API endpoint
        console.log(formData)
        axiosInstance
            .post('/auth/signup', formData)
            .then((response) => {
                if (!response.ok) {
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
    return { handleSignUp }
}

export default useAuthHook;
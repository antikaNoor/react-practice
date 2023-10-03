import React from 'react'
import Header from '../../components/header/header'
import './Login.scss'
import { useForm, Controller } from "react-hook-form"

function Login() {

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      reader_email: "",
      password: ""
    }
  });

  const onSubmitHandler = () => {
    console.log("Form is submitted ");
    console.log("Reader's email ", getValues("reader_email"));
  };

  return (
    <>
      <Header />
      <div className='login-container'>
        <div className='login-overlay'>
          <div className='login'>
            <h1 className='login-header'>Log in to Your Account</h1>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className='login-form-container'>

                <div className='login-form-items'>
                  <h4 className='login-text'>Email</h4>
                  <Controller
                    name="reader_email"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                        message: "Enter a valid email address.",
                      },
                    }}
                    render={({ field }) => (
                      <input
                        placeholder="Enter email"
                        {...field}
                        style={{ border: errors.reader_email ? "1px solid red" : "" }}
                      />
                    )}
                  />
                  {errors.reader_email && <h5>{errors.reader_email.message}</h5>}
                </div>

                <div className='login-form-items'>
                  <h4 className='login-text'>Password</h4>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/,
                        message: "Password must contain at least one capital letter, one digit, one special character, and be 8 characters or more long.",
                      },
                    }}
                    render={({ field }) => (
                      <input type='password'
                        placeholder="Enter password"
                        {...field}
                        style={{ border: errors.password ? "1px solid red" : "" }}
                      />
                    )}
                  />
                  {errors.password && <h5>{errors.password.message}</h5>}
                </div>
                <button className='login-btn' type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

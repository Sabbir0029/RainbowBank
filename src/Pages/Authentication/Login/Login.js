import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img from '../../../img/google-1088004_960_720.png';

const Login = () => {
    const [loginData, setLoginDate] = useState({});
    
    const {user, loginUser,isLoading,signInWithGoogle} = useAuth()

    const location = useLocation();
    const history = useHistory();


    const handelOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...loginData}
        newData[field] = value;
        setLoginDate(newData)
    }
    const handelSubmitBtn = e =>{
        loginUser(loginData.email, loginData.password, location, history )
        e.preventDefault();
    }
    return (
        <div className='mt-5'>
            <h1 className='text-dark mb-4 fw-bold fst-italic pt-5'>Login to Your Account</h1>
            {user?.email && [
                'success',
              ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                  Logged {variant} in Correctly!
                </Alert>
              ))}
            <form onSubmit={handelSubmitBtn}>
                <input 
                className='w-50 text-dark'
                placeholder="Your Email"
                name='email'
                type='email'
                onChange={handelOnChange}
                ></input> <br></br>
                <input 
                className='w-50 m-3 text-dark'
                placeholder="Your Password"
                name='password'
                type='password'
                onChange={handelOnChange}
                ></input><br></br>
                <Button type='submit' className='w-50 mb-3 bg-dark border-dark fw-bold fst-italic rounded'>Login</Button>
            </form>
            {isLoading && <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>}
            <p ><Button className='text-decoration-none bg-light text-dark border-0 fw-bold fst-italic mb-2'>Forgot Password</Button></p>
                <img onClick={signInWithGoogle} className='img1 mb-5'  src={img} alt=""/>
        </div>
    );
};

export default Login;
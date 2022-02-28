import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginDate] = useState({});
    
    const {user,register,isLoading} = useAuth();
    const history = useHistory();
    const handelOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...loginData}
        newData[field] = value;
        console.log(newData)
        setLoginDate(newData)
    }
    const handelSubmitBtn = e =>{
        if(loginData.password !== loginData.password2){
            alert('your password did not match')
            return
        }
        register(loginData.email, loginData.password, history)
        e.preventDefault();
    }
    return (
        <div className='mt-5'>
            <h1 className='text-dark mb-4 fw-bold fst-italic pt-5'>Please Register</h1>
            {user?.email && [
                'success',
              ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                  User{variant} Created Successfully!
                </Alert>
              ))}
             { !isLoading && <form onSubmit={handelSubmitBtn}>
                <input 
                className='w-50 m-3 text-dark '
                placeholder="Your Name"
                name='displayName'
                type='text'
                onBlur={handelOnBlur}
                ></input> <br></br>
                <input 
                className='w-50 text-dark '
                placeholder="Your Email"
                name='email'
                type='email'
                onBlur={handelOnBlur}
                ></input> <br></br>
                <input 
                className='w-50 m-3 text-dark'
                placeholder="Your Password"
                name='password'
                type='password'
                onBlur={handelOnBlur}
                ></input><br></br>
                <input 
                className='w-50 mb-3 text-dark'
                placeholder="Conform Password"
                name='password2'
                type='password'
                onBlur={handelOnBlur}
                ></input><br></br>
                <Button type='submit' className='w-50 mb-3 bg-dark border-dark fw-bold fst-italic'>Register</Button>
            </form>}
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
        </div>
    );
};

export default Register;
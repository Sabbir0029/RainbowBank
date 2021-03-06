import { Alert, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';

const MakeAdmin = () => {
    const [email, setEmail]= useState('');
    const [admin, setAdmin]= useState(false);

    const handelOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handelAdmin = e =>{
        const user ={email}
        fetch('https://hidden-castle-66023.herokuapp.com/users/admin',{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                setEmail('')
                setAdmin(true)
            }
        })
        e.preventDefault()
    }
    return (
        <div className='dashboard'>
             <Navigation></Navigation>
            <h1 className='text-dark mb-4 mt-5 fw-bold fst-italic pt-5'>Make Admin</h1>
            {admin && [
                'success',
              ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                  Made Admin {variant} in Correctly!
                </Alert>
              ))}
            <form onSubmit={handelAdmin}>
            <input 
                className='w-25 text-dark '
                placeholder="Your Email"
                name='email'
                type='email'
                onBlur={handelOnBlur}
                ></input>
                <Button type='submit' className='m-5 bg-dark border-dark fw-bold fst-italic'>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;
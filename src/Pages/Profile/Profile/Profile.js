import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Profile = () => {
    const {logOut,admin} = useAuth();
    return (
        <div>
            <h1>this is Profile</h1>
            {admin &&
                <Link to='/MakeAdmin' className='menu'>Make Admin</Link>
                }
            
                <Link to='/MakeAdmin' className='menu'>Make Admin</Link>
                
            <Button onClick={logOut}>Log Out</Button>
        </div>
    );
};

export default Profile;
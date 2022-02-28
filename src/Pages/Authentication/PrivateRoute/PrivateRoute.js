import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} = useAuth()
    if (isLoading) {
        return <h1 className="text-center">Please Wait...</h1>
    }
    return (
        <Route
            {...rest} 
            render = {({location})=> user.email ? 
            children : 
            <Redirect
                to={{
                    pathname:'/',
                    state:{from:location}
                    }}
            ></Redirect>}>

        </Route>
    );
};

export default PrivateRoute;
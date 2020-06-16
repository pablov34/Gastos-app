import React,{useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function PrivateRoute(props)
{
    const context = useContext(AuthContext); 
    const isLoggedIn  = context.isLoggedIn;
    const authReady = context.authReady;
    const { type } = props;

    if(authReady)
    {
        if(type === 'private' && !isLoggedIn){
            return <Redirect to="/login"></Redirect>
        }
        else if(type === 'public' && isLoggedIn){
            return <Redirect to="/dashboard"></Redirect>
        }
    }

    return(
        <Route {...props}></Route>
    )
}

export default PrivateRoute

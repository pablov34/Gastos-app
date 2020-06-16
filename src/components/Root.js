import React,{useState, useEffect, useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import ExpenseContext from '../context/ExpenseContext';

function Root(props)
{
    //este componente sirve para no permitir la renderizacion de ningun otro comp hasta que
    //se cargue el AuthReady (no permite la redireccion de authentication)
    //en caso de querer que se ejecute solo 1 vez:
    /* useEffect(()=>{
        console.log('HOME componentDidMount - hook equivalente');
      }, []);*/
    
    const context = useContext(AuthContext);
    const context2 = useContext(ExpenseContext); 
    const authReady = context.authReady;
    const expenseReady = context2.loaded;
    const { children } = props;

    if(!authReady || !expenseReady)
    {
        return <div>Loading...</div>
    }

    return children
}

export default Root
import React,{useState, useEffect} from 'react';
import {startUi} from '../services/firebase'

function Login()
{
    useEffect(()=>{
        console.log('HOME componentDidMount - hook equivalente');
        startUi('#firebaseui-login')
      }, []);

    return( 
        <div id="firebaseui-login">
            
        </div>
        
  )
}

export default Login
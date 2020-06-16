import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login'
import AuthState from './context/AuthState'
import ExpenseState from './context/ExpenseState';
import PrivateRoute from './components/PrivateRoute'
import Root from './components/Root'
import './style.css'

const root= (
   <AuthState>
      <ExpenseState>
           <BrowserRouter>
             <Root>      
                <Switch>
                  <PrivateRoute type="public" path="/login" component={Login} />
                  <PrivateRoute type="private" path="/dashboard" component={Dashboard} />
                  <Redirect from="/" to="/dashboard" />
                </Switch>       
             </Root>   
          </BrowserRouter>
      </ExpenseState>
  </AuthState>
);

ReactDOM.render(root,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

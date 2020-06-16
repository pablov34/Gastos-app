import React from 'react';
import { watchUserChanges} from '../services/watcher'
import AuthContext from './AuthContext';

class AuthState extends React.Component{
    state = {
        authReady:false,
        isLoggedIn: false,
        user: null
      }
      //"authReady" con esto me permite saber si ya se ejecuto el watch (dado que tarda un tiempo)
      //cuando es false todavia no volvio la respuesta desde firebase
      componentDidMount(){
          watchUserChanges((user)=> {
            if(user)
            {
                this.setState({
                    isLoggedIn: true,
                    authReady:true,  
                    user: user
                })
            }
            else
            {
                this.setState({
                    isLoggedIn: false,
                    authReady:true,
                    user: null
                })
            }

          })
      }

      render(){
          return(
            <AuthContext.Provider
            value={{
              isLoggedIn:this.state.isLoggedIn,
              user:this.state.user,
              authReady:this.state.authReady
            }}
          >
            {this.props.children}
          </AuthContext.Provider>
          )
      }
}
export default AuthState;
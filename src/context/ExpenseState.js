import React from 'react';
import { watchExpenses, watchUserChanges} from '../services/watcher'
import ExpenseContext from './ExpenseContext';

class ExpenseState extends React.Component{
    state = {
        expenses:[],
        loaded:false
      }
componentDidMount(){
   watchUserChanges((user)=>{
        if(user && !this.isSetup) {
          this.isSetup = true;

          watchExpenses((expenses)=>{ //esta state cambiara cuando se modifique los datos en firebase
            this.setState({ expenses, loaded:true})
            
          });
        }
    });
}

      render(){
          return(
            <ExpenseContext.Provider value={this.state }>
              {this.props.children}
            </ExpenseContext.Provider>
          )
      }
}
export default ExpenseState;
import React,{useState, useEffect, useContext} from 'react';
import moment from 'moment';
import ExpenseContext from '../../context/ExpenseContext';
import Layout from '../../components/layout'
import styles from './style.module.scss'
import Expense from '../expense/Expense'
import Filter from '../../components/filter/filter'

function Dashboard()
{
    const context = useContext(ExpenseContext); //usando ReactContext
    const [ expenseId, setExpenseId ] = useState(null);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ toShowExpenses, settoShowExpenses ] = useState([]);

    useEffect(
        () => 
        {
        console.log('componentDidMount - hook equivalente');
        settoShowExpenses(context.expenses);
    }, []);  


    const selectedexpense = context.expenses.find(e => e.id === expenseId)

    //filtering
    let filterExpenses = (expenseFilter) => {
        console.log("expensefilter: " + expenseFilter);
        let filteredExpenses = context.expenses
        filteredExpenses = filteredExpenses.filter((exp) => {
          return exp.type.toLowerCase().includes(expenseFilter.toLowerCase()) === true
        })
        settoShowExpenses(filteredExpenses);
      }
    
        return(
        
            <Layout>     
                <div className={styles.container}>
                    <Filter onChange={filterExpenses}></Filter>

                    <div className={styles.buttonFloat}
                        onClick={()=> {
                            setExpenseId(null)
                            setIsOpen(true)
                    }}>
                        +
                    </div>
    
                    <table className={styles.table} cellSpacing="0">
                        <thead>
                            <tr className={styles.tableHeader}>
                                <th>Fecha</th>
                                <th>Tipo</th>
                                <th>Cantidad</th>
                                <th>Descripcion</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                toShowExpenses.map(row => { 
                                    return ( 
                                        <tr key={row.id} 
                                            className={styles.tableRow}
                                            onClick={()=> {
                                                setExpenseId(row.id)
                                                setIsOpen(true)
                                            }}>
                                            <td>{moment(row.date).format('DD MMM YYYY  hh:mm a')}</td>
                                            <td>{row.type}</td>
                                            <td>{row.amount}</td>
                                            <td>{row.description}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
               
               { //MODAL
                   isOpen && 
                   <Expense 
                     expense={selectedexpense}
                     onClose={()=> {
                         setExpenseId(null)
                         setIsOpen(false);
                     }}>
    
                   </Expense>
               }
            </Layout>
      )  
}

export default Dashboard
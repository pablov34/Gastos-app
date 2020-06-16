import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.scss'
import Button from '../../components/button/Button'
import TextField from '../../components/textField/TextField'
import Select from '../../components/select/select'
import FormControl from '../../components/formControl'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import {createExpense, deleteExpense, updateExpense} from '../../services/api'

function Expense(props)
{
    const { expense, onClose } = props; //props
    const [ showReload, setShowReload ] = useState(false);

    const formSchema = yup.object().shape({
        type:yup.string().min(1).required(),
        amount:yup.number().required(),
        description:yup.string()
    })

    let _onSubmit = async (values, formikBag)=>{

        if(expense.id)
        {
             await updateExpense(expense.id, values)
        }else{
            await createExpense(values)
        }
        formikBag.setSubmitting(false);
        onClose(); //prop desde componente padre
    }

    let _onCancel = ()=>{
        onClose(); //prop desde componente padre
    }

    let _onDelete = async ()=>{
            await deleteExpense(expense.id)
            onClose(); //prop desde componente padre
    }

    const node = (
       <div className={styles.modalContainer}>
           <div className={styles.modalBox}>
               <h1>Gasto</h1>
                <Formik
                   initialValues={{
                    type:expense.type || '',
                    amount:expense.amount || '',
                    description:expense.description || ''
                   }}
                   validationSchema={formSchema}
                   onSubmit={_onSubmit}
                   render={(props) =>{
                       const { values, handleChange,handleBlur,handleSubmit,isSubmitting,
                               isValid} = props;
                       return(
                                <>
                                <FormControl type="row">
                                    <Select 
                                    options = {[
                                            {
                                                label:'Casa',
                                                value:'Casa'
                                            },
                                            {
                                                label:'Ahorro',
                                                value:'Ahorro'
                                            },
                                            {
                                                label:'Transporte',
                                                value:'Transporte'
                                            }
                                        ]} 
                                        value = {values.type}
                                        onChange={handleChange('type')}
                                        onBlur={handleBlur('type')}
                                        placeholder="Tipo Gasto"></Select>

                                        <ErrorMessage name="type"></ErrorMessage>
                                </FormControl>
                                <FormControl type="row">
                                    <TextField
                                       value={values.amount}
                                       onChange={handleChange('amount')}
                                        onBlur={handleBlur('amount')}
                                        placeholder="Cantidad"
                                        >
                                    </TextField>

                                    <ErrorMessage name="amount"></ErrorMessage>
                                </FormControl>
                                <FormControl type="row">
                                    <TextField
                                       value={values.description}
                                       onChange={handleChange('description')}
                                        onBlur={handleBlur('description')}
                                        placeholder="Descripcion"
                                        >
                                    </TextField>

                                    <ErrorMessage name="description"></ErrorMessage>
                                </FormControl>
                                <FormControl type="block">
                                   <Button 
                                            onClick={handleSubmit}
                                            label={expense.id ? "Actualizar" : "Crear"}
                                            disabled={isSubmitting || !isValid}
                                    /> 
                                    <Button 
                                            type="outline"
                                            onClick={_onCancel}
                                            label="Cancelar"
                                            disabled={false}
                                    />  
                                     {expense.id ?
                                         <Button 
                                            type="warning"
                                            onClick={_onDelete}
                                            label="Borrar"
                                            disabled={false}
                                        /> : '' 
                                     }
                                </FormControl>
                                {showReload &&
                                    <FormControl type="row">
                                        <div>Este item fue modificado.
                                            Click aqui para actualizar.
                                        </div>
                                    </FormControl>
                                }
                              </>
                       )
                   }}
                   >
                  
                </Formik>
           </div>
       </div>
    );

    return ReactDOM.createPortal(node, document.getElementById('modal-root'))
}

Expense.defaultProps = {
    expense: {}
}

export default Expense
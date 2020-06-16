import React from 'react';
import styles from './style.module.scss'

function FormControl(props)
{
    const {type, children} = props
    let className;

    /*para controlar el estilo de los componentes del formulario
    BLOCK permite colocar componentes uno al lado del otro
    ROW un componente por fila
    EJEMPLO:
     <FormControl type="block">
                    <TextField></TextField>
                    <TextField></TextField>
               </FormControl>
    */
    
    if(type==='row')
    {
        className = styles.formControlRow;
    }
    else if(type=== 'block')
    {
        className = styles.formControlBlock
    }
    return(
      <div className={className}>
          {children}
      </div>
    )
}

export default FormControl
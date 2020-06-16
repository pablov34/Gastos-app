import React, {useState} from 'react';
import styles from './style.module.scss'
import TextField from '../textField/TextField'

function Select(props)
{
    /*SELECT PERSONALIZADO*/
    const {options, 
           value,
           onChange,
           onBlur,
           placeholder
        } = props

    const [ isOpen, setIsOpen ] = useState(false);

    return(
       <div className={styles.option}>
           <TextField
               placeholder={placeholder}
               type="text"
               value={value}
               onChange={()=>{}}
               onClick={()=> setIsOpen(!isOpen)}
               >

           </TextField>
           {isOpen && 
                <ul className= {styles.optionList}>
                    {options.map(option=>
                        <li 
                        key={option.value} 
                        className={styles.optionListItem}
                        onClick={(e)=>{
                            onChange(option.value)
                            onBlur(e)
                            setIsOpen(false);
                        }}>
                        {option.label} 
                        </li>
                    )}
                </ul>
            }
       </div>
    )
}


export default Select
import React,{useState, useEffect, useContext} from 'react';
import styles from './style.module.scss'

function TextField(props)
{
    const { ...rest} = props;


return(
    <input className={styles.input}  {...rest}>
       
    </input>
)

}

export default TextField
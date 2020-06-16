import React, {useState} from 'react';
import styles from './style.module.scss'

function Filter(props)
{
    //https://medium.com/@AndrewBonner2/filter-results-with-react-f746dc7984c
    const [filter, setFilter ] = useState('')

    let _handleChange = (e) => {
        
        setFilter(e.target.value)       
        props.onChange(e.target.value)
    }

    return(
        <div>
        <label htmlFor="filter">Filter by Tipo: </label>
        <input type="text" id="filter" 
          value={filter} 
          onChange={_handleChange}/>
       </div>
    )
}

export default Filter
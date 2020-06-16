import React,{useState, useEffect, useContext} from 'react';
import styles from './style.module.scss'
import Footer from '../footer/footer'

function Layout(props)
{
    const {children} = props
    /*la idea basica de layout es encapsular a todos los componentes hijos 
    de la pagina 
    De este manera tener los componentes comunes en un solo lugar*/
    return(
        <>
        <div className={styles.appBar}>
        <span>Gastos App</span>
        </div>
        <div className={styles.content}>
         {children}
        </div>
        <Footer></Footer>
        </>
    )
}

export default Layout
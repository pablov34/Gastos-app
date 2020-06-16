import React from 'react'
import styles from './style.module.scss'

function Footer()
{
    return(
       <footer className={styles.footer}>       
        <div className={styles.address}>
          <a href="mailto:pablorvaccari@gmail.com">pablorvaccari@gmail.com</a>
          <br/>Ciudad de Pilar, Cordoba,Argentina
          <br/>+54 11 26411016
        </div>
        <div className={styles.imglkn}>
            <a href="https://www.linkedin.com/in/pablo-vaccari-609a5271" target="_blank">
                <img src="https://qph.fs.quoracdn.net/main-qimg-4631cf46da37c1ff2fe676f86c4b46de.webp" className={styles.imglinkein}>
                </img>    
            </a>
        </div>
      </footer>
    )
}

export default Footer;
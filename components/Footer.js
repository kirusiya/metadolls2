import React from "react"
import styles from '../styles/Footer.module.css'
 const Footer = () => {
    return(<div className={styles.footerContainer}>
        <img className={styles.logoFooter} src="logo2.png"></img>
        
        <div className={styles.rigths}>©2021 MetaDolls. All rights reserved.</div>
       
    </div>)
}
export default Footer
/* 
.container {
    max-width: 1160px;
    padding: 0 80px;
} */
import React from 'react'
import styles from '../styles/ManualParallax.module.css'

function ManualParallax() {
    return (
        <div className={styles.metadollContainer}>
           
           <div className={styles.bgimg}>
         
               <p className={styles.metaText}>"All people look at me like "the perfect Doll"
and I want more than that..."
- MetaDoll 0001</p>
               <div className={styles.caption}>
                <span className={styles.border}>Join Now</span>
               </div>
         
               </div>
           {/* <div className={styles.section}>
               <h3 className={styles.section}>

               </h3>
                <p>Looremm ipsum</p>
           </div> */}
        </div>
    )
}

export default ManualParallax

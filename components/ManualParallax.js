import React from 'react'
import styles from '../styles/ManualParallax.module.css'

function ManualParallax() {
    return (
        <div className={styles.metadollContainer}>
          
           <div className={styles.bgimg}>
         
               {/* <p className={styles.metaText}>"People look at me like "the perfect Doll" and I want much more than that..." - MetaDoll 0001
</p> */}
{/* 
<button className={styles.glowOnHover} type="button">Join The Community</button>  */}
               <div className={styles.caption}>
                   <h1>First Tattoo Shop<br/> on the Metaverse al home.</h1>
               <button onClick={()=>window.open("https://discord.com/invite/fMhpdrKRDG")} className={styles.glowOnHover} type="button">Join Now</button> 
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

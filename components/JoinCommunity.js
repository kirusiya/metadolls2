import React from "react"
import styles from '../styles/JoinCommunity.module.css'
 const JoinCommunity = () => {
    return(
        <div className={styles.joinCommunityContainer} >
            <img className={styles.imgJoinCommunity} src={'Banner-Join-Our-Discord-Website-min.png'} />
   <button onClick={()=>{window.open("https://discord.com/invite/fMhpdrKRDG")}} className={styles.glowOnHover} type="button">Join Our Discord</button> 
       
    </div>)
}
export default JoinCommunity
/* 
.container {
    max-width: 1160px;
    padding: 0 80px;
} */

/* Seguridad 


*/
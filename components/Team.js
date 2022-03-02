import React from 'react';
import styles from '../styles/Team.module.css'
const Team = ()  => {


      
  return (
  <div className={styles.teamContainer}>


      <h2 className={styles.titleTeam}>Team</h2>
      
  <div className={styles.gridCoiner}>
      
      <div className={styles.memberTeamInfo}>
      <img className={styles.circleImg} src='metadoll.jpeg'/>
      <div className={styles.descriptionContainer}>
      <p className={styles.description1}>Alejandro Rincón - Visual Artist </p>
      <p className={styles.description}>The leading artist of the team has been tattooing for over 7 years specializing in micro tattoos and 3D modelling combining passions to make MetaDolls a reality.

</p>
      <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',flex:1}}>
      <img   onClick={()=>{window.open("https://www.instagram.com/argongraphics/")}}style={{width:'30px',height:'auto',objectFit:'contain',padding:'2px'}} src='teamInstagram.png'/>
     
      <img  onClick={()=>{window.open("https://twitter.com/argongraphics")}} style={{width:'30px',height:'auto',objectFit:'contain',padding:'2px'}} src='teamTwitter.png'/>
           
           {/*  <img scr={'teamTwitter.png'} /> */}
      </div>
      </div>
      
      </div>
      <div className={styles.memberTeamInfo}>
      <img className={styles.circleImg} src='metadoll.jpeg'/>
      <div className={styles.descriptionContainer}>
      <p className={styles.description1}>Juan Esteban “Dino” Sierra - Business Developer/Marketing
</p>
<p className={styles.description}>Lead strategist for MetaDolls, has worked in crypto and investment banking. He’s currently focusing in the NFT field understanding how to bring value and utility through this technology to the community.
</p>
<div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',flex:1}}>
      <img  onClick={()=>{window.open("https://www.instagram.com/juanes.emprende/")}} style={{width:'30px',height:'auto',objectFit:'contain',padding:'2px'}} src='teamInstagram.png'/>
      <img  onClick={()=>{window.open("https://www.linkedin.com/in/juanesemprende/")}} style={{width:'30px',height:'auto',objectFit:'contain',padding:'2px'}} src='teamLinkdin.png'/>
      <img  onClick={()=>{window.open("https://twitter.com/juanesemprende")}} style={{width:'30px',height:'auto',objectFit:'contain',padding:'2px'}} src='teamTwitter.png'/>
           
           {/*  <img scr={'teamTwitter.png'} /> */}
      </div>
      </div>
      
      </div>
     

      <div className={styles.memberTeamInfo}>
      <img className={styles.circleImg} src='metadoll.jpeg'/>
      <div className={styles.descriptionContainer}>
      <p className={styles.description1}>Camilo Sardi - Chief of Operations
</p>
      <p className={styles.description}>COO and Cofounder of Maestrik, a leading startup in education for the latinamerican market. With his background in industrial engineering he brings the order and vision to be able to meet with our roadmap´s goals.
 </p>
      <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',flex:1}}>
     
      <img onClick={()=>{window.open("https://www.linkedin.com/in/camilo-sardi-827132134/")}} style={{width:'30px',height:'auto',objectFit:'contain',padding:'2px'}} src='teamLinkdin.png'/>
      
           
           {/*  <img scr={'teamTwitter.png'} /> */}
      </div>
      </div>
      
      </div>
      <div className={styles.memberTeamInfo}>
      
      
      </div>
      
    {/*   <div className={styles.memberTeamInfo}>
      <img className={styles.circleImg} src='metadoll.jpeg'/>
      <div className={styles.descriptionContainer}>
      <p className={styles.description}>Alejandro Herrada - CGI Designer</p>
      <p >Ah Studio Director with X years experience in the hyper realistic rendering field. He has worked in marketing campaigns for brands such as Nivea, Hatsu, Club Colombia and many more.  
</p>
      </div>
      
      </div> */}
      {/* <div className={styles.memberTeamInfo}>
      <img className={styles.circleImg} src='metadoll.jpeg'/>
      <div className={styles.descriptionContainer}>
      <p className={styles.description}>Lorem ipsum Lorem</p>
      <p >Lorem ipsum LoremLorem ipsum Lorem</p>
      </div>
      
      </div>
      <div className={styles.memberTeamInfo}>
      <img className={styles.circleImg} src='metadoll.jpeg'/>
      <div className={styles.descriptionContainer}>
      <p className={styles.description}>Lorem ipsum Lorem</p>
      <p >Lorem ipsum LoremLorem ipsum Lorem</p>
      </div>
      
      </div>       */}
  </div>
  </div>)
}

export default Team;

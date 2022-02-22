import React from 'react';
import styles from '../styles/Team.module.css'
const Team = ()  => {


      
  return (
  <div style={{backgroundColor:"#04091a",margin:' 0 40px'}}>


      <h2 className={styles.titleTeam}>Team</h2>
      
  <div className={styles.gridCoiner}>
      
      <div className={styles.memberTeamInfo}>
      <img className={styles.circleImg} src='metadoll.jpeg'/>
      <div className={styles.descriptionContainer}>
      <p className={styles.description1}>Alejandro Rincón - Visual Artist </p>
      <p className={styles.description}>The leading artist of the team has been tattooing for over 7 years specializing in micro tattoos while exploring different art mediums. He has dedicated the last years to 3D modeling and digital art combining passions to make Metadolls a reality. 
</p>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',flex:1}}>
      <img style={{width:'45px',height:'auto',objectFit:'contain'}} src='teamLinkdin.png'/>
           
           {/*  <img scr={'teamTwitter.png'} /> */}
      </div>
      </div>
      
      </div>
      <div className={styles.memberTeamInfo}>
      <img className={styles.circleImg} src='metadoll.jpeg'/>
      <div className={styles.descriptionContainer}>
      <p className={styles.description1}>Juan Esteban “Dino” Sierra - Business Developer/Marketing
</p>
<p className={styles.description}>Lead strategist for MetaDolls, has worked for over 5 years in the crypto world and investment banking. He has had the opportunity to participate in high tech startup accelerators as well as in the development of customer acquisition strategies for a variety of projects. He’s currently focusing in the NFT field understanding how to bring value and utility through this technology to the community. 
m</p>
      </div>
      
      </div>
      <div className={styles.memberTeamInfo}>
      <img className={styles.circleImg} src='metadoll.jpeg'/>
      <div className={styles.descriptionContainer}>
      <p className={styles.description1}>Alejandro Herrada - CGI Designer</p>
      <p className={styles.description}>Ah Studio Director with X years experience in the hyper realistic rendering field. He has worked in marketing campaigns for brands such as Nivea, Hatsu, Club Colombia and many more.  
</p>
      </div>
      
      </div>
      <div className={styles.memberTeamInfo}>
      <img className={styles.circleImg} src='metadoll.jpeg'/>
      <div className={styles.descriptionContainer}>
      <p className={styles.description1}>Juan “SebastianRevan” Ruiz - Lead Developer</p>
      <p className={styles.description}>With experience working in software projects with clients from sillicon valley, europe, and the middle east, Juan Ruiz brings the technical expertise to the team. Proficient in several languages and passionate about distributed systems, unix, cloud, open source software and math, Juan is in charge making sure we have the best in class tools so we can offer a best in class experience.</p>
      </div>
      
      </div>

      <div className={styles.memberTeamInfo}>
      <img className={styles.circleImg} src='metadoll.jpeg'/>
      <div className={styles.descriptionContainer}>
      <p className={styles.description1}>Camilo Sardi - Chief of Operations
</p>
      <p className={styles.description}>COO and Cofounder of Maestrik, a leading startup in education for the latinamerican market. With his background in industrial engineering he brings the order and vision to be able to meet with our roadmap´s goals. </p>
      </div>
      
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

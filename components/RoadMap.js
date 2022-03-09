import React, { useEffect, useState } from "react";
import styles from "../styles/RoadMap.module.css";
import AOS from "aos";
import { Background } from "react-parallax";
import GsapVideo from './GsapVideo'
const RoadMap = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    console.log("ajjajaajjm");
    console.log(e);
    e.preventDefault();
    console.log("Sending");
    let data = {
     
      email,
      
    };
    console.log(data);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    
  }, []);
  return (
    <div id="roadmap" className={styles.RoadMapContainer}>
     
      <div>
      <div className={styles.RoadMapSteps} data-aos="zoom-in" style={{position:'relative'}}>
        <h2 className={styles.RoadMapTitle}>ROADMAP</h2>
        <br/>
       {/*  <p className={styles.RoadMapIntro}>
        "Rebellion against the perfect blonde is inked on my skin and in the color of my hair." - MetaDoll 0003

        </p> */}
        <p className={styles.numerStyle}>1.0 Community Start</p>
        <ul>
          <li className={styles.descriptionStyle}>
            {" "}
            Weekly whitelist raffle
          </li>
          
        </ul>
       
      </div>
      <div className={styles.RoadMapSteps} data-aos="zoom-in">
        <p className={styles.numerStyle}>2.0 Presale (Max. 3 Per Wallet)</p>
        <ul>
          <li className={styles.descriptionStyle}> Minting TBA</li>
          <br></br>
         
        </ul>
        <p className={styles.descriptionStyle}></p>
      </div>
      <div className={styles.RoadMapSteps}  data-aos="zoom-in">
        <p className={styles.numerStyle}>2.1 (24h+) Public Sale </p>
        <ul>
          <li className={styles.descriptionStyle} >
            {" "}
            Date TBD {/* we will all be part of a team and we will create our own set
              of values and goals. */}

          </li>
         
        </ul>
        <p className={styles.descriptionStyle}></p>
      </div>
      <div className={styles.RoadMapSteps} data-aos="zoom-in">
        <p className={styles.numerStyle }  >3.0: MetaPets Airdrop </p>
        <ul>
          <li className={styles.descriptionStyle}  >
            {" "}
            With Metaverse Use.

          </li>
        </ul>
        <p className={styles.descriptionStyle}></p>
      </div>
      <div className={styles.RoadMapSteps} data-aos="zoom-in">
        <p className={styles.numerStyle}>4.0: Land Purchase for MetaTatto Shop
 </p>
        <ul>
          <li className={styles.descriptionStyle}>
            {" "}
            Design and Construction Start.
          </li>
        </ul>
        <p className={styles.descriptionStyle}></p>
      </div>
      <div className={styles.RoadMapSteps} data-aos="zoom-in">
        <p className={styles.numerStyle}>5.0: First Physical Version Delivered </p>
       
      </div>
      <div className={styles.RoadMapSteps2} data-aos="zoom-in">
        <p className={styles.numerStyle2}>6.0: Boutique for Physical MetaDoll Launch
 </p>
        <ul>
          <li className={styles.descriptionStyle2}>
            {" "}
            Boutique for real world hand made MetaDolls with real jewelry, tattoos, hair dye and accessories only accessible to NFT Holders.
          </li>
        </ul>
        <p className={styles.descriptionStyle}></p>
      </div>
      <div className={styles.RoadMapSteps} data-aos="zoom-in">
        <p className={styles.numerStyle}>7.0: MetaJewelry Pieces Airdrop
 </p>
        <ul>
          <li className={styles.descriptionStyle}>
            {" "}
            With Metaverse Use
          </li>
        </ul>
        <p className={styles.descriptionStyle}></p>
      </div>
      <div className={styles.RoadMapSteps2} data-aos="zoom-in">
        <p className={styles.numerStyle2}>8.0: Q3 2022: MetaTattoo Shop
 </p>
        <ul>
          <li className={styles.descriptionStyle2}>
            {" "}
            PFPs derivatives with tattoos and jewelry


          </li>
          <li className={styles.descriptionStyle2}>
            {" "}
            Revenue Share (60% of derivative cost goes to MetaDoll Holders)



          </li>
          <li className={styles.descriptionStyle2}>
            {" "}
            Boutique integration


          </li>
        </ul>
        <p className={styles.descriptionStyle}></p>
      </div>
      <div className={styles.RoadMapSteps} data-aos="zoom-in">
        <p className={styles.numerStyle}>9.0: Q3 2022: Evolved MetaDolls (TBD) 
 </p>
       
      </div>
      </div>
      <GsapVideo/>
     {/*  <div className={styles.metavid} >
      <GsapVideo/>
      </div> */}
    </div>
  );
};

export default RoadMap;


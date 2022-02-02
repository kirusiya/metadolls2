import React, { useEffect, useState } from "react";
import styles from "../styles/RoadMap.module.css";
import AOS from "aos";
import { Background } from "react-parallax";

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
    <section className={styles.RoadMapContainer}>
      <div className={styles.RoadMapSteps} data-aos="zoom-in">
        <h2 className={styles.RoadMapTitle}>RoadMap</h2>
        <p className={styles.RoadMapIntro}>
        "Rebellion against the perfect blonde is inked on my skin and in the color of my hair." - MetaDoll 0003

        </p>
        <p className={styles.numerStyle}>.01 Community Creation and Whitelist</p>
        <ul>
          <li className={styles.descriptionStyle}>
            {" "}
            1000 spots and elegible for 2 MetaDolls per wallet
          </li>
          <li className={styles.descriptionStyle}> We’ll be dropping Whitelist spots for our community across all social media and on our discord server weekly until we reach 500. After we reach 500, we will reveal the rest of whitelist spots the day before minting.
g</li>
        </ul>
       {/*  <p className={styles.descriptionStyle}>
          Lets run this together, follow the path to freedom
          <br />
          <br />
        </p>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className={styles.numerStyle}>Discord</p>
          <p className={styles.numerStyle}>Twitter</p>
          <p className={styles.numerStyle}>OpenSea</p>
        </div> */}
        {/* <form className={styles.main} onSubmit={(e)=>handleSubmit(e)}>
      
        <formgroup className={styles.inputGroup}>
       
          <input required  placeholder="Email " type="email" name="email" className={styles.input} 
          onChange={(e)=>{setEmail(e.target.value)}}
           />
        </formgroup>
       
        <input className={styles.numerStyle} style={{margin:'20px'}} type="submit"  value="Enter Whitelist"/>
        </form> */}
      </div>
      <div className={styles.RoadMapSteps} data-aos="zoom-in">
        <p className={styles.numerStyle}>.02 Main Drop</p>
        <ul>
          <li className={styles.descriptionStyle}> Minting TBA Mid-February</li>
          <li className={styles.descriptionStyle}> Reveal – TBA 
</li>
        </ul>
        <p className={styles.descriptionStyle}></p>
      </div>
      <div className={styles.RoadMapSteps} style={{backgroundColor:'rgb(1, 170, 170)'}} data-aos="zoom-in">
        <p className={styles.numerStyleSpecialCase}>.03 DAO </p>
        <ul>
          <li className={styles.descriptionStyleSpecialCase} >
            {" "}
            We’ll be building a DAO with all MetaDoll holders to develop our community shaped just as the community wants.
             We believe that these NFT projects should add value to the community not only through amazing art but also 
             through real world and metaverse experiences. we will all be part of a team and we will create our own set
              of values and goals.

          </li>
          <li className={styles.descriptionStyleSpecialCase}>
            {" "}
            We have a lot already prepared. And we will present options for development, given the success of the project itself.

          </li>{/*  */}
        </ul>
        <p className={styles.descriptionStyle}></p>
      </div>
      <div className={styles.RoadMapSteps}  style={{backgroundColor:'rgb(1, 170, 170)'}} data-aos="zoom-in">
        <p className={styles.numerStyleSpecialCase }  >.04 Real World </p>
        <ul>
          <li className={styles.descriptionStyleSpecialCase}  >
            {" "}
            Boutique for real world hand made MetaDolls with real jewelry, tattoos, hair dye and accessories only accessible to NFT Holders.

          </li>
        </ul>
        <p className={styles.descriptionStyle}></p>
      </div>
      <div className={styles.RoadMapSteps} data-aos="zoom-in">
        <p className={styles.numerStyle}>.05 Metaverse Tattoo Shop </p>
        <ul>
          <li className={styles.descriptionStyle}>
            {" "}
            We’ll be creating a tattoo shop on the metaverse were you can bring your NFT for us to give them a new tattoo as well as your MetaDolls.
          </li>
        </ul>
        <p className={styles.descriptionStyle}></p>
      </div>
      <div className={styles.RoadMapSteps} data-aos="zoom-in">
        <p className={styles.numerStyle}>.06 Evolving Dolls </p>
        <ul>
          <li className={styles.descriptionStyle}> Coming Soon.</li>
        </ul>
        <p className={styles.descriptionStyle}></p>
      </div>
    </section>
  );
};

export default RoadMap;

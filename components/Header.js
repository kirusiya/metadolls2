import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import twitter from "../public/twitter.png";
import discord from "../public/discord.png";
const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <h2 className={styles.metadollsTitle}>MetaDolls</h2>
      </div>
      <div className={styles.localLinksContainer}>
        <h5 className={styles.titleTextHeader}>About</h5>
        <h5 className={styles.titleTextHeader}>RoadMap</h5>
        <h5 className={styles.titleTextHeader}>FAQs</h5>
      </div>
      
      <div className={styles.communityContainer}>
        <div>
        <Image   alt="twitter logo" src={twitter} width={"30px"} height={30}/>
        </div>
     <div>
     <Image className={styles.imagecss}  alt="discord logo" src={discord} width={30} height={30}/>
     </div>
      
      

      </div>
      <div className={styles.discordButton}>Join to our Discord</div>
    </div>
  );
};

export default Header;
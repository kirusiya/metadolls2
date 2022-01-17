import React,{useEffect} from 'react'
import styles from '../styles/About.module.css'
import AOS from 'aos';
export const About = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <section className={styles.aboutContainer}>
            
            <div className={styles.projectDescriptionContainer}>
              <h2 className={styles.bigTitle}>About The</h2>
            <h2 className={styles.titles}>MetaDolls</h2><br/>
            <p className={styles.titles} data-aos="fade-right">MetaDolls are an NFT Collection Project based 
            on the Polygon network. It's comprised of 7000 randomly generated 3D hyper 
            realistic dolls with the possibility to get a phisical version.
            <br/><br/>It’s a proposal which combines pop culture, the nostalgic 
            “Doll” concept and the NFT technology to expose the body as the mix
             between all instances of culture and where 
            it’s possible to define our own identity and build our own language from there.
            
            </p>
            <p className={styles.titles} data-aos="fade-left"> 
            <br/>The **MetaDolls** make up a metaverse of artistic
             expressions through their changes in their body. Face Tatts, Nose rings,
              golden chains, meme tatts on their shoulders, mohawks are examples of ways
               **MetaDolls** decide to express themselves.
            <br/><br/>Not only would you be getting an NFT but by holding 
            our MetaDolls you would be elegible to get a phisical version
             of your Doll later on through
             an exclusive digital boutique only accesible to wallets holding the NFT.</p>
            </div>
           {/*  <div className={styles.randomImageContainer}>
            <img className={styles.imageSection} src='metadoll.jpeg'/>
            </div> */}
            <div>
            <img className={styles.imageSection} src='metadoll.jpeg'/>
            </div>
             {/*  <div className={styles.randomImagePicker}>
                <img className={styles.imageSection}>  </img>
            </div> */}
        </section>
    )
}

import React,{useState} from 'react'
import styles from '../styles/FAQ.module.css'
const FAQ = () => {
    const [toggleFAQ, setToggleFAQ] = useState([false,false,false,false,false,false,false]);
    /*  onClick={()=>{setToggleMenu(!toggleMenu) */
        const toggleArray = (index) => {
            let newState = [...toggleFAQ];
            newState[index] = !newState[index];
            setToggleFAQ(newState)
        }
    return (
        <section id="faqs" className={styles.RoadMapContainer}>
           
            
            <div className={styles.RoadMapSteps} data-aos="zoom-in"  onClick={()=>{toggleArray(0)}}>
            <h2 className={styles.RoadMapTitle}>FAQ</h2>
                <p className={styles.numerStyle}>How was the project born?</p>
                <p  className={toggleFAQ[0] ? styles.descriptionStyleactive : styles.descriptionStyle}>This project is created by colombian artist Alejandro Rincón, tattoo artist for over 7 years. It explores the link and effect that tattoos have in the construction of our identity nowadays.
The body is represented by the Dolls, iconic objects fabricated in mass and registered in series, which results comparable to the characteristics of human condition in today's world. Additionally the tattoo is done over the inorganic base as an artistic expression and a form of customization, which offers a way of identification or differentiation.
<br/><br/>MetaDolls brings together the concepts of body, brand and tattoo, through a research-creation process, which explores the relationship between them and their influence on the significant construction of bodies in contemporary society. At the same time, it models the tattoo as an artistic practice that seeks to transform the individual.
<br/><br/>Currently, cultural models and patterns have been transforming and adopting new ways of dressing or looking; artistic body modifications such as tattoos and piercings are part of these changes and therefore have aroused social interest; over time they have ceased to be stigmatized and their use has become standarized, framing a series of cultural patterns that have also undergone modifications and variations today, taking new forms in modern culture, countercultures, pop culture and now cryptoculture.
<br/><br/>In this way, the MetaDolls are that proposal that violates the traditional models and patterns of the body and beauty. At the same time, they are an exploration of new identities and artistic expressions that are born from the need to represent the human being. When the body changes, it communicates differently, and this type of communication also transforms the very language of culture.

</p>
              
            </div>

          
            <div className={styles.RoadMapSteps} data-aos="zoom-in" onClick={()=>{toggleArray(2)}}>
                <p className={styles.numerStyle}>Mint Price? </p>
                <p  className={toggleFAQ[2] ? styles.descriptionStyleactive : styles.descriptionStyle}>TBA.</p>
              
            </div>
            <div className={styles.RoadMapSteps} data-aos="zoom-in" onClick={()=>{toggleArray(3)}}>
                <p className={styles.numerStyle}>Royalties?</p>
                <p  className={toggleFAQ[3] ? styles.descriptionStyleactive : styles.descriptionStyle}>5% (2% for the community wallet)
</p>
            </div>
            <div className={styles.RoadMapSteps} data-aos="zoom-in" onClick={()=>{toggleArray(4)}}>
                <p className={styles.numerStyle}>Blockchain?</p>
                <p  className={toggleFAQ[4] ? styles.descriptionStyleactive : styles.descriptionStyle}>Ethereum.</p>
            </div>
            <div className={styles.RoadMapSteps} data-aos="zoom-in" onClick={()=>{toggleArray(5)}}>
                <p className={styles.numerStyle}>Launch Date?</p>
                <p  className={toggleFAQ[5] ? styles.descriptionStyleactive : styles.descriptionStyle}>TBD. </p>
            </div>
            <div className={styles.RoadMapSteps} data-aos="zoom-in" onClick={()=>{toggleArray(6)}}>
                <p className={styles.numerStyle}>Physical Doll?</p>
                <p  className={toggleFAQ[6] ? styles.descriptionStyleactive : styles.descriptionStyle}>MetaDolls is a project created to foster the value of both real life experiences as well as metaverse experiences. MetaDoll holders will be granted exclusive access to a boutique were they can connect their wallet to verify NFT ownership and then will be able to buy a physical version of their NFT. Hand made by our Lead Artist and his team. It will have gold-plated 3D printed accessories as well as piercings and real tattoos.</p>
            </div>
            <div className={styles.RoadMapSteps} data-aos="zoom-in" onClick={()=>{toggleArray(7)}}>
                <p className={styles.numerStyle}>Meta Tattoo Shop</p>
                <p  className={toggleFAQ[7] ? styles.descriptionStyleactive : styles.descriptionStyle}>They project will purchase land on the metaverse (either The SandBox or The Otherside) and create a Tattoo Shop where MetaDolls will be making derivatives from other PFPs. This Derivatives will be hand crafted, minted and sent to client for around 0.05 ETH (TBD). This income will be split among the team and MetaDolls holders.</p>
            </div>
           

            
           
        </section>
    )
}

export default FAQ

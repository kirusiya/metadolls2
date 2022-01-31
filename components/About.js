import React,{useEffect} from 'react'
import styles from '../styles/About.module.css'
import AOS from 'aos'

/* 
import AwesomeSlider from 'react-awesome-slider';

import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css?raw";

const AutoplaySlider = withAutoplay(AwesomeSlider); */

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
    return (
        <section className={styles.aboutContainer}>
         {/*  */}
            <div className={styles.projectDescriptionContainer}>
              <h2 className={styles.bigTitle}  >About The</h2>
            <h2 className={styles.titles} style={{fontWeight:'bold'}}>METADOLLS</h2><br/>
            <p className={styles.titles} data-aos="fade-right">MetaDolls is an NFT Collection Project based 
            on the Polygon network. It's made up of 7000 randomly generated 3D hyper 
            realistic dolls with the possibility to get a phisical version.
            <br/><br/>It’s a proposal which combines pop culture, the nostalgic “Doll” concept
             and the NFT technology to expose the body as the  blend among all instances of 
             culture where it is possible to set our own identity and to  build our own language from there.

            
            </p>
            <div style={{display:'flex',width:'100%', justifyContent:'space-between',alignItems:'center',}}>
            <p className={styles.bigTitle} > Join now</p>
            <p className={styles.bigTitle} > Discord</p>
            </div>
           
            <p className={styles.titles} data-aos="fade-right"> 
            <br/>The MetaDolls have built a metaverse of artistic expressions through the changes in 
            their body. Face Tatts, Nose rings, golden chains, meme tatts on their shoulders,
             mohawks are examples of ways how MetaDolls have decided to express themselves.
            <br/><br/>Not only would you be getting an NFT but by owning our MetaDolls you would
             be eligible to get a physical version of your Doll later on through an exclusive digital
              boutique only accessible to those wallets holding an NFT. 
</p>
             <p className={styles.bigTitle} style={{textAlign:'center'}} > !We are on the Whitelist!</p>
            </div>
          
           {/*  <div className={styles.randomImageContainer}> */}
              {/* ZW1w */}
            
    {/* </div> */}
            {/* <div className={styles.randomImageContainer}>
           
            </div> */}
            {/*  <AutoplaySlider
            
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={500}
  >
    <div data-src="metadoll.jpeg" />
    <div data-src="Metadoll-02.jpg" />
    <div data-src="weth.png" />
  </AutoplaySlider>
            </div>
           {/*  <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider> */}
            {/* <div className={styles.randomImageContainer}>
           
            </div> */}
            {/*  <AutoplaySlider
            
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={500}
  >
    <div data-src="metadoll.jpeg" />
    <div data-src="Metadoll-02.jpg" />
    <div data-src="weth.png" />
  </AutoplaySlider> */}

            {/*  <img data-aos="fade-up" className={styles.imageSection} src={'metadoll.jpeg'}/>
            
             {/*  <div className={styles.randomImagePicker}>
                <img className={styles.imageSection}>  </img>
            </div> */}
        </section>
    )
}

export default About

/* camilomanriquec@gmail.com */
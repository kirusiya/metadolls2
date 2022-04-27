import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

import styles from "../styles/Home.module.css";
import glitchStyle from "../styles/Glitch.module.scss";
import Header from "../components/Header";

import Top from "../components/Top";
import Nabvar from "../components/Nabvar";

import axios from "axios";

import ManualParallax from "../components/ManualParallax";
import About from "../components/About";
import SimpleImageSlider from "react-simple-image-slider";

import Script from "next/script";

import JoinCommunity from "../components/JoinCommunity";
const images = [
  { url: "Metadoll-02.jpg" },
  { url: "metadoll.jpeg" },
  { url: "metadoll.jpeg" },
  { url: "Metadoll-02.jpg" },
  { url: "metadoll.jpeg" },
  { url: "Metadoll-02.jpg" },
  { url: "metadoll.jpeg" },
];


import FAQ from "../components/FAQ";
import FormatEmail from "../components/FormatEmail";
import Team from "../components/Team";
import Footer from "../components/Footer";
import NavBarv1 from "../components/NavBarv1";
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
import 'aos/dist/aos.css';
import ImageSlider from "../components/ImageSlider";
import RoadMap from "../components/RoadMap";
import { IMAGES, VIDEOS, LARGE_IMAGES, tattosDesign } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";


/* const ImageSlider = dynamic(() => import("../components/ImageSlider")); */
/* const RoadMap = dynamic(() => import("../components/RoadMap")); */

export default function Prelauch({ posts }) {
  
  const boxRef = useRef();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    gsap.to(boxRef.current, {
     
    });
  });

  return (
    <div className={styles.container}>
      <Script
        strategy="afterInteractive"
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
      ></Script>
      <Head>
      <title>MetaDolls NFT :// First Tattoo Shop on the Metaverse</title>
      <meta name="description" content="Rebellion against the perfect blonde is inked on my skin and in the color of my hair. - MetaDoll" />
	  
    	<link rel="icon" type="image/x-icon" href="favicon.png" />    
        
	  	<meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@metadollsnft" />
      <meta name="twitter:title" content="MetaDolls NFT :// First Tattoo Shop on the Metaverse" />
      <meta name="twitter:description" content="Rebellion against the perfect blonde is inked on my skin and in the color of my hair. - MetaDoll" />
      <meta name="twitter:image" content="https://metadollsnft.com/share.png" />
      <meta property="og:title" content="MetaDolls NFT :// First Tattoo Shop on the Metaverse" />
      <meta property="og:description" content="Rebellion against the perfect blonde is inked on my skin and in the color of my hair. - MetaDoll" />
      <meta property="og:image" content="https://metadollsnft.com/share.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metadollsnft.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&family=Redressed&family=Ubuntu:wght@300&display=swap" rel="stylesheet"></link>
       {/*  <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        /> */}
      </Head>

      {loading ? (
        <div
          ref={boxRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
           <img 
            src={"./logo2.png"}
            style={{ width: "50%", height: "auto", maxWidth:'400px'}}
          />
         
        </div>
      ) : (
        <>
          {/* <NavBarv1/> */}
         
          <Nabvar />

          <ManualParallax />
          <div className={styles.bigContainer}>
            <div
            
              style={{
                position: "relative",
                top: "0px",
                left: "0px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                margin:'20px'
              }}
            >
               <img 
                src={tattosDesign[Math.floor(Math.random() * 38)].src}
                style={{ width: '50px', height:'50px' }}
              />
              
             
              
               <img 
               src={tattosDesign[Math.floor(Math.random() * 38)].src}
               style={{ width: '50px', height:'50px' }}
              />
               <img
                src={tattosDesign[Math.floor(Math.random() * 38)].src}
                style={{ width: '50px', height:'50px' }}
              />
               <img
               src={tattosDesign[Math.floor(Math.random() * 38)].src}
               style={{ width: '50px', height:'50px' }}
              />
               <img 
               src={tattosDesign[Math.floor(Math.random() * 38)].src}
               style={{ width: '50px', height:'50px' }}
              />
               <img 
               src={tattosDesign[Math.floor(Math.random() * 38)].src}
               style={{ width: '50px', height:'50px' }}
              />
               <img
                src={tattosDesign[Math.floor(Math.random() * 38)].src}
                style={{ width: '50px', height:'50px' }}
              />
               <img 
                src={tattosDesign[Math.floor(Math.random() * 38)].src}
                style={{ width: '50px', height:'50px' }}
              />
               <img 
                src={tattosDesign[Math.floor(Math.random() * 38)].src}
                style={{ width: '50px', height:'50px' }}
              />
               <img 
                src={tattosDesign[Math.floor(Math.random() * 38)].src}
                style={{ width: '50px', height:'50px' }}
              />
            </div>

            <div className={styles.caption2}>
         
              <p className={[glitchStyle.glitch]} data-glitch='"People look at me like im "the perfect Doll" and I want to be more
                than that ..." - MetaDoll 0001'>"People look at me like im "the perfect Doll" and I want to be more
                than that ..." - MetaDoll 0001
              </p>
            
            </div>
            <div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                left: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "-670px",
                margin:'40px'
              }}
             
              data-aos="zoom-in"
             
            >
              <div >
                 <img className={styles.hideElement}  src={"/tfile/Tattoos/11.png"} style={{ width: "5%",margin:'10px' }} />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/alien copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/alwaysbored copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%" ,margin:'10px'}}
                />
              </div>
            </div>
            <div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                right: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "-600px",
                margin:'40px'
            
              }}
              data-aos="zoom-in"
            >
              <div>
                 <img className={styles.hideElement}  src={"/tfile/Tattoos/11.png"} style={{ width: "5%" }} />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/69 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/666 copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/acab copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/alien copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/alwaysbored copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%" ,margin:'10px'}}
                />
              </div>
            </div>
            {/*   <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,left:'50%'}}>
   <Rotary   />
  </div>
  <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,right:'50%'}}>
  <Rotary  />
  </div> */}
  
            <About />
            <div className={styles.caption3}>
           {/*  <a href="#" className={glitchStyle.glitch} data-glitch="Explore">Explore</a> */}
              <p className={[glitchStyle.glitch]} data-glitch='"I want to be the unexpected, stereotypes will never define me again!" - MetaDoll 0002'>"I want to be the unexpected, stereotypes will never define me again!" - MetaDoll 0002
              </p>
              {/* <span
                onClick={() =>
                  window.open("https://discord.com/invite/fMhpdrKRDG")
                }
                className={styles.border}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                Join Now
              </span> */}
            </div>
            <ImageSlider images={IMAGES} slidesToShow={3} />
            {/* <div style={{ padding: "2.5rem 0" }}>
              <ImageSlider images={IMAGES} slidesToShow={3} />
            </div> */}
            {/*   <ImageSlider images={LARGE_IMAGES} />
             */}
            <div style={{ marginBottom: "200px" }} />

            {/* <div className={styles.container}>
    <ImageSlider images={IMAGES} slidesToShow={5} />
  </div>
  <div className={styles.container}>
    <ImageSlider images={VIDEOS} />
  </div>
  <div className={styles.container}>
    <ImageSlider images={LARGE_IMAGES} />
  </div> */}

            {/*   <div  style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,left:'50%'}}>
  <Rotary   />
  </div>
  <div  style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,right:'50%'}}>
  <Rotary   />
  </div> */}
 {/* <div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                left: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "-670px",
                
              }}
              data-aos="zoom-in"
            >
              <div >
                 <img className={styles.hideElement}  src={"/tfile/Tattoos/boredape copia.png"} style={{ width: "5%",margin:'10px' }} />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/brass copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/badkid copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/broken copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/btc copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/cat_gif1 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/chaos copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/chill copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/chillpill copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/cigbox copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
              </div>
            </div>
            <div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                right: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "-570px",
                
              }}
              data-aos="zoom-in"
            >
              <div>
               <img className={styles.hideElement}  src={"/tfile/Tattoos/boredape copia.png"} style={{ width: "5%",margin:'10px' }} />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/brass copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/badkid copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/broken copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/btc copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/cat_gif1 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/chaos copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/chill copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/chillpill copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/cigbox copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
              </div>
            </div> */}
   <div className={styles.caption4}>
           {/*  <a href="#" className={glitchStyle.glitch} data-glitch="Explore">Explore</a> */}
              <p className={[glitchStyle.glitch]} data-glitch='"I can be anything you want for just 0.125 ETH" - MetaDoll 4999'>"I can be anything you want for just 0.125 ETH" - MetaDoll 4999
              </p>
              {/* <span
                onClick={() =>
                  window.open("https://discord.com/invite/fMhpdrKRDG")
                }
                className={styles.border}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                Join Now
              </span> */}
            </div>
            <RoadMap />
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <video className={styles.videoMobile}  width="400" controls>
  <source src="metavid.mp4" type="video/mp4"/>
  
</video>
            </div>
            {/* <div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                left: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "300px",
                
              }}
              data-aos="zoom-in"
            >
              <div >
                 <img className={styles.hideElement}  src={"/tfile/Tattoos/baby1 copia.png"} style={{ width: "5%",margin:'10px' }} />
                 <img className={styles.hideElement} 
                  src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/badkid copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/bandaid copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                  src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%",margin:'10px' }}
                />
                 
              </div>
            </div>
            <div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                right: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "400px",
                
              }}
              data-aos="zoom-in"
            >
              <div>
               <img className={styles.hideElement}  src={"/tfile/Tattoos/baby1 copia.png"} style={{ width: "5%",margin:'10px' }} />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/badday copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/balance copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/BarCode copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
               
              </div>
            </div> */}
          
            <Team />
          
           
            {/* <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,left:'50%'}}>
<Rotary   />
  </div>
  <div  style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,right:'50%'}}>
<Rotary   />
  </div> */}
<div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                left: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "-480px",
                
              }}
              data-aos="zoom-in"
            >
              <div >
                 <img className={styles.hideElement}  src={"/tfile/Tattoos/11.png"} style={{ width: "5%",margin:'10px' }} />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/69 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/666 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/721 copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                  src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/adventure copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                 
              </div>
            </div>
            <div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                right: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "-400px",
                
              }}
              data-aos="zoom-in"
            >
              <div>
                 <img className={styles.hideElement}  src={"/tfile/Tattoos/11.png"} style={{ width: "5%" }} />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%",margin:'10px' }}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/365days copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/666 copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                  src={"/tfile/Tattoos/acab copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 <img className={styles.hideElement} 
                   src={tattosDesign[Math.floor(Math.random() * 38)].src}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                 
              </div>
            </div>
            <FAQ />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/*   <div   style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,left:'50%'}}>
   <Rotary   />
  </div>
  <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,right:'50%'}}>
   <Rotary   />
  </div> */}

           
            {/* <Rotary/> */}
          </div>
         {/*  <ManualParallax /> */}
          <JoinCommunity />
           
           <Footer />

          {/*   <div style={{position:'relative', left:'300px'}}>
  
  </div>
  
  
  <Rotary/> */}
          {/* 

  

 
  <div styles={{
    padding:'10%',
backgroundColor:'#01030d'
}}>

  </div>
  
 
  
  <div className={styles.titleContainer}>
  <h2 className={styles.titleTeam}>Team</h2>
  </div>
  
  
  <Footer/> */}
        </>
    )} 
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const onLine = {
    x: 1222,
    y: 12221,
    name: "name",
    likes: ["nft", "yellow-news"],
    email: "carlos.gs.andres@gmail.com",
  };
  /*  const res = await fetch('https://api.opensea.io/api/v1/assets?token_ids=27388&token_ids=13856&asset_contract_address=0x60e4d786628fea6478f785a6d7e704777c86a7c6&order_direction=asc&offset=0&limit=20', {method:'GET'}) */
  const posts = [];

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
/*          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
<link href="https://fonts.googleapis.com/css2?family=Orbitron" rel="stylesheet"></link>

        <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script> */

/* 
         https://www.instagram.com/metadollsnft/ 
        https://discord.com/invite/fMhpdrKRDG
        Top Link twitter discord
        Adding document fix 
        Video Player 
        discord.gg/fMhpdrKRDG
        '.4 real wolrd
        */

/* https://greensock.com/forums/topic/14206-full-screen-a-div/ */

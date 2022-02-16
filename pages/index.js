import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

import styles from "../styles/Home.module.css";
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

/* import ImageSlider from "../components/ImageSlider"; */
import { IMAGES, VIDEOS, LARGE_IMAGES } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* import Rotary from '../components/Rotary' */
import useInView from "react-cool-inview";
const Rotary = dynamic(() => import("../components/Rotary"));
const ImageSlider = dynamic(() => import("../components/ImageSlider"));
const RoadMap = dynamic(() => import("../components/RoadMap"));

export default function Home({ posts }) {
  const { observe, unobserve, inView, scrollDirection, entry } = useInView();
  const boxRef = useRef();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    gsap.to(boxRef.current, {
      rotation: "+=360",
    });
  });

  return (
    <div className={styles.container}>
      <Script
        strategy="afterInteractive"
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
      ></Script>
      <Head>
        <title>Metadolls NFT's</title>
        <meta name="description" content="Metadolls NFT's" />
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Head>

      {loading ? (
        <div
          ref={boxRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "800px",
            width: "100%",
          }}
        >
          <img
            src={"./logo2.png"}
            style={{ width: "80%", height: "auto", marginTop: "25%" }}
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
                top: "-17.7px",
                left: "0px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src={"/tfile/Tattoos/11.png"} style={{ width: "5%" }} />
              <img
                src={"/tfile/Tattoos/69 copia.png"}
                style={{ width: "5%" }}
              />
              <img
                src={"/tfile/Tattoos/365days copia.png"}
                style={{ width: "5%" }}
              />
              <img
                src={"/tfile/Tattoos/666 copia.png"}
                style={{ width: "5%" }}
              />
              <img
                src={"/tfile/Tattoos/721 copia.png"}
                style={{ width: "5%" }}
              />
              <img
                src={"/tfile/Tattoos/acab copia.png"}
                style={{ width: "5%" }}
              />
              <img
                src={"/tfile/Tattoos/adventure copia.png"}
                style={{ width: "5%" }}
              />
              <img
                src={"/tfile/Tattoos/alien copia.png"}
                style={{ width: "5%" }}
              />
              <img
                src={"/tfile/Tattoos/alwaysbored copia.png"}
                style={{ width: "5%" }}
              />
              <img
                src={"/tfile/Tattoos/anarchy copia.png"}
                style={{ width: "5%" }}
              />
            </div>

            <div className={styles.caption}>
              <p className={styles.metaText}>
                "People look at me like "the perfect Doll" and I want much more
                than that..." - MetaDoll 0001
              </p>
              <span
                onClick={() =>
                  window.open("https://discord.com/invite/fMhpdrKRDG")
                }
                className={styles.border}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                Join Now
              </span>
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
                
              }}
            >
              <div >
                <img src={"/tfile/Tattoos/11.png"} style={{ width: "5%",margin:'10px' }} />
                <img
                  src={"/tfile/Tattoos/69 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/365days copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/666 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/721 copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/acab copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/adventure copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/alien copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/alwaysbored copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/anarchy copia.png"}
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
                
              }}
            >
              <div>
                <img src={"/tfile/Tattoos/11.png"} style={{ width: "5%" }} />
                <img
                  src={"/tfile/Tattoos/69 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/365days copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/666 copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/721 copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/acab copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/adventure copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/alien copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/alwaysbored copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/anarchy copia.png"}
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
            <div style={{ padding: "2.5rem 0" }}>
              <ImageSlider images={IMAGES} slidesToShow={3} />
            </div>
            {/*   <ImageSlider images={LARGE_IMAGES} />
             */}
            <div style={{ marginBottom: "150pxpx" }} />

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

<div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                left: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "-670px",
                
              }}
            >
              <div >
                <img src={"/tfile/Tattoos/baby1 copia.png"} style={{ width: "5%",margin:'10px' }} />
                <img
                  src={"/tfile/Tattoos/badday copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/badkid copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/balance copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/bandaid copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/BarCode copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/basquiat1 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/bayc copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/binance.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/bones copia.png"}
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
            >
              <div>
              <img src={"/tfile/Tattoos/baby1 copia.png"} style={{ width: "5%",margin:'10px' }} />
                <img
                  src={"/tfile/Tattoos/badday copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/badkid copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/balance copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/bandaid copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/BarCode copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/basquiat1 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/bayc copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/binance.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/bones copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
              </div>
            </div>
           <RoadMap />
            <div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                left: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "-670px",
                
              }}
            >
              <div >
                <img src={"/tfile/Tattoos/boredape copia.png"} style={{ width: "5%",margin:'10px' }} />
                <img
                  src={"/tfile/Tattoos/brass copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/badkid copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/broken copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/btc copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/cat_gif1 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/chaos copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/chill copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/chillpill copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
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
            >
              <div>
              <img src={"/tfile/Tattoos/boredape copia.png"} style={{ width: "5%",margin:'10px' }} />
                <img
                  src={"/tfile/Tattoos/brass copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/badkid copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/broken copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/btc copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/cat_gif1 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/chaos copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/chill copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/chillpill copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/cigbox copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            <Team />
            <br />
            <br />
            <br />
            {/* <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,left:'50%'}}>
<Rotary   />
  </div>
  <div  style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,right:'50%'}}>
<Rotary   />
  </div> */}

            <FAQ />
            <br />
            <br />
            <br />
            {/*   <div   style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,left:'50%'}}>
   <Rotary   />
  </div>
  <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,right:'50%'}}>
   <Rotary   />
  </div> */}

            <JoinCommunity />
            <Footer />
            {/* <Rotary/> */}
          </div>

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

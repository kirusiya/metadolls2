import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Video from '../components/Video'
import Top from '../components/Top'
import Nabvar from '../components/Nabvar'


import axios from 'axios'
import { useState, useEffect } from 'react'
import ManualParallax from '../components/ManualParallax'
import  About from '../components/About'
import SimpleImageSlider from "react-simple-image-slider";
import RoadMap from '../components/RoadMap'
import Script from 'next/script'

import JoinCommunity from '../components/JoinCommunity'
const images = [
  { url: "Metadoll-02.jpg" },
  { url: "metadoll.jpeg" },
  { url: "metadoll.jpeg" },
  { url: "Metadoll-02.jpg" },
  { url: "metadoll.jpeg" },
  { url: "Metadoll-02.jpg" },
  { url: "metadoll.jpeg" },
];




import FAQ from '../components/FAQ'
import FormatEmail from '../components/FormatEmail'
import Team from '../components/Team'
import Footer  from '../components/Footer'
import NavBarv1 from '../components/NavBarv1'
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};



import ImageSlider from "../components/ImageSlider";
import { IMAGES, VIDEOS, LARGE_IMAGES } from "../data/data";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Rotary from '../components/Rotary'

export default function Home({posts}) {
 
 console.log(posts)
 
  return (
    <div className={styles.container}>
      <Script  strategy="afterInteractive" src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      <Head>
        <title>Metadolls NFT's</title>
        <meta name="description" content="Metadolls NFT's" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://fonts.googleapis.com/css2?family=Orbitron&display=swap' rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>

      </Head>
      {/* <NavBarv1/> */}
      <Nabvar/>
     
      <ManualParallax/>
      <div className={styles.bigContainer}>
        <div style={{position:'relative',top:'-17.7px', left:'0px',width:'100%',display:'flex',justifyContent:'space-between'}}>
          <img src={'/tfile/Tattoos/11.png'} style={{width:'7%',}}/>
          <img src={'/tfile/Tattoos/69 copia.png'} style={{width:'7%',}}/>
          <img src={'/tfile/Tattoos/365days copia.png'} style={{width:'7%',}}/>
          <img src={'/tfile/Tattoos/666 copia.png'} style={{width:'7%',}}/>
          <img src={'/tfile/Tattoos/721 copia.png'} style={{width:'7%',}}/>
          <img src={'/tfile/Tattoos/acab copia.png'} style={{width:'7%',}}/>
          <img src={'/tfile/Tattoos/adventure copia.png'} style={{width:'7%',}}/>
          <img src={'/tfile/Tattoos/alien copia.png'} style={{width:'7%',}}/>
          <img src={'/tfile/Tattoos/alwaysbored copia.png'} style={{width:'7%',}}/>
          <img src={'/tfile/Tattoos/anarchy copia.png'} style={{width:'7%',}}/>
        </div>
       
      <div className={styles.caption} onClick={()=>window.open("https://discord.com/invite/fMhpdrKRDG")}>
      <p className={styles.metaText}>"People look at me like "the perfect Doll" and I want much more than that..." - MetaDoll 0001
</p>
                <span className={styles.border} data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">Join Now</span>
               </div>
               <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,left:'50%'}}>
      <Rotary/>
      </div>
      <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,right:'50%'}}>
      <Rotary/>
      </div>
      <About/>
      <div style={{padding: '2.5rem 0'}}>
     <ImageSlider images={IMAGES} slidesToShow={3} />
     </div>
      {/*   <ImageSlider images={LARGE_IMAGES} />
     */}
    

{/* <div className={styles.container}>
        <ImageSlider images={IMAGES} slidesToShow={5} />
      </div>
      <div className={styles.container}>
        <ImageSlider images={VIDEOS} />
      </div>
      <div className={styles.container}>
        <ImageSlider images={LARGE_IMAGES} />
      </div> */}
     
      <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,left:'50%'}}>
      <Rotary/>
      </div>
      <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,right:'50%'}}>
      <Rotary/>
      </div>
      <RoadMap/>
    <br/>
    <br/>
    <br/>
      <Team/>
      <br/>
    <br/>
    <br/>
    <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,left:'50%'}}>
      <Rotary/>
      </div>
      <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,right:'50%'}}>
      <Rotary/>
      </div>
    
      <FAQ/>
      <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,left:'50%'}}>
      <Rotary/>
      </div>
      <div style={{WebkitTransform:'rotate(90deg)',position:'relative',zIndex:10000000000000000000000000,right:'50%'}}>
      <Rotary/>
      </div>
 
      <JoinCommunity/>
      <Footer/>
     {/* <Rotary/> */}
      </div>
      
      <div style={{position:'relative', left:'300px'}}>
      
      </div>
      
      
      <Rotary/>
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
   
    </div>
  )
}


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const onLine = {
    x:1222,
    y:12221,
    name:'name',
    likes:['nft','yellow-news'],
    email:'carlos.gs.andres@gmail.com'
  }
 /*  const res = await fetch('https://api.opensea.io/api/v1/assets?token_ids=27388&token_ids=13856&asset_contract_address=0x60e4d786628fea6478f785a6d7e704777c86a7c6&order_direction=asc&offset=0&limit=20', {method:'GET'}) */
  const posts = []
  
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
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
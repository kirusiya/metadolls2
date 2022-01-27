import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Video from '../components/Video'
import Top from '../components/Top'
import Nabvar from '../components/Nabvar'

import CollectionCard from '../components/CollectionCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ManualParallax from '../components/ManualParallax'
import  About from '../components/About'
import SimpleImageSlider from "react-simple-image-slider";
import RoadMap from '../components/RoadMap'
import Script from 'next/script'
import GsapVideo from '../components/GsapVideo'

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

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
export default function Home({posts}) {
  
 console.log(posts)

  return (
    <div className={styles.container}>
      <Head>
        <title>Metadolls NFT's</title>
        <meta name="description" content="Metadolls NFT's" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron" rel="stylesheet"/>
      </Head>
      <Nabvar/>
      <ManualParallax/>
      <div className={styles.caption}>
                <span className={styles.border} data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">Join Now</span>
               </div>
      <About/>
      <RoadMap/>
      <FAQ/>
      <div className={styles.titleContainer}>
      <h2 className={styles.titleTeam}>Team</h2>
      </div>
      <Team/>
      <GsapVideo/>
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
        discord.gg/fMhpdrKRDG
        Top Link twitter discord
        Adding document fix 
        Video Player 
        discord.gg/fMhpdrKRDG
        '.4 real wolrd
        */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Video from '../components/Video'
import Top from '../components/Top'
import Nabvar from '../components/Nabvar'
import { motion } from 'framer-motion';
import CollectionCard from '../components/CollectionCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ManualParallax from '../components/ManualParallax'
export default function Home({posts}) {
  
 console.log(posts)

  return (
    <div className={styles.container}>
      <Head>
        <title>Metadolls NFT's</title>
        <meta name="description" content="Metadolls NFT's" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
      </Head>
      
      <Nabvar/>
      <ManualParallax/>
      <Top/>
     
      <div className={styles.about}>
      <CollectionCard id={0} name={'MetaDoll 2'} traits={[{'value':7}]} image={'./Metadoll-02.jpg'}/>
      {/* <a href="#about">
        aboutdddddddddd
      </a>
      <a name='about'>hhhhh</a> */}
      </div>
      {/* 
      <Nabvar/>
      <Top/>
     <button></button>
      <div className={styles.about}>
      <a href="#about">
        aboutdddddddddd
      </a>
      <a name='about'>hhhhh</a>
      </div> */}
      {/* <Header/>
      <Top/> */}
      
      {/* <main className={styles.main}>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://api.opensea.io/api/v1/assets?token_ids=27388&token_ids=13856&asset_contract_address=0x60e4d786628fea6478f785a6d7e704777c86a7c6&order_direction=asc&offset=0&limit=20', {method:'GET'})
  const posts = []
  
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
 
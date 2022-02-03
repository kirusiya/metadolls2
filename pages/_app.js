/* import '../styles/globals.css' */
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/font.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return(
    <>
    {/*  <Head>
     <link href='https://fonts.googleapis.com/css2?family=Orbitron&display=swap' rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
  
    </Head> */}
    <Component {...pageProps} />
    </>)
}

export default MyApp

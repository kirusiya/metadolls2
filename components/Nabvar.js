import React, {useState,useEffect} from 'react'
import styles from'../styles/Navbar.module.css'

const Nabvar = () => {
    const size = useWindowSize();
    console.log('size navbar')
    console.log(size.width)
    const [toggleMenu, setToggleMenu] = useState(false);
    const imprimir = ()=>{
        console.log('ajam')
    };
    
    let colorsito = false
    return (
        <nav className={styles.navbar}> 
        
        <ul style={{margin:'0px',padding:'0px'}}>
          
              {/* <div className={styles.frame}>
              
              MetaDolls
              </div> */}
          
          
            <li className={styles.navbarLogo}>
              <img className={styles.LogoPrincipal} src='logoheader.png' />
              <li className={styles.topHeaderTitles} >
                <a 
             
               href='#about'>About</a>
               </li>
               <li className={styles.topHeaderTitles} ><a  href='#roadmap'>RoadMap</a></li>
               <li className={styles.topHeaderTitles} ><a href='#faqs'>FAQs</a></li>
           {/*  <p>{size.width + ' w/h'}{size.height}</p> */}
             </li>
         
            { size.width<600 ? <img src="discordv.png"  className={styles.logitos}
             onClick={()=>{window.open("https://discord.com/invite/fMhpdrKRDG")}}
             />: null }
           {/*  <li className={styles.navbarToggle} onClick={()=>{setToggleMenu(!toggleMenu)
            console.log('ajaamamm')
            console.log(toggleMenu)}}><img src='menu.png' className={styles.menuLogo}/></li> */}
            {/* <li className={toggleMenu ? styles.navbarLinks2 : styles.navbarLinks}><a href='#'></a></li> */}
            {/* <li onClick={()=>{imprimir()}} className={toggleMenu ? styles.navbarLinks2 : styles.navbarLinks}><a href='#'>Join to Discord</a></li> */}
           <img  onClick={()=>{window.open("https://twitter.com/metadollsnft")}} src={'twitterv.png'} className={styles.logitos}/>
           <img onClick={()=>{window.open("https://instagram.com/metadollsnft?utm_medium=copy_link")}} src={'instagram.png'} className={styles.logitos}/>
            {/* <li className={toggleMenu ? styles.navbarLinks2 : styles.navbarLinks}><a style={{color: "rgb(0, 162, 255)",fontWeight:'bold'}} href='#about'>About</a></li>
            <li className={toggleMenu ? styles.navbarLinks2 : styles.navbarLinks}><a style={{color: "rgb(0, 162, 255)",fontWeight:'bold'}} href='#'>RoadMap</a></li> */}
            
            { size.width>600 ? <button className={["btn btn-primary btn-sm "]} onClick={()=>{window.open("https://discord.com/invite/fMhpdrKRDG")}}>Join  Discord</button> : null }
          
            {/* <button className="btn btn-primary m-3">Join our Discord</button>
            <a href="https://discord.com/invite/mekaverse" name="discordnav" rel="noopener" target="_blank" class="discord row"></a> */}
        </ul>
        </nav>
    )
}

export default Nabvar
/*  style={colorsito ? { color: 'green'} : {color:'black'}} */


// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }


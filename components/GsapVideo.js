import React, { useRef, useEffect, useState } from 'react'
import styles from '../styles/GsapVideo.module.css'
import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger"
import AOS from "aos";

const GsapVideo = () => {
  const size = useWindowSize();
  let scrollPos
let videoDuration
let videoCurrentTime
  const [state, setState] = useState(0)
  const IntroVideoRef = useRef(null);
  const vidRef = useRef(null);
  
  const handlePlayVideo = () => {
    vidRef.current.play();
  }
  const handlePauseVideo = () => {
    vidRef.current.pause()
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    vidRef.current.currentTime = 0;

  ScrollTrigger.create({
      trigger: IntroVideoRef.current,
      /* scrub: true, */
      pinSpacing: false,
      pin: IntroVideoRef.current,
      start: "300px",
      end:  "bottom -100px",
      /* markers: true, */
      onUpdate: function (self) {
       /*  self.current.currentTime = self.current.duration * self.progress.toFixed(2); */
       /*  console.log(self.progress) */
        if (vidRef.current) {
          scrollPos = self.progress;
          videoDuration = vidRef.current.duration;
          videoCurrentTime = (videoDuration * scrollPos );
          /* if(videoCurrentTime>=5.7){
             return videoCurrentTime=5.4
          } */
          if (videoCurrentTime) {
            console.log('time video')
            console.log(videoCurrentTime)
            vidRef.current.currentTime = videoCurrentTime * 0.922  ;/* *(0.95) */
          }
        }
    
      },

      
    
    });
  }, [IntroVideoRef, vidRef]);
 
    return(
    
        <div   /* id="background-container" className={styles.backgroundContainer} */>
    <div ref={IntroVideoRef}  id="video-container" className={styles.videoContainer}>
      <video    data-aos="fade-up"  ref={vidRef} src="metavid.mp4" type="video/mp4" id="bgVideo" className={styles.videoTag}></video>
    </div>
   {/*  <button onClick={(e)=>{handlePauseVideo()}}>Pause</button>
    <button onClick={()=>{handlePlayVideo()}}>Play</button> */}
  </div>
 
  
    )
}

export default GsapVideo;



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
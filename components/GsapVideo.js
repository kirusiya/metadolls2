import React, { useRef, useEffect, useState } from 'react'
import styles from '../styles/GsapVideo.module.css'
import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger"
import AOS from "aos";

const GsapVideo = () => {
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
      duration: 2000,
    });
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    vidRef.current.currentTime = 0.1;

  ScrollTrigger.create({
      trigger: IntroVideoRef.current,
      scrub: true,
      pin: IntroVideoRef.current,
      start: "top center",
      end:  "620",
      markers: false,
      onUpdate: function (self) {
       /*  self.current.currentTime = self.current.duration * self.progress.toFixed(2); */
       /*  console.log(self.progress) */
        if (vidRef.current) {
          scrollPos = self.progress;
          videoDuration = vidRef.current.duration*0.8888888888888888888;
          videoCurrentTime = (videoDuration * scrollPos );
        
          if (videoCurrentTime) {
            vidRef.current.currentTime = videoCurrentTime;
          }}
    
      },

      
    
    });
  }, [IntroVideoRef, vidRef]);
 
    return(
    
        <div   /* id="background-container" className={styles.backgroundContainer} */>
    <div ref={IntroVideoRef}  id="video-container" className={styles.videoContainer}>
      <video   data-aos="fade-up"  ref={vidRef} src="metavid.mp4" type="video/mp4" id="bgVideo" style={{width:'500px'}}></video>
    </div>
   {/*  <button onClick={(e)=>{handlePauseVideo()}}>Pause</button>
    <button onClick={()=>{handlePlayVideo()}}>Play</button> */}
  </div>
 
  
    )
}

export default GsapVideo;
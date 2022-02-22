import React, { useRef, useEffect, useState } from 'react'
import styles from '../styles/GsapVideo.module.css'
import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger"
import AOS from "aos";
var scrollPos
var videoDuration
var videoCurrentTime
const GsapVideo = () => {
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

    vidRef.current.currentTime = 0;

  ScrollTrigger.create({
      trigger: IntroVideoRef.current,
      scrub: true,
      pin: true,
      start: "center center",
      end: "800",
      markers: false,
      onUpdate: function (self) {
       /*  console.log(self.progress) */
        if (vidRef.current) {
          scrollPos = self.progress;
          videoDuration = vidRef.current.duration;
          videoCurrentTime = (videoDuration * (scrollPos));

          if (videoCurrentTime) {
            vidRef.current.currentTime = videoCurrentTime;
          }}
    
      }
    });
  }, [IntroVideoRef, vidRef]);
 
    return(
        <div>
        <div id="background-container" className={styles.backgroundContainer}>
    <div  ref={IntroVideoRef} id="vid eo-container" className={styles.videoContainer}>
      <video  ref={vidRef} src="metavid.mp4" type="video/mp4" id="bgVideo" style={{width:'500px'}}></video>
    </div>
   {/*  <button onClick={(e)=>{handlePauseVideo()}}>Pause</button>
    <button onClick={()=>{handlePlayVideo()}}>Play</button> */}
  </div>
 
  </div>
    )
}

export default GsapVideo;
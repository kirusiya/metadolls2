import React, { useRef, useEffect, useState } from 'react'
import styles from '../styles/GsapVideo.module.css'
import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger"
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
    gsap.registerPlugin(ScrollTrigger);

    vidRef.current.currentTime = 0;

  ScrollTrigger.create({
      trigger: IntroVideoRef.current,
      scrub: true,
      pin: IntroVideoRef.current,
      start: "center center",
      end: "750",
      markers: false,
      onUpdate: function (self) {
        console.log(self.progress)
        if (vidRef.current) {
          scrollPos = self.progress;
          videoDuration = vidRef.current.duration;
          videoCurrentTime = videoDuration * scrollPos;

          if (videoCurrentTime) {
            vidRef.current.currentTime = videoCurrentTime;
          }}
        /* console.log(self) */
        /* setState() */
        
        
       /*  if (vidRef.current) {
          scrollPos = self.progress;
          videoDuration = vidRef.current.duration;
          videoCurrentTime = videoDuration * scrollPos;

          if (videoCurrentTime) {
            vidRef.current.currentTime = videoCurrentTime;
          }
        } */
      }
    });
  }, [IntroVideoRef, vidRef]);
  /* useEffect(() => {
    //Runs only on the first render
    vidRef.current.pause()
    vidRef.current.currentTime = 0;
    let sections = gsap.utils.toArray("#step0");
    console.log('vidRef',vidRef.current.currentTime)
  }, []); */
  
 /*  useEffect(() => {
  
    let sections = gsap.utils.toArray(".step"); 

   gsap.to("#bgVideo", {
    scrollTrigger: {
        scrub: true
    },
    scale: 1.5
})
  }, [vidRef]); */
    return(
        <div>
        <div id="background-container" className={styles.backgroundContainer}>
    <div ref={IntroVideoRef} id="vid eo-container" className={styles.videoContainer}>
      <video ref={vidRef} src="metavid.mp4" type="video/mp4" id="bgVideo" style={{width:'500px'}}></video>
    </div>
   {/*  <button onClick={(e)=>{handlePauseVideo()}}>Pause</button>
    <button onClick={()=>{handlePlayVideo()}}>Play</button> */}
  </div>
 
  </div>
    )
}

export default GsapVideo;
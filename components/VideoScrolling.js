import React,{ useEffect,useRef} from 'react';
import gsap from 'gsap'
import styles from '../styles/VideoScrolling.module.css'
  const  VideoScrolling = ()  =>{
    // store a reference to the box div
    const boxRef = useRef();
  
    // wait until DOM has been rendered
    useEffect(() => {
       /*  gsap.to(boxRef.current, {  scrollTrigger: {
            trigger: boxRef.current, //this is the element that will trigger the animation
            start: 'top center', //this string defines the trigger and scroller start
            end: 'bottom center', //this string defines the trigger and scroller end
            scrub: true //this tells GSAP to link animation progress to scroll progress
          },
          y: '50%', //translates the element downwards by 50%
          color: 'red' }); */
    });
    const handleScroll = (e) => {
        console.log('scroll fire')
    }
  
    // DOM to render
    return <div onScroll={()=>{handleScroll()}} className={styles.box} ref={boxRef}>Hello</div>;
  }
  export default VideoScrolling;
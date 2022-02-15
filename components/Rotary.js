import styles from '../styles/Rotary.module.css';
import { useState, useEffect, useRef } from 'react';
import useInView from "react-cool-inview";
import gsap from 'gsap';
let boxW = 100;
let boxH = 100;
let duration = 2;

export default function Rotary() {
  
  
  let size = useWindowSize();
 
  const [stateSize,setSize] = useState(size);
  const [count, setCount] = useState(0);
  const viewport = useRef();
  const imgRef = useRef();
  const loop = async (element) => {
    while (true) {
      await gsap.to(element, {
        top: `calc(100% - ${boxH}px)`,
        duration: duration,
        ease: 'none',
      });
      await gsap.to(element, {
        left: `calc(100% - ${boxW}px)`,
        duration: duration,
        ease: 'none',
      });
      await gsap.to(element, {
        top: `0%`,
        duration: duration,
        ease: 'none',
      });
      await gsap.to(element, {
        left: `0%`,
        duration: duration,
        ease: 'none',
      });
      // await gsap.set('#car1', { top: '0%', left: '0%' });
    }
  };
  const loop2 = async (element) => {
    while (true) {
      await gsap.to(element, {
        left: `calc(100% - ${boxW}px)`,
        duration: duration,
        ease: 'none',
      });
    }
  };
  /* const generateMotion = async (element, idx) => {
    gsap.set(element, { left: `calc(0% + ${idx * boxW}px)`, top: '0%' });
    await gsap.to(element, {
      top: `0%`,
      left: '0%',
      duration: (idx * duration * boxW) / viewport.current.offsetWidth,
      ease: 'none',
    });
    loop(element);
  }; */
  const generateMotion = async (element, idx) => {
    gsap.set(element, { left: `calc(0% + ${idx * boxW}px)`, top: '0%' });
    await gsap.to(element, {
      top: `0%`,
      left: '0%',
      duration: (idx * duration * boxW) / viewport.current.offsetWidth,
      ease: 'none',
    });
    loop(element);
  };
  /* 
  
  */
  useEffect(async () => {
    
    /* gsap.set("#elemt", { }); */
    
      /* .current.clientWidth */
   /*    console.log('imgRef',imgRef)
   console.log(viewport.current) */
       gsap.to("#elemt" ,{ /* { display:'none' */
      /*  opacity:0, */
       /* translateX:size.width, */
       x: size.width,/* size.width-(imgRef.current.clientWidth2)-20, */
         duration:20,
         repeat:-1,
         display:'none',
        
       /*  delay:0 */
       });
   
      
   
    /* generateMotion('#car1', 0); */
   /*  generateMotion('#car2', 1); */
  }, [size.width]);
  return (
  
    <section 
     id="viewport"
    ref={viewport}
    style={{
      width:'110%',
      display:'flex',
    
   /*   position:'relative',
     left:'-10%', */
     overflow:'hidden',
     justifyContent:'space-between',
    
    }}>
      {/* 3294 */}
     
        
        <img id="elemt"src={'/tfile/Tattoos/11.png'} style={{width:'4%',}}/>
        <img id="elemt" src={'/tfile/Tattoos/69 copia.png'} style={{width:'4%',}}/>
        <img id="elemt" src={'/tfile/Tattoos/365days copia.png'} style={{width:'4%',}}/>
        <img id="elemt" src={'/tfile/Tattoos/666 copia.png'} style={{width:'4%',}}/>
        <img id="elemt"src={'/tfile/Tattoos/721 copia.png'} style={{width:'4%',}}/>
        <img id="elemt"src={'/tfile/Tattoos/acab copia.png'} style={{width:'4%',}}/>
        <img id="elemt" src={'/tfile/Tattoos/adventure copia.png'} style={{width:'4%',}}/>
        <img id="elemt" src={'/tfile/Tattoos/alien copia.png'} style={{width:'4%',}}/>
        <img id="elemt" src={'/tfile/Tattoos/alwaysbored copia.png'} style={{width:'4%',}}/>
        <img id="elemt"src={'/tfile/Tattoos/anarchy copia.png'} style={{width:'4%',}}/>
      {/*   <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt"  ref={imgRef} src={'./tfile/Tattoos/11.png'} width='4%'/> */}

        
       {/*  <img id="elemt" imgRef src={'./tfile/Tattoos/11.png'} width='4%'/>
        <img id="elemt" imgRef src={'./tfile/Tattoos/11.png'} width='4%'/> */}
       {/*  <img src={'./tfile/Tattoos/11.png'} width='4%'/> */}
    </section>
    
   
  );
}


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

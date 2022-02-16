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



  /* 
  
  <div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                left: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "-670px",
                
              }}
            >
              <div >
                <img src={"/tfile/Tattoos/boredape copia.png"} style={{ width: "5%",margin:'10px' }} />
                <img
                  src={"/tfile/Tattoos/brass copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/badkid copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/broken copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/btc copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/cat_gif1 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/chaos copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/chill copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/chillpill copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/cigbox copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
              </div>
            </div>
            <div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                right: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "-570px",
                
              }}
            >
              <div>
              <img src={"/tfile/Tattoos/boredape copia.png"} style={{ width: "5%",margin:'10px' }} />
                <img
                  src={"/tfile/Tattoos/brass copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/badkid copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/broken copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/btc copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/cat_gif1 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/chaos copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/chill copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/chillpill copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/cigbox copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
              </div>
            </div>
  


            <div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                left: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "-670px",
                
              }}
            >
              <div >
                <img src={"/tfile/Tattoos/baby1 copia.png"} style={{ width: "5%",margin:'10px' }} />
                <img
                  src={"/tfile/Tattoos/badday copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/badkid copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/balance copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/bandaid copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/BarCode copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/basquiat1 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/bayc copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/binance.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/bones copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
              </div>
            </div>
            <div
              style={{
                WebkitTransform: "rotate(90deg)",
                position: "relative",
                zIndex: 10000000000000000000000000,
                right: "50%",
                display: "flex",
                justifyContent: "space-between",
                bottom: "-570px",
                
              }}
            >
              <div>
              <img src={"/tfile/Tattoos/baby1 copia.png"} style={{ width: "5%",margin:'10px' }} />
                <img
                  src={"/tfile/Tattoos/badday copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/badkid copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/balance copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/bandaid copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/BarCode copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/basquiat1 copia.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/bayc copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
                <img
                  src={"/tfile/Tattoos/binance.png"}
                  style={{ width: "5%",margin:'10px' }}
                />
                <img
                  src={"/tfile/Tattoos/bones copia.png"}
                  style={{ width: "5%" ,margin:'10px'}}
                />
              </div>
            </div>

























            
  
  */
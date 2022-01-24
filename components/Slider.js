
import React,{useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
  } from "swiper/core";
  // configure Swiper to use modules
  SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
  import styles from '../styles/Slider.module.css'
  
const Slider = () => {
    const size = useWindowSize();
  return (
    <Swiper
    /* spaceBetween={} */
    slidesPerView={4}
    /* onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)} */
    autoplay={true}
    navigation={true}
       
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        
        pagination={{
          clickable: true
        }}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
    className={styles.container}
  >
    <SwiperSlide className={styles.slider}>
    <img src="metadoll.jpeg" style={{width:'200px',heigth:'200px'}}/>
 
</SwiperSlide>
<SwiperSlide>
  <img src="Metadoll-02.jpg" style={{width:'200px',heigth:'200px'}}/>
</SwiperSlide>
<SwiperSlide>
  <img src="Metadoll-02.jpg" style={{width:'200px',heigth:'200px'}}/>
</SwiperSlide>
<SwiperSlide>
  <img src="Metadoll-02.jpg" style={{width:'200px',heigth:'200pxx'}}/>
</SwiperSlide>
<SwiperSlide>
  <img src="Metadoll-02.jpg" style={{width:'200px',heigth:'200px'}}/>
</SwiperSlide>
<SwiperSlide>
  <img src="metadoll.jpeg" style={{width:'200px',heigth:'200px'}}/>
</SwiperSlide>
<SwiperSlide>
  <img src="Metadoll-02.jpg" style={{width:'200px',heigth:'200px'}}/>
</SwiperSlide>
<SwiperSlide>
  <img src="Metadoll-02.jpg" style={{width:'200px',heigth:'200px'}}/>
</SwiperSlide>
<SwiperSlide>
  <img src="Metadoll-02.jpg" style={{width:'200px',heigth:'200pxx'}}/>
</SwiperSlide>
<SwiperSlide>
  <img src="Metadoll-02.jpg" style={{width:'200px',heigth:'200px'}}/>
</SwiperSlide>
  </Swiper>
)};

export default Slider

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


  
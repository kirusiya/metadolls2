import React from "react";
import styles from "../styles/Top.module.css";
import { motion } from "framer-motion";
const buttonVariants = {
  hover: {
    scale: 1.5,
  },
  pressed: {
    scale: 0.5,
  },
  rest: {
    scale: 1,
  },
};
const Video = () => {
  return (
    <div className={styles.metadollDescriptionContainer}>
    <h2 className={styles.descriptionDoll}>
        "All people look at me like "the perfect Doll" <br /> and I want more
        than that..." <br /> - MetaDoll 0001{" "}
      </h2>
      <motion.img
        /* drag
    dragConstraints={{
      top: -1,
      left: 1,
      right: 1,
      bottom: 1,
    }} */
        /* initial={{
          y: -0,
          rotate: 2,
        }}
        animate={{
          y: 50,
          rotate: -3,
        }}
        transition={{
          type: "tween",
          ease: "anticipate",
          duration: 3,
          repeatType: "reverse",
          repeatDelay: 1,
          repeat: Infinity,
        }} */
        /* transition={{
      type: 'spring',
      stiffness: 50,
      mass: 8,
      damping: 20,
    }} */
        /* initial=
     {{
        x:'0vw'
     }}
     animate={{x:"0",transition:{duration:2, ease:'easeInOut'}}} */
        src="metadoll.jpeg"
        className={styles.imgMetadoll}
      />
      
      {/* <motion.button
    style={{position:"absolute",top:'35%',zIndex:3, left:'50%',background:'blue',color:'white'}}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
      variants={buttonVariants}
    >
      Join now!
    </motion.button> */}
    </div>
  );
};

export default Video;
{
  /* <div className={styles.topContainer}>
      
    </div> */
}

import React from "react";
import styles from "../styles/Video.module.css";

const Video = () => {
  return (
      <div className={styles.videoContainer}>
    <video width="320" height="240" controls>
      <source src="/helmet.mp4" type="video/mp4" />
    </video>
    </div>
  );
};

export default Video;

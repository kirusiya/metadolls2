import styles from '../styles/GsapVideo.module.css'
const GsapVideo = () => {
    return(
        <div>
        <div id="background-container" className={styles.backgroundContainer}>
    <div id="video-container" className={styles.videoContainer}>
      <video src="bg.mp4" type="video/mp4" id="bgVideo"></video>
    </div>
  </div>
  <div id="scroll-container" className={styles.scrollContainer}>
    <section id="step0" className={styles.step}>
      <div>
        <h3>Hello</h3>
      </div>
    </section>
    <section className={styles.step}>
      <div>
        <h3>My</h3>
      </div>
    </section>
    <section className={styles.step}>
      <div>
        <h3>Name</h3>
      </div>
    </section>
    <section className={styles.step}>
      <div>
        <h3>Is</h3>
      </div>
    </section>
    <section className={styles.step}>
      <div>
        <h3>Rahul</h3>
      </div>
    </section>
    <section className={styles.step}>
      <div>
        <h3>jangid</h3>
      </div>
    </section>
    <section className={styles.step}>
      <div>
        <h3>Thanks :)</h3>
      </div>
    </section>
  </div>
  </div>
    )
}

export default GsapVideo;
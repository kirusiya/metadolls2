import React from 'react'
import styles from '../styles/About.module.css'
export const About = () => {
    return (
        <section className={styles.aboutContainer}>
            <div className={styles.projectDescriptionContainer}>
            <h2 className={styles.titles}>Unique MetaDolls</h2>
            <p className={styles.titles}>10k models who live in the metaverse, bored and tired of their daily lives, dare to transform their body and face through tattoos, piercings and artistic modifications. Models that impose a new trend where art, fashion, pop culture and crypto culture come together as a universe where you can explore new ways to portray your identity.

            </p>
            </div>
            <div className={styles.randomImageContainer}>
            <img className={styles.imageSection} src='./Metadoll-02.jpg'/>
            </div>
           {/*  <div className={styles.randomImagePicker}>
                <img className={styles.imageSection}>  </img>
            </div> */}
        </section>
    )
}

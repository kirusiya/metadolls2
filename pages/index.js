
    import styles from "../styles/Home.module.css";
    import React, { useEffect, useState, useRef } from "react";
export default function Home() {

    const boxRef = useRef();
    return (
        <div className={styles.container}>
    <div
        ref={boxRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
         <img 
          src={"./logo2.png"}
          style={{ width: "50%", height: "auto", maxWidth:'400px'}}
        />
       
      </div>
      </div>
      )

}
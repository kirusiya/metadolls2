import react, { useState, useEffect } from "react";
import styles from "../styles/Pixel.module.css";
var foo = [];
const Pixel = () => {
  /* let spaces = [ ...Array(N).keys() ].map( i => i+1); */
  /* console.log(spaces) */

  const [count, setCount] = useState(0);
  const [space, setSpace] = useState([]);

  const renderizarLadrillos = (i) => {
    console.log("renderizarLadrillos");

    if (i === 0) {
      setSpace([...space, <div key={i} className={styles.cubix}></div>]);
    } else if (i % 2 === 0) {
      setSpace([...space, <div key={i} className={styles.cubix}></div>]);
    } else {
      setSpace([...space, <div key={i} className={styles.cubix2}></div>]);
    }
  };

  const fillArraySpace = (N) => {
    for (let i = 0; i < N; i++) {
      //space.push(i);

      if (i === 0) {
        setSpace([...space, <div key={i} className={styles.cubix}></div>]);
      } else if (i % 2 === 0) {
        setSpace([...space, <div key={i} className={styles.cubix}></div>]);
      } else {
        setSpace([...space, <div key={i} className={styles.cubix2}></div>]);
      }
    }
    console.log(space);
  };

  useEffect(() => {
    console.log("UseEffect");
    let l = []
    // Set the count State Value to Seven.
    for (let i = 0; i <64; i++) {
      //space.push(i);
      if (i === 0) {
        l.push(<div key={i} className={styles.cubix}></div>)
        /* setSpace([...space, <div key={i} className={styles.cubix}></div>]); */
      } else if (i % 2 === 0) {
        l.push( <div key={i} className={styles.cubix}></div>)
       /*  setSpace([...space, <div key={i} className={styles.cubix}></div>]); */
      } else {
        l.push(  <div key={i} className={styles.cubix2}></div>)
       /*  setSpace([...space, <div key={i} className={styles.cubix2}></div>]); */
      }
    }

    setSpace(l)
    
    /*  fillArraySpace(500) */

    /*  window.alert('useEffect Called As componentDidMount'); */
  }, []);
  console.log(count);

  return (
    <div>
      <div>h{300/8}</div>
      <div>w{400/8}</div>
      <div>x{33.4*44.4}</div>
      <grid className={styles.terrain}>{space.map((item) => item)}</grid>
      {/*    <div >
 
 <p > Count Value = {count} </p>

 <button onClick={() => setCount(count + 1)} title="Change State Value" />
 
</div> */}
      {/* <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div>
      <div className={styles.cubix}></div> */}
    </div>
  );
};

export default Pixel;

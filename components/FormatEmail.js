import React, { useState } from "react";
import styles from "../styles/FormatEmail.module.css";
const FormatEmail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);



  const handleSubmit = (e) => { 
console.log('ajjajaajjm')
console.log(e)
 e.preventDefault()
    console.log('Sending')
  let data = {
      name,
      email,
      message
    }
    console.log(data)
  fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }


  return (
    <div className={styles.container}>
      <form className={styles.main} onSubmit={(e)=>handleSubmit(e)}>
        <formgroup className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className={styles.inputField}
          onChange={(e)=>{setName(e.target.value)}}
          />
        </formgroup>
        <formgroup className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className={styles.inputField}
          onChange={(e)=>{setEmail(e.target.value)}}
           />
        </formgroup>
        <formgroup className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          < input type='text' name='message' className={styles.inputField} 
           onChange={(e)=>{setMessage(e.target.value)}}
          />
          
        </formgroup>
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormatEmail;
/* read this You have to do email component & sliderComponent */

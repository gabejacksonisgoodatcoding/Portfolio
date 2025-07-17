'use client'
import React from 'react'
import MyHeader from '@/app/components/myHeader/myHeader'
import styles from './page.module.css'


export default function Home() {
  
  return (
  <>

  <title > Welcome to my Website!</title>
  <MyHeader />
  <div className={styles.subHeader}>
  <div className={styles.subHeaderContent}>
  <div className={styles.profilePic}>
    <img src={"resumePic.jpg"}>
    </img>
  </div>
  <div className={styles.textHeader}>
    <h1>
    Gabriel Jackson
    </h1>
    <div className={styles.contact}>
      <h2>Contact me:</h2>
    <a href="mailto:gabejackson01@gmail.com">gabejackson01@gmail.com</a>
    <h2>Check out my <a href="https://github.com/gabejacksonisgoodatcoding">github!</a></h2>
    <h2>Check out my <a href="https://soundcloud.com/gabe-jackson-517186998">soundcloud!</a></h2>

    </div>

    </div>
    </div>
    </div>
    <div className={styles.body}>
      <div className={styles.about}>
      <h3>
        About me:
      </h3>
      <p>
        Hello, my name is Gabe. I'm a 2025 Uconn graduate looking to work in the tech field as a front end developer. I like making music, video games, ultimate frisbee, and Magic: The Gathering.
      </p>
    </div>
    <div className={styles.projects}>
      <h5>
        Projects:
      </h5>
      <p> UConn Senior Design Project</p>
      <ul>
        <li> Used Python with QT designer to design a front end system for a gas monitoring system calibration software</li>
    </ul>
    <p>
      <br></br>
      Infosys Code Conversion Chatbot </p>
      <ul>
        <li> Utlized React and next.js to create a frontend for a Gemini powered chatbot trained to convert legacy VBScript to Python.</li>
    </ul>
    </div>
    <div className={styles.skills}>
        <h5>
          Skills
        </h5>
        <ul>
          <li>C++</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>SQL</li>
          <li>Leadership</li>
          <li>Fl Studio</li>
          <li>Github</li>
        </ul>
    </div>
    </div>





  </>
);
  }

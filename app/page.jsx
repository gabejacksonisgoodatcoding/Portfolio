'use client'
import React from 'react'
import MyHeader from '@/app/components/myHeader/myHeader'
import styles from './page.module.css'
import Blob  from '@/app/components/home/blob/blob'

  const skills =[
    {title: 'C++', id: 1},
    {title :'Python', id: 2},
    {title: 'HTML' , id: 3},
    {title: 'CSS', id: 4},
    {title: 'Javascript', id: 5},
    {title: 'SQL', id: 6},
    {title: 'Leadership', id: 7},
    {title: 'Fl Studio', id: 8},
    {title: 'Github', id: 9}
  ]


export default function Home() {

  const listItems = skills.map(skill => 

    <li
        key={skill.id}
        >
        {skill.title}
        </li>
  );
  
  return (
  <>
  <MyHeader />
  <div className={styles.entirePage}>
  <title > Welcome to my Website!</title>
  <div className={styles.subHeader}>
  <div className={styles.subHeaderContent}>
  <div className={styles.profilePic}>
    <img src={"resumePic.JPG"}>
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

    <div class="grid grid-cols-20 grid-rows-5 justify-center items-center pt-4">
      <div class="col-start-2 col-span-8 rounded-3xl bg-green-200/60 p-5">
      <Blob blobTitle={"About me"} blobBody={"Hi, I'm Gabriel Jackson — a Computer Science and Engineering student at UConn with a passion for building clean, responsive, and user-focused web applications."}></Blob>
      </div>
    <div class="col-start-12 col-span-8 row-span-2   rounded-3xl p-5 bg-blue-200/60">
      <Blob blobTitle={"My Journey"} blobBody={"After graduating I found myself struggling to find a job. In response, I set out to learn more, work harder, and create something tangible to show my progress"}></Blob>
    </div>
    <div class="row-span-2 col-start-3 col-span-6 rounded-3xl p-5 bg-yellow-200/70">
      <Blob blobTitle={"Projects"} blobBody={"UConn Senior Design Project \n Infosys Code Conversion Chatbot"}></Blob>
    </div>
    </div>
    </div>
  </>
);
  }

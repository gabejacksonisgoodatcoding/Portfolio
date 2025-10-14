'use client'
import React from 'react'
import MyHeader from '@/app/components/myHeader/myHeader'
import  './page.css'
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
  <div className="entirePage">
  <title > Welcome to my Website!</title>

  {/* header*/}
  <div className="relative flex justify-center items-center w-[100vw]">
    <h1 className='sm: text-3xl md:text-5xl'>Gabriel Jackson</h1>
  </div>

  {/* body*/}

    <div className="bodyGrid">
      <div className="rounded-3xl bg-green-200/60">
      <Blob blobTitle={"About me"} blobBody={"Hi, I'm Gabriel Jackson — a Computer Science and Engineering student at UConn with a passion for building clean, responsive, and user-focused web applications."}></Blob>
      </div>
    <div className="rounded-3xl bg-blue-200/60">
      <Blob blobTitle={"My Journey"} blobBody={"After graduating I found myself struggling to find a job. In response, I set out to learn more, work harder, and create something tangible to show my progress"}></Blob>
    </div>
    <div className="rounded-3xl bg-yellow-200/70">
      <Blob blobTitle={"Projects"} blobBody={"UConn Senior Design Project \n Infosys Code Conversion Chatbot \n Portfolio Website"}></Blob>
    </div>
    </div>

    {/*Footer */}

    <div className="fixed bottom-0 left-0 w-full bg-gray-200/20 text-center">
    
      <h2>Contact me:</h2>
      <a href="mailto:gabejackson01@gmail.com">gabejackson01@gmail.com</a>
      <br></br>
      <a href="https://github.com/gabejacksonisgoodatcoding">Check out my github!</a>
    </div>
  </div>
  </>
);
  }

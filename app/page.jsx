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

  
  return (
  <div className='flex overflow-x-hidden min-h-screen flex-col'>
  <MyHeader />
  <title > Welcome to my Website!</title>

  {/* header*/}
  <div className="relative flex justify-center items-center w-full">
    <h1 className='sm: text-5xl md:text-6xl bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Gabriel Jackson</h1>
  </div>

    {/* body*/}
    <div className='flex-1 pt-10'>
    <div className="bodyGrid">
      <div className="rounded-3xl bg-green-200/60">
      <Blob blobTitle={"About me"} blobBody={"Hi, I'm Gabriel Jackson — a Computer Science and Engineering Graduate from UConn with a passion for building clean, responsive, and user-focused web applications."}></Blob>
      </div>
    <div className="rounded-3xl bg-blue-200/60">
      <Blob blobTitle={"My Journey"} blobBody={"After graduating I found myself struggling to find a job. In response, I set out to learn more, work harder, and create something tangible to show my progress"}></Blob>
    </div>
    <div className="rounded-3xl bg-yellow-200/70 whitespace-pre-line">
      <Blob blobTitle={"Projects"} blobBody={"UConn Senior Design Project \n Infosys Code Conversion Chatbot\n Portfolio Website\n"}></Blob>
    </div>
    </div>
    </div>

    {/*Footer */}

    <div className="flex flex-col w-full bg-gray-200/20 text-center">
      <h2>Contact me:</h2>
      <a href="mailto:gabejackson01@gmail.com">gabejackson01@gmail.com</a>
      <a href="https://github.com/gabejacksonisgoodatcoding">Check out my github!</a>
    </div>
  </div>
);
  }

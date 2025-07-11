'use client'
import React from 'react'
import MyHeader from '@/app/components/myHeader/myHeader'
import './pageStyle.css'


export default function Home() {
  
  return (
  <>

  <title > Welcome to my Website!</title>
  <MyHeader />

    <h1 className={"welcome"}>
        Welcome to my website!
    </h1>
    <h2 className='checkOut'>
      Check out my music and Resume!
    </h2>

  </>
);
  }

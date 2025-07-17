'use client'
import React from 'react'
import styles from './myHeader.module.css'
import Link from 'next/link';

export default function MyHeader() {
  return (
  <>
  <header className={styles.myHeader}>
    <div className={styles.linkbox}>
        <Link className = {styles.myLinks} href='/'>Home</Link>
    </div>
    <div className={styles.linkbox}>
        <Link className = {styles.myLinks} href='/music'>Music</Link>
    </div>
    <div className={styles.linkbox}>
        <Link className={styles.myLinks} href='/resume'>Resume</Link>
    </div>

  </header>

  </>
);
  }
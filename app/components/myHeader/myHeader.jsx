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
        <Link className={styles.myLinks} href='/tic_tac_toe'>Tic Tac Toe</Link>
    </div>
      <div className={styles.linkbox}>
        <Link className={styles.myLinks} href='/Blackjack'>Blackjack</Link>
    </div>
      <div className={styles.linkbox}>
        <Link className={styles.myLinks} href='/Art'>DVD</Link>
    </div>
      <div className={styles.linkbox}>
        <Link className={styles.myLinks} href='/Planner'>Planner</Link>
    </div>

  </header>

  </>
);
  }
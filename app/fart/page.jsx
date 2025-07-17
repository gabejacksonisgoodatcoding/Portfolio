'use client'
import React from 'react';
import MyHeader from '@/app/components/myHeader/myHeader';
import styles from './fart.module.css'

export default function Fart() {

    function playFart(){
        var audio = new Audio('fart1.mp3');
        audio.play();
    }

    return(
        <>
        <MyHeader />
        <div className={styles.fart}>
            <button 
            onClick={playFart}
            >
                Fart
            </button>
        </div>
        </>
    );
}
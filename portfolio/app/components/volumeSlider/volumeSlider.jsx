'use client'

import React from 'react';
import styles from './volumeSlider.module.css';



export default function VolumeSlider({volume, volumeChange}){


    return(
        <div className = {styles.slidecontainer}>
        <input 
        value={volume}
        type="range" 
        min="0" 
        max="100"
        onChange={e => volumeChange(e.target.value)}
        className="slider" 
        id="myRange"
        />
        <p>{volume}%</p>
        </div>
    );
}
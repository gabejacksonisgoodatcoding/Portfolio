'use client'

import React, {useState, useRef} from "react";
import Audio from '../audio/audio'
import VolumeSlider from '../volumeSlider/volumeSlider'
import styles from './audioVolume.module.css'


export default function AudioVolume({mySource, imgSource = "music.png", songName}){
    
    let audioRef = useRef(null);
    let [volume, setVolume] = useState(100);

    function volumeChange(newVolume){
        audioRef.current.volume = newVolume / 100;
        setVolume(newVolume);
        console.log(audioRef.current.volume)
    }

    return(
        <div className={styles.audioVolume}>
            <div className={styles.croppedImage}>
                <img src={imgSource}/>
            </div>
            <h1 className={styles.songTitle}>{songName}</h1>
            <Audio className = {styles.myAudio} ref = {audioRef} mySource={mySource}/>
            <VolumeSlider className = {styles.slider} volumeChange={volumeChange} volume = {volume}/>
        </div>

    )
};




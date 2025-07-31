'use client'

import React, {useState, useRef, useEffect} from "react";
import VolumeSlider from '../volumeSlider/volumeSlider'
import styles from './audioVolume.module.css'


export default function AudioVolume({mySource, imgSource = "music.png", songName}){
    

    let audioRef = useRef(null);
    let [volume, setVolume] = useState(100);

    let [playing, setPlaying] = useState(false);

    useEffect(() =>{
    })

    function volumeChange(newVolume){
        audioRef.current.volume = newVolume / 100;
        setVolume(newVolume);
        console.log(audioRef.current.volume)
    }

    function playAudio() {
        if (!playing) {
            console.log("playing");
            audioRef.current.play();
            setPlaying(true);
        }else{
            console.log("pausing");
            audioRef.current.pause();
            setPlaying(false);
        }
    }


    return(
        <div className={styles.audioVolume}>
            <audio ref={audioRef} src={mySource}/>
            <div className={styles.croppedImage}>
                <img src={imgSource}/>
            </div>
            <h1 className={styles.songTitle}>{songName}</h1>
            <button onClick={playAudio}>{playing ? "Pause" : "Play"}</button>
            <VolumeSlider source = {mySource} className = {styles.slider} volumeChange={volumeChange} volume = {volume}/>
        </div>

    )
};




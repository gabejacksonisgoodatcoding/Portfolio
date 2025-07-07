import React from 'react';
import MyHeader from '@/app/components/myHeader/myHeader';
import AudioVolume from '../components/audioVolume/audioVolume';
import styles from './music.module.css'

export default function Music() {
    return(
        <>
        <MyHeader />
        <div className={styles.music}>
            <AudioVolume mySource={"gamer_moment.mp3"} imgSource={"dogs.jpeg"} songName={"VG"}/>
            <AudioVolume mySource={"Guitar_is_cool.mp3"} imgSource = {"mitch.HEIC"} songName = {"Guitar"}/>
            <AudioVolume />
        </div>
        </>
    );
}
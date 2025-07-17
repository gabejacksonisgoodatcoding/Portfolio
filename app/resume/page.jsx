import React from 'react'
import MyHeader from '@/app/components/myHeader/myHeader';
import styles from './resume.module.css';

export default function Resume(){
    return(
        <>
        <MyHeader/>
        <div className={styles.download}>
            <a href="/Resume-8.pdf" download="Gabriel-Jackson-Resume.pdf">Download</a>
        </div>

        <div className={styles.resume}>
            <img className = {styles.image} src='resume-8.pdf' />
        </div>

        </>
    )

}
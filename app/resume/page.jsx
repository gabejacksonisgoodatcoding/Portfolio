import React from 'react'
import MyHeader from '@/app/components/myHeader/myHeader';
import styles from './resume.module.css';

export default function Resume(){
    return(
        <>
        <MyHeader/>
        <div className={styles.resume}>
            <img className = {styles.image} src='resume-7.pdf' />
        </div>
        </>
    )

}
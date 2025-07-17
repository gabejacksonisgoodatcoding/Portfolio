'use client'
import React from 'react';
import MyHeader from '@/app/components/myHeader/myHeader';
import styles from './cardGame.module.css';
import {endTurn} from '@/app/cardgame/card_game_backend/game';
import FireballCard from './card_game_backend/Cards/fireball/fireball';

export default function cardgame() {


    return(
        <>
        <MyHeader />
        <div className={styles.myButton}>
            <button 
            type='button'
            onClick={endTurn}
            >
                End Turn
            </button>
        </div>
        <FireballCard/>

        </>
    );
}
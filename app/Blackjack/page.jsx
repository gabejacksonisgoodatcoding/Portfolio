'use client'
import React, { useEffect, useState } from 'react';

import Blackjack from '@/app/Blackjack/Blackjack'
import styles from './Blackjack.module.css'
import MyHeader from '../components/myHeader/myHeader';



export default function Game(){
    const [reset, setReset] = useState(true);
    const [winner, setWinner] = useState("")
    const [resetAllow, setResetAllow] = useState(false);

    useEffect(() =>{
        if(!reset){
            setReset(true);
        }else{
            return
        }
    },[reset])

    function gameSetWinner(winnerStr){
        setWinner(winnerStr);
        if(winnerStr !== ""){
            setResetAllow(true);
        }
    }

    function resetGame(){
        setWinner("")
        console.log("Hello ")
        setReset(false);
        setResetAllow(false);
    }

    function resetButton(){
        return (<button  disabled = {!resetAllow} className= {styles.myButton}onClick={resetGame}>Play Again</button>);
    }

    return(
        <>
        <MyHeader>
        </MyHeader>
        <div className={styles.background}>

        {reset && <Blackjack winnerFunc = {gameSetWinner} resetButton = {resetButton}/>}
        {winner}
        <br></br>
        </div>
        </>
    );
};
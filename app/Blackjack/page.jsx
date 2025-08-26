'use client'
import React, { useEffect, useState } from 'react';

import Blackjack from '@/app/Blackjack/Blackjack'
import styles from './Blackjack.module.css'
import MyHeader from '../components/myHeader/myHeader';


export default function Game(){
    const [reset, setReset] = useState(true);
    const [winner, setWinner] = useState("")
    const [resetAllow, setResetAllow] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [playerMoney, setPlayerMoney] = useState(100);
    const [betAmount, setBetAmount] = useState(25);
    const [betAllow, setBetAllow] = useState(true);
    



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
        if(winnerStr == "Player Wins!"){
            setPlayerMoney(playerMoney+ 2 * betAmount)
        }
        if(winnerStr == "A tie happens, push"){
            setPlayerMoney(playerMoney + betAmount)
        }
    }

    function resetGame(){
        setWinner("")
        console.log("Hello ")
        setReset(false);
        setResetAllow(false);
        setHasStarted(true);
        setBetAllow(true)
    }

    function resetButton(){
        return (<button  disabled = {!resetAllow} className= {styles.myButton}onClick={resetGame}>Play Again</button>);
    }

    function playerBet(betAmount){
        setBetAmount(betAmount)
                                                                                                                                                                                
    }
    function submitBet(){
        setPlayerMoney(playerMoney - betAmount)
        setBetAllow(false)
    }



    return(
        <>
        <MyHeader>
        </MyHeader>
        <div className={styles.background}>
        {betAllow &&<form onSubmit={

            e=>{
                e.preventDefault();
                if(betAmount > playerMoney){
                    alert("You dont have enough money!")
                    return
                }
                submitBet()
            }
        }>
        <input placeholder="Bet"className={styles.betMe}id="bet" name='bet'type='number' max = {playerMoney} onChange={e => playerBet(e.target.value)}/>
        <br></br>
        <input className={styles.submitMe}type='submit'></input>
        </form>}
        Player Money: {playerMoney} <br />
        Bet Amount: {betAmount}
        {reset && <Blackjack winnerFunc = {gameSetWinner} resetButton = {resetButton} betAllow={betAllow}/>}
        {winner}
        <br></br>
        </div>
        </>
    );
};
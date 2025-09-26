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
        if(playerMoney <=0){
            alert("You call your mom for more money")
            setPlayerMoney(100);
        }
        setWinner("")
        setReset(false);
        setResetAllow(false);
        setHasStarted(true);
        setBetAllow(true)
    }

    function resetButton(){
        return (<button  disabled = {!resetAllow} className= {styles.myButton}onClick={resetGame}>Play Again</button>);
    }

    function submitBet(){

        if(betAmount < 0){
            alert("Bet cannot be negative")
            return
        }
        if(playerMoney - betAmount <0){
            alert("Not enough money")
            return
        }else{
            setPlayerMoney(playerMoney - betAmount)
            setBetAllow(false) 
        }

        setPlayerMoney(playerMoney - betAmount)
        setBetAllow(false)
    }

        //   {betAllow &&<form onSubmit={

        //     e=>{
        //         e.preventDefault();
        //         if(betAmount > playerMoney){
        //             alert("You dont have enough money!")
        //             return
        //         }
        //         submitBet()
        //     }
        // }>
        // <input placeholder="Bet"className={styles.betMe}id="bet" name='bet'type='number' max = {playerMoney} onChange={e => playerBet(e.target.value)}/>
        // <br></br>
        // <input className={styles.submitMe}type='submit'></input>
        // </form>}

        function bet(amount){
            setBetAmount(betAmount + amount);
        }

    return(
        <>
        <MyHeader>
        </MyHeader>
        <div className={styles.page}>
        {betAllow && <div className={styles.betButtons}>
            <h1>Make your Bet</h1>
            <button onClick={() => {bet(-50)}}>bet -$50</button> 
            <button onClick={()=> {bet(-25)}}>bet -$25</button>
            <button onClick={() => {bet(25)}}>bet +$25</button> 
            <button onClick={()=> {bet(50)}}>bet +$50</button>
            <br></br>
            <div className={styles.submitBet}> 
            <button onClick={submitBet}> Submit Bet</button>
            </div>
        </div>
        }
        <div className={styles.money}>
            Player Money: ${playerMoney} <br />
            Bet Amount: ${betAmount}
        </div>
        {winner}
        <br></br>
        
        {reset && <Blackjack winnerFunc = {gameSetWinner} resetButton = {resetButton} betAllow={betAllow} playerMoney={playerMoney} setPlayerMoney = {setPlayerMoney} betAmount = {betAmount} setBetAmount = {setBetAmount}/>}
        </div>
        </>
    );
};
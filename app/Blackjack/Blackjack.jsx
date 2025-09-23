'use client'
import React, { useEffect, useState } from 'react';
import styles from './Blackjack.module.css';

import {createPngMap, Deck, dealPlayer, cardAdd} from '@/app/Blackjack/cardToPNG';
import MyHeader from '../components/myHeader/myHeader';



export default function Blackjack({winnerFunc, resetButton, betAllow, playerMoney, betAmount, setBetAmount, setPlayerMoney}){

    const [myDeck, setMyDeck] = useState(() =>{
        return new Deck();
    });

    const[playerHand, setPlayerhand] = useState([[]]);
    const [dealerHand, setDealerHand] = useState([]);

    const[displayCards, setDisplayCards] = useState([]);
    const[displayDealerCards, setDisplayDealerCards] = useState([]);

    const[score, setScore] = useState(() =>{
        return cardAdd(playerHand);
    });
     const[dealerScore, setDealerScore] = useState(() =>{
        return cardAdd(dealerHand);
    });

    const[buttonDisabled, setButtonDisabled] = useState(false)
    const [dealerHiddenCard, setDealerHiddenCard] = useState(null);
    const mymap = createPngMap(myDeck);
    const [dealerDraw, setDealerDraw] = useState(false);
    const [playerEndTurn, setPlayerEndTurn] = useState(false);
    const [dealerEndTurn, setDealerEndTurn] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [allowDouble, setAllowDouble] = useState(false)

    
   // const flipSound = new Audio("flipcard-91468.mp3");
    


    useEffect(()=>{
        myDeck.shuffle();
    },[]);

    useEffect(()=>{
        if(!dealerDraw){
            return
        }
        if(score !== 21 && dealerScore < 17 && dealerScore !== 21) {
            setTimeout(() => {
            dealerDrawCard(); 
            }, 500);
        }else{
            setDealerDraw(false);
            setDealerEndTurn(true);
        }

    },[dealerDraw, dealerScore]);

    useEffect(() =>{
        CheckWinner();
    }, [score, dealerScore, dealerEndTurn])



    function doubleAllow(){
        if(playerMoney >= betAmount){
            setAllowDouble(true)
        }
    }

    function double(){
        setBetAmount(2*betAmount)
        setPlayerMoney(playerMoney - betAmount)
        drawCard()
        dealerTurnStart()
    }

    function drawCard(){
        let newCard = myDeck.drawCard();
        //console.log(newCard);
        let newHand = [...playerHand.slice(0, playerHand.length + 1), newCard];
        setPlayerhand(newHand);
        setDisplayCards(prev => [...prev, mymap.get(newCard)]);
        setScore(cardAdd(newHand));
    
    }

    function dealerDrawCard(){
        let newCard = myDeck.drawCard();
        //console.log(newCard);
        let newHand = [...dealerHand.slice(0, dealerHand.length + 1), newCard];
        setDealerHand(newHand);
        setDisplayDealerCards(prev => [...prev, mymap.get(newCard)]);
        setDealerScore(cardAdd(newHand));
        
    
    }

    function displayHand(){

        return displayCards.map((png, index) =>(
    
            <div key = {index} className={styles.card}>
            <div className={styles.backCard}>
                <img key = {index} src={'/CardPNGs/card back red.png'}/>
            </div>
            <div className={styles.frontCard}>
            <img
                key = {png}
                src = {`/CardPNGs/${png}`}
                className = {styles.dealt}
            />
            </div>
            </div>
        ));
    }
    


    function playerTurnStart(){
        let newHand = dealPlayer(myDeck);
        setPlayerhand(newHand);
        for(const card of newHand){
                setDisplayCards(prev => [...prev, mymap.get(card)]);
        }
        setScore(cardAdd(newHand));
        doubleAllow();
        
        newHand = dealPlayer(myDeck);
        let dealerShownCard = newHand[0]
        setDealerHiddenCard(mymap.get(newHand[1])); 
        let dealerDisplayArray = [];

        dealerDisplayArray.push(mymap.get(dealerShownCard))
        dealerDisplayArray.push("card back red.png")

        setDealerHand(newHand);
        setDisplayDealerCards(dealerDisplayArray);
        
        setDealerScore(cardAdd([dealerShownCard]));
        setButtonDisabled(true);
    }

    function dealerTurnStart(){
        setPlayerEndTurn(true);
        let newDealerDisplayArray = displayDealerCards.slice(0, displayDealerCards.length + 1);
        
        newDealerDisplayArray[1] = dealerHiddenCard;


        setDisplayDealerCards(newDealerDisplayArray);
        setDealerScore(cardAdd(dealerHand));
        setDealerDraw(true);
    
    }


    function setWinnerFunc(winnerNum){
        let playerWins = "Player Wins!"
        let dealerWins = "Dealer Wins :("
        let tie = "A tie happens, push"
        switch(winnerNum){
            case 0:
                return
            case 1:
                setGameOver(true)
                winnerFunc(playerWins)
                break;
            case 2:
                setGameOver(true)
                winnerFunc(dealerWins)
                break;
            case 3:
                setGameOver(true)
                winnerFunc(tie)
                break;
        }
    }
    function CheckWinner(){
        let playerWins = 1
        let dealerWins = 2
        let tie = 3
        let result = 0;


        if(score > 21){ // player busts
            result = dealerWins
        }
        if(playerEndTurn && dealerEndTurn){
            if(score === 21 && dealerScore !== 21){ //player 21
            result = playerWins;
            }
            if(dealerScore == 21 && score !== 21){  // dealer 21
                result = dealerWins
            }

            if(score < 21 && dealerScore > 21){ //dealer busts
                result = playerWins
            }
            if(score > dealerScore && score < 21){  //player greater score
                result = playerWins
            }
            if(dealerScore > score && dealerScore < 21){ // dealer score greater
                result = dealerWins
            }
            if(dealerScore == score){
                result = tie
            }
        }
        console.log(result)
        setWinnerFunc(result);

    }
    function displayDealer(){

        return displayDealerCards.map((png, index) => {

            if (index === 1 && !playerEndTurn) {

                return (
                <div key = {index} className={styles.flippedDealer}>
                <div className={styles.backCard}>
                </div>
                <div className={styles.frontCard}>
                    <img
                    key={png}
                    src={`/CardPNGs/${png}`}
                    className={styles.dealt}
                    alt={png}
                    />
                </div>
                </div>
                );
            }
        return (
            <div key= {index} className={styles.card}>
            <div className={styles.backCard}>
                <img key = {index} src={'/CardPNGs/card back red.png'}/>
            </div>
            <div className={styles.frontCard}>
            <img
                key = {png}
                src = {`/CardPNGs/${png}`}
                className = {styles.dealt}
            />
            </div>
            </div>
        );
    });
}



    return(
        <>
        <div className={styles.Game}> 
            {!betAllow && <div className={styles.buttons}>

                <button disabled={buttonDisabled}onClick={playerTurnStart}>Start game</button>
                <br></br>
                <button disabled={!buttonDisabled || gameOver} onClick={drawCard}>Hit</button>
                <br></br>
                <button disabled ={!buttonDisabled || gameOver} onClick={dealerTurnStart}>Stand</button>
                <br></br>
                <button disabled={!buttonDisabled || gameOver || !allowDouble} onClick={double}>Double</button>
                {resetButton()}
            </div>}
            
            <div className={styles.cards}>
            {buttonDisabled && <p>Your Cards:</p>}
            {buttonDisabled && <p>Your Score: {score}</p>}
            <div className={styles.displayCards}>
                {displayHand()}
            </div>
            {buttonDisabled && <p>Dealer Cards:</p>}
            {buttonDisabled && <p>Dealer Score: {dealerScore}</p>}
             <div className={styles.displayCards}>
                {displayDealer()}
            </div>
            </div>
        </div>

        </>
    );
};
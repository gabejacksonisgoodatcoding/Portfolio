'use client'
import React, { use, useEffect, useState } from 'react';
import MyHeader from '@/app/components/myHeader/myHeader';
import styles from './Blackjack.module.css';

import {createPngMap, Card, Deck, dealPlayer, cardAdd} from '@/app/Blackjack/cardToPNG';



export default function Blackjack(){

    const [myDeck, setMyDeck] = useState(() =>{
        return new Deck();
    });

    const[playerHand, setPlayerhand] = useState([]);
    const [dealerHand, setDealerHand] = useState([]);



    const[displayCards, setDisplayCards] = useState([]);
    const[displayDealerCards, setDisplayDealerCards] = useState([]);

    const[score, setScore] = useState(() =>{
        return cardAdd(playerHand);
    });
     const[dealerScore, setDealerScore] = useState(() =>{
        return cardAdd(dealerHand);
    });

    const[buttonDisabled, setButtonDisabled] = useState(false);
    const[dealerTurn, setDealerTurn] = useState(false);
    const mymap = createPngMap(myDeck);

    const [dealerHiddenCard, setDealerHiddenCard] = useState(null);




    useEffect(()=>{
        myDeck.shuffle();
        console.log("Im usingEffect");
    },[]);

    useEffect(()=>{
        if(!dealerTurn){
            return
        }
        if (score !== 21 && dealerScore < 17 && dealerScore !== 21) {
            setTimeout(() => {
            dealerDrawCard(); // This updates dealerScore
            }, 500);
        } else {
            setDealerTurn(false); // Stop drawing if done
  }},[dealerScore, dealerTurn]);

    function playerTurnStart(){
       let newHand = dealPlayer(myDeck);
       console.log(newHand[0] + newHand[1]);
       setPlayerhand(newHand);
       for(const card of newHand){
            setDisplayCards(prev => [...prev, mymap.get(card)]);
       }
       setScore(cardAdd(newHand));
       setButtonDisabled(true)
    }

    function drawCard(){
        let newCard = myDeck.drawCard();
        //console.log(newCard);
        let newHand = [...playerHand.slice(0, playerHand.length + 1), newCard];
        setPlayerhand(newHand);
        setDisplayCards(prev => [...prev, mymap.get(newCard)]);
        console.log("Player Hand: "+ playerHand);
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
        let imageArray = []
        for(const png of displayCards){
            imageArray.push(<img key={png} src={`/CardPNGs/${png}`}></img>);
        }
        return imageArray
    }
    function playerTurnStart(){
        let newHand = dealPlayer(myDeck);
        console.log(newHand[0] + newHand[1]);
        setPlayerhand(newHand);
        for(const card of newHand){
                setDisplayCards(prev => [...prev, mymap.get(card)]);
        }
        setScore(cardAdd(newHand));

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
        let newDealerDisplayArray = displayDealerCards.slice(0, displayDealerCards.length + 1);
        
        newDealerDisplayArray[1] = dealerHiddenCard;

        console.log("New Dealer Display Array[1] = "+ newDealerDisplayArray[1])
        setDisplayDealerCards(newDealerDisplayArray);
        setDealerScore(cardAdd(dealerHand));

        setDealerTurn(true);
        
    }

    function displayDealer(){
        let imageArray = []
        for(const png of displayDealerCards){
            imageArray.push(<img key={png} src={`/CardPNGs/${png}`}></img>);
        }
        return imageArray
    }


    return(
        <>
        <MyHeader>
        </MyHeader>
        <div className={styles.Game}>
            <button disabled = {buttonDisabled} onClick={playerTurnStart}>Start game</button>
            <button disabled = {!buttonDisabled}onClick={drawCard}>draw cards</button>
            <button disabled = {!buttonDisabled}onClick={dealerTurnStart}>End Turn</button>
            <p>Your Cards:</p>
            <p>Your Score: {score}</p>
            <div className={styles.displayCards}>
                {displayHand()}
            </div>
            <p>Dealer Cards:</p>
            <p>Dealer Score: {dealerScore}</p>
             <div className={styles.displayCards}>
                {displayDealer()}
            </div>

        </div>



        </>
    );
};
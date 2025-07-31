'use client'
import React from 'react';
import MyHeader from '@/app/components/myHeader/myHeader';


class Deck{

    constructor(){
        this.myDeck = [];
        const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        ranks.forEach(rank => {
            suits.forEach(suit =>{
                this.myDeck.push(new Card(rank, suit));
            });
        });
    };

    displayDeck(){
        this.myDeck.forEach(card =>{
            card.displayCard();
        });
    };

    shuffle(){
        for (let i = this.myDeck.length - 1; i > 0; i--) {
            // Pick a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));

            // Swap elements at i and j
            [this.myDeck[i], this.myDeck[j]] = [this.myDeck[j], this.myDeck[i]];
        }
        return this.myDeck;
    }
    drawCard(){
        return this.myDeck.pop();
    }

}

class Card{
    constructor(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }
    displayCard(){
        console.log(this.rank + ' ' + this.suit);
    }
}


export default function Blackjack(){

    let aDeck = new Deck();
    
    aDeck.drawCard();
    aDeck.displayDeck();

    return(
        <>
        <MyHeader>
        </MyHeader>
        </>
    );
};

const path = require('path');



export class Deck{

    constructor(){
        this.myDeck = [];
        const suits = ["hearts", "diamonds", "spades", "clubs"];
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
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
        let drawnCard = this.myDeck.pop();
        return drawnCard;
    }
    Array(){
        return this.myDeck;
    }

}

export class Card{
    constructor(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }
    displayCard(){
        console.log(this.rank + ' ' + this.suit);
    }
    
}

function createFileArray(){
    let fileArray = [];
    const suits = ["hearts", "diamonds", "spades", "clubs"];
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    ranks.forEach(rank => {
        suits.forEach(suit =>{
            fileArray.push(rank + "_of_" + suit + '.png');
        });
    });
    return fileArray;
}


export function cardAdd(hand = []){
    let total = 0;
    let aceCount = 0;

    for(const card of hand){
        if(!["jack", "queen", "king", "ace"].includes(card.rank)){
            total+=parseInt(card.rank);
        }else if(card.rank != "ace"){
            total += 10;
        }else{
            total += 11;
            aceCount++;
        }
    }
    while(total > 21 && aceCount >0){
        total -= 10;
        aceCount--;
    }
    return total;
}


export function dealPlayer(deck = Deck){
    let playerHand = [];
    while (playerHand.length <2){
        const dealtCard = deck.drawCard();
        playerHand.push(dealtCard);
    }
    return playerHand;
}





export function createPngMap(deck){
    const files = createFileArray();
    let myMap = new Map();
    let myDeck = deck;
        myDeck.Array().forEach(card =>{
            for(const png of files){
                if(png.includes(card.rank) && png.includes(card.suit)){
                    myMap.set(card, png);
                    break
                }
            }
        })
        return myMap;
}









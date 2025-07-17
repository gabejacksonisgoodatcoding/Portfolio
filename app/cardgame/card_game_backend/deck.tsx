import {Card} from './card'

export class Deck{

    private deckArray: Array<Card>;
    constructor(){
        this.deckArray = [];
    }

    addCard(card: Card){
        this.deckArray.push(card);
    }

    drawCard(){
        if(this.deckArray.length <= 1){
            return console.error("Deck out of cards");
        }else{
            return this.deckArray.pop();
        }

    }


}
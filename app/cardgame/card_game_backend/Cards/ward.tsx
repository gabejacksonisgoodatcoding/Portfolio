import * as Card from '../card';

export function ward(){
    let baseCard = new Card.Card(2);
    let ward = new Card.BlockCard(baseCard, 3);
    return ward;
}
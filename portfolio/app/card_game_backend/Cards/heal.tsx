import * as Card from '../card';

export function heal(){
    let baseCard = new Card.Card(1);
    let heal = new Card.HealCard(baseCard, 3);
    return heal;
}
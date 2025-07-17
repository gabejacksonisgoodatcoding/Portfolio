import {Card, cardType, DamageCard, BlockCard, HealCard} from './card';
import {Player} from './player';

export function PlayCard(card: Card, target: Player){

    if(card instanceof DamageCard){
        let targetBlock = target.getBlock();
        if(targetBlock <= 0){ //unblocked damage
            target.setHealth(target.getHealth() - card.getDamage());
        }if(targetBlock >= card.getDamage()){ //damage gets blocked
            target.setBlock(target.getBlock() - card.getDamage());
        }else{ //damage overflow
            let overflowDamage = card.getDamage() - targetBlock;
            target.setHealth(target.getHealth() - overflowDamage);
            target.setBlock(0);
        }
    }
    if(card instanceof BlockCard){
        target.setBlock(target.getBlock() + card.getBlock());
    }

    if(card instanceof HealCard){
        target.setHealth(target.getHealth() + card.getHeal());
    }
}

export function startGame(){
    
}

export function endTurn(){

}
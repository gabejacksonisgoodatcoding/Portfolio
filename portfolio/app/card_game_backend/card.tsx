

export class Card{

    public constructor(manaCost: number){
        this.manaCost = manaCost;

    }
    public manaCost: number;

}

export abstract class CardDecorator extends Card{
    protected myCard: Card;

    constructor(card: Card){
        super(card.manaCost);
        this.myCard = card;
    }


}

export class DamageCard extends CardDecorator{

    private damageValue: number;

    constructor(card: Card, damageValue = 0){
        super(card);
        this.damageValue = damageValue | 0;
    }

    getDamage(){
        return this.damageValue;
    }
    setDamage(damage: number){
        this.damageValue = damage;
    }

}

export class BlockCard extends CardDecorator{
    private blockValue: number;

    public constructor(card: Card, blockValue: number){
        super(card);
        this.blockValue = blockValue | 0;
    }

    getBlock(){
        return this.blockValue;
    }
    setBlock(block: number){
        this.blockValue = block;
    }
}

export class HealCard extends CardDecorator{
    private healValue: number;

    public constructor(card: Card, healValue: number){
        super(card);
        this.healValue = healValue | 0;
    }
    getHeal(){
        return this.healValue;
    }
    setHeal(heal: number){
        this.healValue = heal;
    }

}


export enum cardType {
  Damage = 'damage',
  Block = 'block',
  Heal = 'heal',
}
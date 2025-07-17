import React from 'react';
import styles from './fireball.module.css';
import * as Card from '../../card';

export function Fireball(){
    let baseCard = new Card.Card(3);
    let fireball = new Card.DamageCard(baseCard, 3);
    return fireball;
}

export default function FireballCard(){

    let fireball_obj = Fireball();



    return(
        <>
        <div className={styles.cardborder}>
            <h1>
                Mana cost: {fireball_obj.manaCost}
            </h1>
            <h2>
                Fireball
            </h2>
            <h3>
                Damage: {fireball_obj.getDamage()}
            </h3>
        </div>
        </>
    )
}
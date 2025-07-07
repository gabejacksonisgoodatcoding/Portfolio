export class Player{
    public name: string;
    private health: number;
    private block: number;

    constructor(name: string){
        this.name = name;
        this.health = 20;
        this.block = 0;
    }

    getHealth(){
        return this.health;
    }

    setHealth(newHealth: number){
        this.health = newHealth;
    }

    getBlock(){
    return this.block;
    }

    setBlock(newBlock: number){
        this.block = newBlock;
    }
}
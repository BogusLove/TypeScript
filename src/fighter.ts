import { IFighter } from './IFighter';

export class Fighter implements IFighter {
    protected name:string;
    protected health:number;
    protected power:number;
    constructor(name:string = 'fighter', health:number = 0, power:number = 0) {
        this.name = name;
        this.health = health;
        this.power = power;
    }
    getName() {
        return this.name;
    }
    getHealth() {
        return this.health;
    }
    setDamage(damage:number = 0) : void {
        this.health = this.health - damage;
        console.log(`${this.name} health is: ` + `${this.health}`);
    }
    hit(enemy:IFighter, point:number = 0) {
        enemy.setDamage(point * this.power);
    }
    knockout() {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                console.log('knockout is over');
                resolve();
            }, 500);
        })
    }
}
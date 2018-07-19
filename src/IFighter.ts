export interface IFighter {
    setDamage(damage:number) : void;
    hit(enemy:IFighter, point:number) : void;
    knockout() : Promise<void>;
}
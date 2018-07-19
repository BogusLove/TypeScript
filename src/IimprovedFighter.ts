import { IFighter } from "./IFighter";

export interface IimprovedFighter extends IFighter {
    doubleHit(enemy:IFighter, point:number) : void;
}
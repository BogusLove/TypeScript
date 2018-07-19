import { Fighter } from './fighter';
import { IimprovedFighter } from './IimprovedFighter';
import { IFighter } from './IFighter';

export class ImprovedFighter extends Fighter implements IimprovedFighter {
    doubleHit(enemy:IFighter, point:number) {
        super.hit(enemy, 2 * point);
    }
}
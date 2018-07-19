import { Fighter } from "./fighter";
import { ImprovedFighter } from "./improvedFighter";
import { fight } from './fight';

let user1 = new Fighter("fighter1", 100, 1);
let user2 = new ImprovedFighter("fighter2", 100, 1);

fight(user1, user2, [34, 23, 20, 23, 90, 12, 90]);
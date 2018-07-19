import { Fighter } from "./fighter";

export async function fight(fighter:Fighter, improvedFighter:Fighter, point:number[]) {
    if (point.length > 0) {
        for (let i:number = 0; i < point.length; i++) {
          if (fighter.getHealth() > 0 && improvedFighter.getHealth() > 0) {
            if (i % 2 !== 0) {
              fighter.hit(improvedFighter, point[i]);
            } else {
              improvedFighter.hit(fighter, point[i]);
            }
          } 
          if (fighter.getHealth() <= 0) {
              console.log(`${fighter.getName()} in knockout`);
              try {
                await fighter.knockout();
                console.log(`${improvedFighter.getName()} is winner`);
                break;
              } catch(err) {
                console.log(err);
              }
          } 
          if (improvedFighter.getHealth() <= 0) {
              console.log(`${improvedFighter.getName()} in knockout`);
              try {
                await improvedFighter.knockout();
                console.log(`${fighter.getName()} is winner`);
                break;
              } catch (err) {
                console.log(err);
              }
            }
          }
        } else {
          console.log('No point values for fight');
        }
}
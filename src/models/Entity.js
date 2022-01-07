/**
 * Base class for creating players and enemies. Possibly for allies in a future update.
 * Contains methods that are shared among all entities within the game.
 */
export default class Entity{
    constructor(health=10, attack=1, defense=0) {
        this.health = health
        this.attack = attack
        this.defense = defense
    }
    isDead(){
        return this.health <= 0
    }

    takeDamage(incomingDmg){
        let dmg = incomingDmg - this.defense

        if(dmg < 1){
            dmg = 1
        }

        this.health = this.health - dmg

    }

    doDamage(){
        return this.attack
    }

}

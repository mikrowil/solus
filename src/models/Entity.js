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

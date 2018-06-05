"use strict";

function Hero(name, secretIdentity, health){
    LivingThing.call(this, name, health);
    this.secretIdentity = secretIdentity;
}

Hero.prototype.attack = function(monster) {
    console.log(monster);
    console.log(this.health);
    console.log(monster.health);
    let monsterDmg = Math.floor(Math.random()*7);
    let heroDmg = Math.floor(Math.random()*11);
    this.health = this.health - monsterDmg;
    monster.health = monster.health - heroDmg;
    console.log(this.health);
    console.log(monster.health);
}

Hero.prototype.fight = function(monsters){
    this.attack(monsters[1]);
    
}
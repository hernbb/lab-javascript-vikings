// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.damage = damage;
    this.health -= this.damage;
    return;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.damage = damage;
    this.health -= this.damage;
    if (this.health > 0) {
      return `${this.name} has received ${this.damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.damage = damage;
    this.health -= this.damage;
    if (this.health > 0) {
      return `A Saxon has received ${this.damage} points of damage`;
    } else {
      return 'A Saxon has died in combat';
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const saxonRamdom = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingRamdom = Math.floor(Math.random() * this.vikingArmy.length);
    const ramdomSaxon = this.saxonArmy[saxonRamdom];
    const ramdomViking = this.vikingArmy[vikingRamdom];
    let result = ramdomSaxon.receiveDamage(ramdomViking.attack());
    if (ramdomSaxon.health <= 0) {
      this.saxonArmy.splice(ramdomSaxon, 1);
    }
    return result;
  }
  saxonAttack() {
    const saxonRamdom = Math.floor(Math.random() * this.saxonArmy.length);
    const vikingRamdom = Math.floor(Math.random() * this.vikingArmy.length);
    const ramdomSaxon = this.saxonArmy[saxonRamdom];
    const ramdomViking = this.vikingArmy[vikingRamdom];
    let result = ramdomViking.receiveDamage(ramdomSaxon.attack());
    if (ramdomViking.health <= 0) {
      this.vikingArmy.splice(ramdomViking, 1);
    }
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

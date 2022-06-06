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
  saxonAttack() {}
  showStatus() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

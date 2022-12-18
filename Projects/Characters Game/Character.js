class Character {
   constructor(name, lifePts, attackPts, DefensePts) {
      this.name = name 
      this.lifePts = lifePts
      this.attackPts = attackPts
      this.DefensePts = DefensePts
   }

   attack(targetCharacter) {
      targetCharacter.lifePts -= this.attackPts - targetCharacter.DefensePts
   }
} 

module.exports = Character

class  TransporteSpaceship {
     constructor(name) {
          this.name = name
          this.currentVelocity = 0
     } 

     set velocity(newVelocity) { //set atribui um valor ao método
          if(newVelocity > 120) {
               this.currentVelocity = 120
          }else {
               this.currentVelocity = newVelocity
          } 
     }
}

let spaceship = new TransporteSpaceship(`Transportador`)

spaceship.velocity = 130

console.log(spaceship)
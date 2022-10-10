class ResourceProcessorStation {
     constructor(name, monthlyProecessing){
     this.name = name
     this.monthlyProecessing = monthlyProecessing
     }
     
     static calculateProcessInHours(monthlyProecessing, hours) {
          return monthlyProecessing / 720 * hours
     }
}


let processor = new ResourceProcessorStation( "Gaia", 2000)
let totalProcessed
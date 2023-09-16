class ResourceProcessStation {
     constructor(name, monthlyProcessedLoad) {
          this.name = name
          this.monthlyProcessedLoad = monthlyProcessedLoad
     }

     get weeklyProcessedLoad() {
          return this.monthlyProcessedLoad / 4
     }
}

let resourceProcessed = new ResourceProcessStation(`Gaia`, 500)

console.log(resourceProcessed.weeklyProcessedLoad)
resourceProcessed.monthlyProcessedLoad = 600
console.log(resourceProcessed.weeklyProcessedLoad)

class Product {
   constructor(name, description, price) {
      this.name = name 
      this.description = description
      this.price = price
      this.InStock = 0
   }

   AddToStock(quantity) {
      this.InStock += quantity
   }

   CalculateDiscount(discount) {
      return this.price * ((100 - discount) / 100)
   }
}

const watch = new Product("Relógio de Pulso", "Belo relógio Masculino, por um ótimo preço", 98)
watch.AddToStock = 99
const CalculateDiscount = watch.CalculateDiscount(15) 

console.log(watch)
console.log(CalculateDiscount)
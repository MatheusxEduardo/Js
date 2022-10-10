const arr = ["Frodo", "Sam", "Mery", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//Adicionar Elementos ao final do arrey
//push
arr.push("Boromir")
console.log(arr)

//Adicionar Elementos ao coemço do arrey
//unshift
arr.unshift("Radagast")
console.log(arr)

//Remover elementos no final 
// pop
let ultimoElemento = arr.pop()
console.log(ultimoElemento)

//Remover elementos no começo
//shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//Localizar por um Elemento
//Includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

// Pesquisa peço indice do elemento 
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar
// slice 'faz uma copia do array sem alterar o original'
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// Concat 'Junta os arreys'
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substituição dos Elementos
//splice
const itensRemovidos = sociedade.splice(indice, 1, "Gandalf o cinzento")
console.log(sociedade)
console.log(itensRemovidos)

// Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length; indice++){
     const elemento = sociedade[indice]
     console.log(`${elemento} se encontra na posição ${indice}`)
}
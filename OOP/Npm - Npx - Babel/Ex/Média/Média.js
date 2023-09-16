let average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0)
  return sum / numbers.length
}

console.log(`Méida Arimética Simples: ${average(3, 6, 10, 9)}`)

const weightedAverage = (...entries) => {
  const sum = entries.reduce((accum, { number, weight}) => accum + (number * (weight ?? 1)), 0)
  const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
  return sum / weightSum
}

console.log(`Média Ponderada: ${weightedAverage(
  { number: 9, weight: 3 },
  { number: 7, },
  { number: 10, weight: 1 },
)}`)

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b)
  const middle = Math.floor(orderedNumbers.length / 2)
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle]
  }
  const firstMediam = orderedNumbers[middle - 1]
  const SecondMediam = orderedNumbers[middle]
  return average(firstMediam, SecondMediam)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)
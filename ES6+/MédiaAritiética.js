let average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0)
  return sum / numbers.length
}

console.log(`Méida Arimética Simples: ${average(3, 6, 10, 9, 55)}`)
async function calcularIMCComNiveisObesidade(peso, altura) {
   if (peso <= 0 || altura <= 0)
     throw new Error("O peso e a altura devem ser valores positivos.");
 
   const imc = (peso / (altura ** 2)).toFixed(2);
   const niveisObesidade = [
     "Abaixo do peso",
     "Peso normal",
     "Sobrepeso",
     "Obesidade grau 1",
     "Obesidade grau 2",
     "Obesidade grau 3"
   ][Math.floor(imc / 5)];
 
   return { imc, niveisObesidade };
 }
 calcularIMCComNiveisObesidade(90, 1.82) 
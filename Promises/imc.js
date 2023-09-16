async function calcularIMCComNiveisObesidade(peso, altura) {
   return new Promise((resolve, reject) => { //promise que valida a entrada de dados 
     if (peso <= 0 != Number || altura <= 0 != Number) {
       reject("O peso e a altura devem ser valores positivos.");
     }
 
     const imc = peso / (altura * altura); // Calculo de imc
     const niveisObesidade = obterNiveisObesidade(imc);
     
     const resultado = {
       imc: imc.toFixed(2),
       niveisObesidade: niveisObesidade
     };
 
     resolve(resultado);
   });
 }
 
 function obterNiveisObesidade(imc) { //função que retorna o nível de obesidade
   if (imc < 18.5) {
     return "Abaixo do peso";
   } else if (imc < 25) {
     return "Peso normal";
   } else if (imc < 30) {
     return "Sobrepeso";
   } else if (imc < 35) {
     return "Obesidade grau 1";
   } else if (imc < 40) {
     return "Obesidade grau 2";
   } else {
     return "Obesidade grau 3";
   }
 }
 calcularIMCComNiveisObesidade(70, `s`) /// parametros para inicar a função
 .then(resultado => {
   console.log(`O IMC é ${resultado.imc}.`);
   console.log(`Níveis de obesidade: ${resultado.niveisObesidade}.`);
 })
 .catch(error => console.error(`Ocorreu um erro: ${error}`));

function calculateTMB() {
   var weight = parseFloat(document.getElementById('weight').value);
   var height = parseFloat(document.getElementById('height').value);
   var age = parseInt(document.getElementById('age').value);
   var gender = document.querySelector('input[name="gender"]:checked').value;
   var formula = document.getElementById('formula').value;
   var resultElement = document.getElementById('result');
 
   if (!weight || !height || !age || weight <= 0 || height <= 0 || age <= 0) {
     resultElement.innerHTML = 'Por favor, preencha todos os campos com valores numéricos positivos.';
     return;
   }
 
   var tmb;
   var description = '';
 
   if (formula === 'harris_benedict') {
     tmb = (gender === 'male') ? 66 + (13.75 * weight) + (5 * height) - (6.75 * age)
                               : 655 + (9.56 * weight) + (1.85 * height) - (4.68 * age);
     description = 'Essa fórmula é amplamente utilizada para estimar a TMB. É uma boa opção para a população em geral.';
   } else if (formula === 'mifflin_st_jeor') {
     tmb = (gender === 'male') ? (10 * weight) + (6.25 * height) - (5 * age) + 5
                               : (10 * weight) + (6.25 * height) - (5 * age) - 161;
     description = 'Essa fórmula é considerada uma das mais precisas para estimar a TMB. É recomendada para indivíduos com sobrepeso ou obesidade.';
   } else if (formula === 'katch_mcardle') {
     var bodyFatPercentage = parseFloat(document.getElementById('body-fat-percentage').value);
     if (!bodyFatPercentage || bodyFatPercentage <= 0) {
       resultElement.innerHTML = 'Por favor, digite uma porcentagem de gordura corporal válida.';
       return;
     }
     var leanMass = weight - (weight * (bodyFatPercentage / 100));
     tmb = 370 + (21.6 * leanMass);
     description = 'Essa fórmula é mais precisa para indivíduos que conhecem sua porcentagem de gordura corporal. É recomendada para atletas e pessoas com bom conhecimento da composição corporal.';
   } else if (formula === 'cunningham') {
     var bodyFatPercentage = parseFloat(document.getElementById('body-fat-percentage').value);
     if (!bodyFatPercentage || bodyFatPercentage <= 0) {
       resultElement.innerHTML = 'Por favor, digite uma porcentagem de gordura corporal válida.';
       return;
     }
     var leanMass = weight - (weight * (bodyFatPercentage / 100));
     tmb = 500 + (22 * leanMass);
     description = 'Essa fórmula também requer conhecimento da porcentagem de gordura corporal. É recomendada para atletas de alto nível e fisiculturistas.';
   } else if (formula === 'cunningham_lbm') {
     var leanBodyMass = parseFloat(document.getElementById('lean-body-mass').value);
     if (!leanBodyMass || leanBodyMass <= 0) {
       resultElement.innerHTML = 'Por favor, digite um valor válido para a massa corporal magra.';
       return;
     }
     tmb = 370 + (21.6 * leanBodyMass);
     description = 'Essa fórmula utiliza a massa corporal magra diretamente para o cálculo da TMB. É recomendada para indivíduos com bom conhecimento da composição corporal.';
   } else {
     resultElement.innerHTML = 'Por favor, selecione uma fórmula válida.';
     return;
   }
 
   resultElement.innerHTML = 'Sua TMB é: ' + tmb.toFixed(2) + ' cal';
   resultElement.innerHTML += '<br>' + description;
 }
 
 function clearFields() {
   document.getElementById('weight').value = '';
   document.getElementById('height').value = '';
   document.getElementById('age').value = '';
   document.getElementById('body-fat-percentage').value = '';
   document.getElementById('lean-body-mass').value = '';
   document.getElementById('result').innerHTML = '';
   document.getElementById('description').innerHTML = '';
   document.getElementById('description-container').style.display = 'none';
 }
 
 
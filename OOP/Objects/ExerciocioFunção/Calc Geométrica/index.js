function calculArareaDoTriangulo(){
     const base = parseFloat(prompt("Informe a base do triângulo:"))
     const altura = parseFloat(prompt("Informe a altura do triângulo:"))
     return base * altura
}

function calcularAreaDoRetangulo(){
     const base = parseFloat(prompt("Informe a base do Retângulo:"))
     const altura = parseFloat(prompt("Informe a altura do Retângulo:"))
     return base * altura
}

function calcularAreaDoQuadrado(){
     const lado = parseFloat(prompt("Informe a área do quadrado:"))
     return lado * lado
}
function calcualrAreaDoTrapezio(){
     const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
     const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
     const altura = parseFloat(prompt("Informe a altura do trapézio:"))
     return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaDoCirculo(){
     const raio = parseFloat(prompt("Informe o raio do círculo:"))
     return (3.14 * raio * raio)
}

function exibirMenu() {
     return prompt(
          `Calculadora Geométrica\n
          1. Calcular área do triângulo\n
          2. Calcular área do retângulo\n
          3. Calcular área do quadrado\n
          4. Calcular área do trapézio\n
          5. Calcular área do circulo\n
          6. Sair\n`
     )
}

function execultar() {
     let opcao = ""

     do {
          opcao = exibirMenu()
          let resultado

          switch(opcao) {
               case "1":
                    resultado = calculArareaDoTriangulo()
                    break
               case "2":
                    resultado = calcularAreaDoRetangulo()
                    break
               case "3":
                    resultado = calcularAreaDoQuadrado()
                    break
               case "4":
                    resultado = calcualrAreaDoTrapezio()
                    break
               case "5":
                    resultado = calcularAreaDoCirculo()
                    break
               case "6":
                    alert("Saindo...")
                    break
               default:
                    alert("Opção invalida...")
                    break
          }

          if(resultado)
          alert(`Resultado: ${resultado}`)
     }while (opcao !== "6")
}

execultar()
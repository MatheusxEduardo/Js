const baralho = []
let opcao = ""

do {
     opcao = prompt(`Cartas do baralho: ${baralho.length}
     \n\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair`)

     switch(opcao){
          case "1":
               const novaCarta = prompt(`Qual carta será adicionada? `)
               baralho.push(novaCarta)
               break
          case "2":
               const cartaPuxada = baralho.pop()
               if (!cartaPuxada) {
                    alert("Não á nenhuma carta")
               }else {
                    alert(`Você puxou a carta ${cartaPuxada}`)
               }
               break
          case "3":
               alert("Saindo...")
               break
          default:
               alert("Opção Inválida")
     }
}while(opcao != 3)
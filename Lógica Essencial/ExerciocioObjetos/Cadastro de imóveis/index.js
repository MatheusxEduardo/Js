const imoveis = []
let opcao = ""

do {
     opcao = prompt(`Bem vindo ao cadastro de imóveis!\n
     Total de imóveis: ${imoveis.length}\n
     Escolha uma opção:\n   1. Novo Imóvel\n    2. Lista de imóveis\n    3. Sair`)

     switch(opcao) {
          case "1":
               const imovel = {}

               imovel.proprietario = prompt(`Nome do proprietario: \n`)
               imovel.quartos = prompt(`Quantidade de quartos: \n`)
               imovel.banheiro = prompt(`Quantidade de banheiros`)
               imovel.garagem = prompt(`Possui garagem? (sim/não)`)

               const confirmação = confirm(
               "Salvar este imóvel?\n" +
               "\nProproietário:" + imovel.proprietario +
               "\nQuartos:" + imovel.quartos +
               "\nBanheiros:" + imovel.banheiro +
               "\nGaragem:" + imovel.garagem
               )

               if (confirmação) {
                    imoveis.push(imovel)
                    alert("Imóvel salvo com sucesso.")
               }else {
                    alert("Voltando ao menu")
               }

               break
          case "2":
               for (let i = 0; i < imoveis.length; i++){
                    alert(`
                    Imóvel ${i+1}\n
                    Proprietario: ${imoveis[i].proprietario}\n
                    Quartos: ${imoveis[i].quartos}\n
                    Banheiros: ${imoveis[i].banheiro}\n
                    Garagem: ${imoveis[i].garagem}
                    `)
               }
               break
          case "3":
               alert(`Saindo...`)
               break
          default:
               alert(`Opção invalida.`)
     }

} while (opcao != "3")
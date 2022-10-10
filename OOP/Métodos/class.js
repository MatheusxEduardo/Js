const livro = {
     nome: "React Native",
     editora: "Casa do Código",
     paginas: 185,
     anunciar: function(){//método do objeto (função que acompanha objeto)
          console.log(`Indicamos o livro ${this.nome}!`)
     }
}

const nome = prompt(`Nome: `)
livro.nome = nome
livro.anunciar()
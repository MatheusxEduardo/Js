class User {
   constructor(fullname, email, password) {
      this.fullname = fullname
      this.email = email
      this.password = password
   }

   login(email, password) {
      if(this.email === email && this.password === password) {
         console.log(`Login Realizado com sucesso!`)
      } else {
         console.log(`Falha ao realizar login... Senha ou Email incorreto! `)
      }
   }
}

const john = new User("John Doe", "John@xxx.com", "1234")

john.login("John@xxx.com", "1234")
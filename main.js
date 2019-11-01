class Usuario {
  constructor(email, senha){
    this.usuarios = [];
    this.email = email;
    this.senha = senha;
  }
  add(data){ 
    /* Modelo de dados de um usuário 
      data = {
        email: "",
        senha: "",
      }
    */
    this.usuarios.push(data)
  }
  isAdmin(){
     return this.admin === true;
    
  }
};

class Admin extends Usuario {
  constructor(email, senha){
    super(email, senha);
      this.admin = true;
  }
}


var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');

console.log("User1 é admin? ", User1.isAdmin())
console.log("Adm1 é admin? ", Adm1.isAdmin())

//export  - Torna a classe acessível a outros diretorios do projeto

export class Cliente {
  /*Definição de atributos, propriedadas da classe */
  nome;

  // _variavel - Indica o campo privado da classe
  _cpf;

  //Usado sem o '_' por se referenciar a sua chamada de outra classe
  get cpf() {
    /*
      Retorna o valor do campo privado da classe 
      */
    return this._cpf
  }

  //Criação construtor classe, indica que para criar o objeto os parâmetros devem ser informados 
  constructor(nome, cpf) {
    this.nome = nome
    this._cpf = cpf
  }
}
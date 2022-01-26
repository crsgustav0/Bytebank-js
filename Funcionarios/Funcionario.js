
//  export  - Torna a classe acessível a outros diretorios do projeto
export class Funcionario {

    //Criação construtor classe, definição modelo de instância
    constructor(nome, salario, cpf) {
        /*Inicializa as propriedades da classe com 
        os valores passados via parâmetros*/
        this.nome = nome
        this.salario = salario
        this.cpf = cpf

        // Criação campo privado 'bonificacao'
        this._bonificacao = 1
        this._senha
    }

    getSenha() {
        return this._senha
    }

    cadastrarSenha(senha) {
        this._senha = senha
    }
}
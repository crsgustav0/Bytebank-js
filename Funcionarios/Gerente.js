import { Funcionario } from "./Funcionario.js";

//  export  - Torna a classe acessível a outros diretorios do projeto
export class Gerente extends Funcionario {
    //Criação construtor classe, definição modelo de instância
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)

        // Criação campo privado 'bonificacao'
        this._bonificacao = 1.1
    }
}
import { Conta } from "./Conta.js";

//export -Torna a classe acessivel a outros diretorios do projeto

//  extends - Utiliza as atribuições da classe Conta
export class ContaSalario extends Conta {
    constructor(cliente) {
        super(0, cliente, 100)
    }

    //Sobreescrevendo o comportamento da função 'sacar' da classe mãe 'Conta'
    /*Definição de função, método da classe*/
    sacar(valor) {

        const taxa = 1.01
        // '_'  - Usado para referencia a criação de um método privado da classe 'Conta'
        return this._sacar(valor, taxa)
    }

}
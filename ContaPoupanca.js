import { Conta } from "./Conta.js";

//export -Torna a classe acessivel a outros diretorios do projeto

//  extends - Utiliza as atribuições da classe Conta
export class ContaPoupanca extends Conta {

    //Criação construtor classe, definição modelo de instância
    constructor(saldoInicial, cliente, agencia) {
        /*
            Criação do objeto da classe Conta, necessária para a criação do objeto da classe ContaPoupanca passando as propriedades via parâmetros
        */
        super(saldoInicial, cliente, agencia)
    }

    //Sobreescrevendo o comportamento da função 'sacar' da classe mãe 'Conta'
    /*Definição de função, método da classe*/
    sacar(valor) {
    
        let taxa = 1.02
        //  Chamada método privado, necessário utilizar o 'super.' para referência da classe Conta
        return this._sacar(valor, taxa)
    }

}
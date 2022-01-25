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

}
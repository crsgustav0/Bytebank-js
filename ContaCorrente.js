import { Conta } from "./Conta.js";

//  export  - Torna a classe acessível a outros diretorios do projeto

//  extends - Utiliza as atribuições da classe Conta
export class ContaCorrente extends Conta {

    static numeroContas = 0

    //Criação construtor classe, indica que para criar o objeto os parâmetros devem ser informados 
    constructor(cliente, agencia) {
        /*
            Criação do objeto da classe Conta, necessária para a criação do objeto da classe ContaCorrente,
            passando as propriedades via parâmetros
        */
        super(0, cliente, agencia)
        /*Referente a contabilização total da criação de contas, não somente a 
        sua instância no momento de sua criação*/
        ContaCorrente.numeroContas += 1
    }

    //Sobreescrevendo o comportamento da função 'sacar' da classe mãe 'Conta'
    /*Definição de função, método da classe*/
    sacar(valor) {//Saque

        let taxa = 1.1
        //  Chamada método privado, necessário utilizar o 'super.' para referência da classe Conta
        return super._sacar(valor, taxa)
    }


}

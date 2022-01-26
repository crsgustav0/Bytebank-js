import { Cliente } from "./Cliente.js";
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

    /*Definição de função, método da classe*/
    sacar(valor) {//Saque

        let taxa = 1.1
        const valorSacado = taxa * valor

        /*this.propriedade, refere-se a conta informada*/
        if (this._saldo <= valor) {
            console.log('Saldo insuficiente')

            /*Finaliza a execução da função via validação*/
            return;
        }

        this._saldo -= valorSacado

        console.log(`Valor sacado ${valor}`, `Saldo atual ${this._saldo}`)

        /*Retorna o vaor sacado*/
        return valorSacado
    }


}

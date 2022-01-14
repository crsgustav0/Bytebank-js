//export  - Torna a classe acessível a outros diretorios do projeto

export class ContaCorrente {
    agencia;
    #saldo = 0;

    /*Definição de função, método da classe*/
    sacar(valor) {//Saque
        /*this.propriedade, refere-se a conta informada*/
        if (this.#saldo <= valor) {
            console.log('Saldo insuficiente')

            /*Finaliza a execução da função via validação*/
            return;
        }

        this.#saldo -= valor
        console.log(`Valor sacado ${valor}`, `Saldo atual ${this.#saldo}`)
    }

    depositar(valor) {//Deposito
        if (valor <= 0) {
            console.log('Valor incorreto')

            /*Finaliza a execução da função via validação*/
            return;
        }

        /*this.propriedade, refere-se a conta informada*/
        this.#saldo += valor

        console.log(`Valor depositado ${valor}`, `Saldo atual ${this.#saldo}`)
    }
}


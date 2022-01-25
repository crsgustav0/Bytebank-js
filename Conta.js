export class Conta { 
     //Criação construtor classe, definição modelo de instância
    constructor(saldoInicial, cliente, agencia) {
        /*Inicializa as propriedades da classe com 
        os valores passados via parâmetros*/
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    /*Definição de função, método da classe*/
    sacar(valor) {//Saque
        /*this.propriedade, refere-se a conta informada*/
        if (this._saldo <= valor) {
            console.log('Saldo insuficiente')

            /*Finaliza a execução da função via validação*/
            return;
        }

        this._saldo -= valor

        console.log(`Valor sacado ${valor}`, `Saldo atual ${this._saldo}`)

        /*Retorna o vaor sacado*/
        return valor
    }

    depositar(valor) {//Deposito
        if (valor <= 0) {
            console.log('Valor incorreto')

            /*Finaliza a execução da função via validação*/
            return;
        }

        /*this.propriedade, refere-se a conta informada*/
        this._saldo += valor

        console.log(`Valor depositado ${valor}`, `Saldo atual ${this._saldo}`)
    }

    transferir(valor, conta) {
        if (valor <= 0) {
            console.log('Valor incorreto')

            /*Finaliza a execução da função via validação*/
            return;
        }

        /*Chamada de função interna da classe*/
        const valorSacado = this.sacar(valor);

        conta.depositar(valorSacado);

    }
}

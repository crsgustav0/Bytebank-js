/*Criação de classe Cliente */
class Cliente {
    /*Definição de atributos, propriedadas da classe */
    nome;
    cpf;
}

class ContaCorrente {
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

/*Criação de um novo Cliente*/
const primeiroCliente = new Cliente()

/*Atribuição de propriedades*/
primeiroCliente.nome = 'Gustavo'
primeiroCliente.cpf = 12345678900

/*Criação de uma nova Conta Corrente*/
const contaCorrentePrimeiroCliente = new ContaCorrente()
contaCorrentePrimeiroCliente.agencia = 1001

/*Deposito*/
contaCorrentePrimeiroCliente.depositar(100)
/*Saque*/
contaCorrentePrimeiroCliente.sacar(50)

//console.log(primeiroCliente)
console.log(primeiroCliente, contaCorrentePrimeiroCliente)
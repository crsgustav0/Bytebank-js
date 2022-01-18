import { Cliente } from "./Cliente.js";

//export  - Torna a classe acessível a outros diretorios do projeto
export class ContaCorrente {
    agencia;

    // _variavel - Indica o campo privado da classe
    _cliente;
    _saldo = 0;

    //Usado sem o '_' por se referenciar a sua chamada de outra classe
    set cliente(novoValor) {
        /*
        Valida o objeto que chama a função, limitando seu acesso somente 
        a sua classe sem 'Cliente', acessando o campo privado 
        da classe 'ContaCorrente'
        */
        if (novoValor instanceof Cliente) {
            /*
            Atribui ao campo privado da classe o valor recebido
            via parâmetro
            */
            this._cliente = novoValor
        }
    }

    //Usado sem o '_' por se referenciar a sua chamada de outra classe
    get cliente() {
        /*
        Atribui ao campo privado da classe o valor recebido via parâmetro
        */
        return this._cliente
    }

    //Usado sem o '_' por se referenciar a sua chamada de outra classe
    get saldo() {
        return this._saldo
    }

    //Criação construtor classe, indica que para criar o objeto os parâmetros devem ser informados 
    constructor(agencia, cliente) {
        this.cliente = cliente
        this.agencia = agencia
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


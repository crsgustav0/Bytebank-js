// Conta - Classe abstrata, que não pode ser instânciada diretamente somente herdada
export class Conta {

    //Criação construtor classe, definição modelo de instância
    constructor(saldoInicial, cliente, agencia) {
        /*Inicializa as propriedades da classe com 
        os valores passados via parâmetros*/
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia

        // this.constructor - Retorna a origem da instância da classe Conta
        if (this.constructor == Conta) {
            throw new Error('Não é permitir instânciar diretamente um objeto do tipo Conta, por se tratar de uma classe abstrata')
        }
    }

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

    /* 
        sacar(valor) - Método abstrato que não pode ser instânciado diretamente, 
        somente sobrescrito 
        */
    /*Definição de função, método da classe*/
    sacar(valor) {//Saque
        throw new Error(`Não é permitido instânciar diretamente o método 'sacar' da classe Conta, por se tratar de uma função abstrata `)
    }

    // '_'  - Usado para referencia a criação de um método privado da classe 'Conta'
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor

        /*this.propriedade, refere-se a conta informada*/
        if (this._saldo <= valor) {
            console.log('Saldo insuficiente')

            /*Finaliza a execução da função via validação*/
            return 0;
        }

        this._saldo -= valorSacado

        console.log(`Valor sacado ${valor}`, `Saldo atual ${this._saldo}`)

        /*Retorna o vaor sacado*/
        return valorSacado
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

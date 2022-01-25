import { Cliente } from "./Cliente.js";

//export  - Torna a classe acessível a outros diretorios do projeto
export class ContaCorrente {

    static numeroContas = 0

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
        this._saldo = 0

        /*Referente a contabilização total da criação de contas, não somente a 
        sua instância no momento de sua criação*/
        ContaCorrente.numeroContas += 1
    }


}


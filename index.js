import { Cliente } from './Cliente.js'
import { Conta } from './Conta.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'

var agencia = 1001

/*Criação Conta Cliete*/
const primeiroCliente = new Cliente("Cristian", 11122233309)

/*Criação ContaCorrente*/
const primeiraContaCorrente = new ContaCorrente(1001, primeiroCliente, agencia)

/*Deposito*/
//primeiraContaCorrente.depositar(500)
/*Saque*/
//primeiraContaCorrente.sacar(50)

/*Criação ContaCorrente*/
//const segundaContaCorrente = new ContaCorrente(1002, segundoCliente)

//let valor = 200;
//primeiraContaCorrente.transferir(valor, segundaContaCorrente)

//segundaContaCorrente.saldo = 30000;
//console.log(primeiroCliente)
//console.log(primeiraContaCorrente)

//const contaPoupanca = new ContaPoupanca(50, primeiroCliente, agencia)
//contaPoupanca.sacar(10)

//console.log(contaPoupanca)
//console.log(primeiraContaCorrente)

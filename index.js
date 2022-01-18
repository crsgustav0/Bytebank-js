import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

/*Criação Conta Cliete*/
const primeiroCliente = new Cliente("Cristian", 11122233309);

/*Criação Conta Cliete*/
const segundoCliente = new Cliente("Gustavo", 88822233309);

/*Criação ContaCorrente*/
const primeiraContaCorrente = new ContaCorrente(1001, primeiroCliente);

/*Deposito*/
//primeiraContaCorrente.depositar(500)
/*Saque*/
//primeiraContaCorrente.sacar(50)

/*Criação ContaCorrente*/
const segundaContaCorrente = new ContaCorrente(1002, segundoCliente)

//let valor = 200;
//primeiraContaCorrente.transferir(valor, segundaContaCorrente)

//segundaContaCorrente.saldo = 30000;
console.log(primeiroCliente)
console.log(segundoCliente)
//console.log(segundaContaCorrente);
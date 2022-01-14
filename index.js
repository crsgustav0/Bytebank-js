import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

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
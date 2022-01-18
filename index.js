import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

/*Criação de uma nova Conta Corrente*/
const contaCorrentePrimeiroCliente = new ContaCorrente()
contaCorrentePrimeiroCliente.agencia = 1001
///*Criação de um novo Cliente*/
contaCorrentePrimeiroCliente.cliente = new Cliente()
/*Atribuição de propriedades*/
contaCorrentePrimeiroCliente.cliente.nome = 'Gustavo'
contaCorrentePrimeiroCliente.cliente.cpf = 12345678900

/*Criação de uma nova Conta Corrente*/
const contaCorrenteSegundoCliente = new ContaCorrente()
/*Criação de um novo Cliente*/
const segundoCliente = new Cliente()
contaCorrenteSegundoCliente.agencia = 1002
contaCorrenteSegundoCliente.cliente = new Cliente()
/*Atribuição de propriedades*/
contaCorrenteSegundoCliente.cliente.nome = 'Gustavo'
contaCorrenteSegundoCliente.cliente.cpf = 12345678916

///*Deposito*/
contaCorrentePrimeiroCliente.depositar(500)
///*Saque*/
//contaCorrentePrimeiroCliente.sacar(50)
//Transferência
contaCorrentePrimeiroCliente.transferir(200, contaCorrenteSegundoCliente)

console.log(contaCorrentePrimeiroCliente)
console.log(contaCorrenteSegundoCliente)
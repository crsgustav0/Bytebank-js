/*Criação de classe Cliente */
class Cliente {
    /*Definição de atributos, propriedadas da classe */
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

/*Criação de um novo Cliente*/
const primeiroCliente = new Cliente()
const segundoCliente = new Cliente()

/*Atribuição de propriedades*/
primeiroCliente.nome = 'Gustavo'
primeiroCliente.cpf = 12345678900
primeiroCliente.agencia = 1001
primeiroCliente.saldo = 0;
primeiroCliente.rg = 134567820;

segundoCliente.nome = 'Cristian'
segundoCliente.cpf = 45678912368
segundoCliente.agencia = 1001
segundoCliente.saldo = 0
segundoCliente.rg = 741852963;

console.log(primeiroCliente)
console.log(segundoCliente)
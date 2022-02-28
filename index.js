import { Cliente } from './Cliente.js'
import { Diretor } from './Funcionarios/Diretor.js'
import { Gerente } from './Funcionarios/Gerente.js'
import { AuthSystem } from './Auth/AuthSystem.js'

const diretor = new Diretor('Cristian', 10000, 12345678958)
diretor.cadastrarSenha('123456')

const gerente = new Gerente('Gustavo', 500, 12345678941)
gerente.cadastrarSenha('123456')

const authDiretor = AuthSystem.login(diretor, '123456')
console.log(`Diretor: ${diretor.nome} Autenticação: ${authDiretor}`)

const authGerente = AuthSystem.login(gerente, '123456')
console.log(`Gerente: ${gerente.nome} Autenticação: ${authGerente}`)
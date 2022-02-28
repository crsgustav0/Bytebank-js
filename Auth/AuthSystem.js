/*Torna a classe acessível a outros módulos do projeto*/
export class AuthSystem {
    /*Por se tratar de uma função específica somente a autenticação do usuário, 
    deve ser criada como privada*/
    static login(funcionario, senha) {
        return funcionario._senha == senha
    }
}
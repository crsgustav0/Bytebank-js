/*Torna a classe acessível a outros módulos do projeto*/
export class AuthSystem {
    /*Por se tratar de uma função específica somente a autenticação do usuário, 
    deve ser criada como privada*/
    static login(autenticavel, senha) {
        if (AuthSystem.ehautenticavel(autenticavel)) {
            return autenticavel.autenticar(senha)
        }
        return false;
    }

    static ehautenticavel(autenticavel) {
        /*
        in - Verifica a existencia de uma propriedade dentro do objeto
        */
        return 'autenticar' in autenticavel &&
            autenticavel.autenticar instanceof Function
    }
}
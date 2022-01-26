
//  export  - Torna a classe acessível a outros diretorios do projeto
export class SistemaAutenticacao {
    //Criação função estática
    static login(funcionario, senha) {
        /*Valida a senha cadastrada com a senha informada via parâmetro*/
        return funcionario.senha == senha

    }
}
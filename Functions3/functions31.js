let nome;
let senha;
let nomes = [];
let senhas = [];
let contador = 0;

//1 - Crie uma função que solicite dois valores ao usuário,
// um nome e uma senha e guarde cada um no seu respectivo array.
function SolicitarDados() {
    nome = prompt("Qual é o nome?");
    senha = prompt("Qual é a senha?");
    nomes[contador] =  nome;
    senhas[contador] = senha;
    contador++;
}

//2 - Crie uma função que solicite ao seu usuário o que ele deseja fazer:
// cadastrar, fazer login, excluir um cadastro ou encerrar o programa.
// Essa função deve retornar a opção escolhida pelo usuário.      
function PerguntarAcao() {
    let resposta = prompt("Qual operação deseja /n realizar?" + "1 - Cadastrar." + "2 - Fazer login." + "3 - Excluir um cadastro." + "4 - Encerrar o programa");
    return resposta;
} 

//3 - Crie uma função de login e recebe dois valores como parâmetro,
// um nome e uma senha, depois procure o nome recebido no array de nomes
// e em caso positivo compare a senha no array de senhas. Se as duas
// comparações forem válidas retorne true se uma delas não for válida retorne false.
function FazerLogin() {
    let nomeLogin = prompt("Digite o nome de login:");
    let senhaLogin = promt("Qual a semnhade login:");
    let loginEfetuado = false;
    for (i = 0; i < nomes.length; i++) {
        if (nomeLogin == nomes[i]) {
            if (senhaLogin == senhas[i]) {
                loginEfetuado = true;
                console.log("login efetuado com sucesso.")
            }
        }
        else (loginEfetuado == false) {
            console.log("Nome de usuário ou senha incorretos");
        }
    }
}

//4 - Crie uma função de exclusão de cadastro que recebe um nome como parâmetro,
// então procure pelo nome no array de nomes e exclua ele e a senha correspondente
// do outro varray, por fim organize o array para eliminar os espaços vazios.

function ExcluirCadastro() {
    let excluindoNome = ("Qual o nome do cadatro que deseja excluir?");
    let excluido = false;
    for (i = 0; i < nomes.length; i++) {
        if (excluindoNome == nomes[i]) {
            for (j = i; j < nomes.length - 1; j++) {
                nomes[k] = nomes[k - 1];
                senhas[k] = senhas[k - 1];
            }
            j++;
            console.log("Usuário excluído");
            excluido = true;
        }
        if (excluido == false) {
            console.log("Usuário não encontrado");
        }
    }

}
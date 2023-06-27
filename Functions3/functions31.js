let nome;
let senha;

PerguntarAcao();
//1 - Crie uma função que solicite dois valores ao usuário,
// um nome e uma senha e guarde cada um no seu respectivo array.
function SolicitarDados() {
    nome = prompt("Qual é o nome?");
    senha = prompt("Qual é a senha?");
}

//2 - Crie uma função que solicite ao seu usuário o que ele deseja fazer:
// cadastrar, fazer login, excluir um cadastro ou encerrar o programa.
// Essa função deve retornar a opção escolhida pelo usuário.      
function PerguntarAcao() {
    let resposta = prompt("Qual operação deseja /n realizar?" + "1 - Cadastrar." + "2 - Fazer login." + "3 - Excluir um cadastro." + "4 - Encerrar o programa");
    return resposta;
} 

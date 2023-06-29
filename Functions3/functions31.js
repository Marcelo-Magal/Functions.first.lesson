let nomes = [];
let senhas = [];
let contador = 0;
let continuar = true;

//5 - Utilizando as funções criadas, faça o fluxo de funcionamento do código,
// considere que o usuário pode escolher quando encerrar o programa conforme
// as opções e que no login caso seja bem sucedido retorna uma mensagem
// “Login feito com sucesso!” e em caso negativo “Nome ou senha incorretos!”

while (continuar) {
    let resposta = PerguntarAcao();

    switch(resposta) {
        case "1":
            SolicitarDados();
            break;
        
        case "2":
            let login = FazerLogin();
            if (login == true) {
                console.log("login efetuado com sucesso.");
            }
            else {
                console.log("Nome de usuário ou senha incorretos");
            }
            break;

        case "3":
            ExcluirCadastro();
            break;

        case "4":
            console.log("Programa encerrado");
            continuar = false;
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}


//1 - Crie uma função que solicite dois valores ao usuário,
// um nome e uma senha e guarde cada um no seu respectivo array.
function SolicitarDados() {
    let nome = prompt("Qual é o nome?");
    let senha = prompt("Qual é a senha?");
    nomes[contador] =  nome;
    senhas[contador] = senha;
    contador++;
    console.log("Usuário cadastrado com sucesso");
}

//2 - Crie uma função que solicite ao seu usuário o que ele deseja fazer:
// cadastrar, fazer login, excluir um cadastro ou encerrar o programa.
// Essa função deve retornar a opção escolhida pelo usuário.      
function PerguntarAcao() {
    let resposta = prompt("Qual operação deseja /n realizar?\n" + "1 - Cadastrar.\n" + "2 - Fazer login.\n" + "3 - Excluir um cadastro.\n" + "4 - Encerrar o programa.\n");
    return resposta;
} 

//3 - Crie uma função de login e recebe dois valores como parâmetro,
// um nome e uma senha, depois procure o nome recebido no array de nomes
// e em caso positivo compare a senha no array de senhas. Se as duas
// comparações forem válidas retorne true se uma delas não for válida retorne false.
function FazerLogin() {
    let nomeLogin = prompt("Digite o nome de login:");
    let senhaLogin = prompt("Qual a semnhade login:");

    for (let i = 0; i < nomes.length; i++) {
        if (nomeLogin === nomes[i] && senhaLogin === senhas[i]) {
            return true;
        }
    }
    return false;
}



//4 - Crie uma função de exclusão de cadastro que recebe um nome como parâmetro,
// então procure pelo nome no array de nomes e exclua ele e a senha correspondente
// do outro varray, por fim organize o array para eliminar os espaços vazios.

function ExcluirCadastro() {
    let excluindoNome = prompt("Qual o nome do cadatro que deseja excluir?");
    let excluido = false;
    for (let i = 0; i < nomes.length; i++) {
        if (excluindoNome == nomes[i]) {
            for (let j = i; j < contador - 1; j++) {
                nomes[j] = nomes[j + 1];
                senhas[j] = senhas[j + 1];
            }
            contador--;
            nomes.length = contador; // Ajusta o tamanho dos arrays nomes e senhas para o número atual de usuários 
            senhas.length = contador;//depois de mover todos os usuários. Isso garante que o usuário excluído seja completamente removido do array.
            excluido = true;
            console.log("Usuário excluído");
            break;
            
        }
    }   
        if (excluido == false) {
            console.log("Usuário não encontrado");
        }
}


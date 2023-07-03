
let ids = [];
let nomes = [];
let precos = [];
let avaliacoes = [];
let contador = 0;



//1 - Cadastrar um produto. Um produto deve ter um id, nome, preço e avaliação;
function CadastrarProduto() {
    let id = prompt("Qual é a ID do produto?");
    let nome = prompt("Qual é o nome do produto?");
    let preco = prompt("Qual é o preço do produto?");
    let avaliacao = prompt("Qual é a nota de avaliação do produto?");

    id[contador] = id;
    nomes[contador] = nome;
    precos[contador] = precos;
    avaliacoes[contador] = avaliacao;
    contador++;

    console.log("produto cadastrado com sucesso!");
}

//2 - Buscar um produto por id, ou seja, passar o id como parâmetro
// e exibir as informações do produto correspondente;
//   Ex.: Entrada = 3
function BuscarPorID (id) {
    for (let i = 0; i < ids.length; i++) {
        if (id == id[i]) {
            console.log(ids[i] + nomes[i] + precos[i] + avaliacoes[i]);
        }
    }
}

// 3 - Buscar um produto pelo nome e retornar o id dele;
// Ex.: Entrada = Mouse Médio
// Retorno = 2
function BuscarPeloNome(nome) {
    for (let i = 0; i < nomes.length; i++) {
        if (nome == nomes[i]) {
            return ids[i];
        }
    }
}

//4 - Exibir todos os produtos ordenados pelo id;
function ExibirOrdenadosPorID() {
    let idsSup = [];
    let nomesSup = [];
    let precosSup = [];
    let avaliacoesSup = [];
    let contadorSup = 0;

    for (let i = 0; i < ids.length; i++) { // Este loop percorre todos os elementos do array de IDs.
        for (let i2 = 0; i2 < ids.length; i2++) { // Este loop interno também percorre todos os elementos do array de IDs.
            if (ids[i2] == contadorSup + 1){ // Verifica se o ID na posição i2 é igual ao valor atual do contador (incrementado por 1).
                ids[contadorSup] = ids[i2]; // Se for, ele atribui o ID, nome, preço e avaliação na posição i2 aos novos arrays na posição atual do contador.
                nomesSup[contadorSup] = nomes[i2]; 
                precosSup[contadorSup] = precos[i2];
                avaliacoesSup[contadorSup] = avaliacoesSup[i2];
                contadorSup++;
                i2 = ids.length; // Define i2 como o comprimento do array de IDs para encerrar o loop interno.
            }
        }
    }

    ids = idsSup;
    nomes = nomesSup;
    precos = precosSup;
    avaliacoes = avaliacoesSup;

    for (let i = 0; i < ids.length; i++) {
        console.log(ids[i] + nomes[i] + precos[i] + avaliacoes[i]);
    }
}
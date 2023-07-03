
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

//5 - Exibir os produtos pela ordem de avaliação, da maior para a menor;
function ExibirOrdenadosPorAvaliacaoDaMaiorParaMenor() {
    let idSup;
    let nomeSup;
    let precoSup;
    let avaliacaoSup;

    for (let i = 0; i < ids.length; i++) {
        for (let j = 0; j < ids.length; j++) {
            if (avaliacoes[j] < avaliacoes[j +1]) {
                idSup = ids[j];
                ids[j] = ids[j +1];
                ids[j + 1] = idSup;

                nomeSup = nomes[j];
                nomes[j] = nomes[j +1];
                nomes[j + 1] = nomeSup;

                precoSup = precos[j];
                precos[j] = precos[j +1];
                precos[j + 1] = precoSup;

                avaliacaoSup = avaliacoes[j];
                avaliacoes[j] = avaliacoes[j +1];
                avaliacoes[j + 1] = avaliacaoSup;
            }
        }
    }
    
    for (let i = 0; i < ids.length; i++) {                          // ja fiquei com essa duvida mais de uma vez.
        console.log(ids[i] + nomrs[i] + precos[i] + avaliacoes[i]); // O console mostra as arrays ja em ordem de avaliacoes, 
    }                                                               // pq array[0], vai ser sempre array[0], nao importa se é 
}                                                                   // j, i, etc. Se troquei de posicao, vai continuar assim no codigo.

//6 - Atualizar o preço de um produto, para isso deve receber o id do produto
// como parâmetro e o novo valor para atualizar;
//   Ex.: Id = 3, Valor = 200

function AtualizarPreco(id, novoPreco) {
    for (let i = 0; i < ids.length; i++) {
        if(id == ids[i]) {
            precos[i] == novoPreco;
        }
    }
}
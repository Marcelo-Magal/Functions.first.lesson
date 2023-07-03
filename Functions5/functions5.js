
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

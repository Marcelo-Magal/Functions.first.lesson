let ids = [1, 2];
let nomes = ['ma', 'vi'];
let precos = [8, 10];
let avaliacoes = [5, 4];
let contador = 0;
let continuar = true;
let id, nome, produto;
let produtosCarrinho = ['vi', 'ma'];
let quantidades = [3, 4];


//8 - Por fim, utilizando as funções criadas organize a execução do seu código,
// faça com que o usuário possa escolher qual função executar e quando encerrar o programa.

while (continuar) {
    let opcao = parseInt(prompt("Escolha uma opção:\nDigite 1 - CADASTRO\nDigite 2 - BUSCAR PRODUTO POR ID\nDigite 3 - BUSCAR PRODUTO PELO NOME\nDigite 4 - EXIBIR PRODUTOS ORDENADOS PELO ID\nDigite 5 - EXIBIR PRODUTOS ORDENADOS PELA AVALIAÇÃO\nDigite 6 - ATUALIZAR PREÇO DE UM PRODUTO\nDigite 7 - APAGAR UM PRODUTO\nDigite 8 - ENCERRAR PROGRAMA"));

    switch (opcao) {

        case 1: //CADASTRO
            CadastrarProduto();
            break;

        case 2: //BUSCAR PRODUTO POR ID
            id = parseInt(prompt("Digite a ID do produto que deseja buscar?"));
            produto = BuscarPorID(id);
            console.log(produto); //Como estou dando console.log do Return da funçao, apaguei os console.log da função.
            break;

        case 3: //BUSCAR PRODUTO PELO NOME
            nome = prompt("Digite o nome do produto que deseja exibir o ID?");
            id = BuscarPeloNome(nome);
            console.log("A ID do produto é " + id);
            break;

        case 4: //EXIBIR PRODUTOS ORDENADOS PELO ID
            ExibirOrdenadosPorID();
            break;

        case 5: //EXIBIR PRODUTOS ORDENADOS PELA AVALIAÇÃO
            ExibirOrdenadosPorAvaliacaoDaMaiorParaMenor();
            break;

        case 6: //ATUALIZAR PREÇO DE UM PRODUTO
            id = parseInt(prompt("Digite a ID do produto que deseja atualizar o preço"));
            let novoPreco = parseFloat(prompt("Digite o novo preço do produto?"));
            AtualizarPreco(id, novoPreco);
            break;

        case 7: //APAGAR UM PRODUTO
            id = parseInt(prompt("Digite o ID do produto que deseja excluir"));
            ApagarProduto(id);
            break;

        case 8: //ENCERRAR PROGRAMA
            console.log("Programa encerrado.")
            continuar = false
            break;

        default:
            console.log("Operação inválida. Tente novamente.");
            break;
    }
}

//5 - Faça um fluxo de funcionamento para o carrinho.
let continuar2 = true;

while (continuar2) {
    let opcao = parseInt(prompt("Escolha uma opção para o carrinho:\nDigite 1 - Adicionar produtos ao carrinho.\nDigite 2 - Excluir Produtos do carrinho.\nDigite 3 - Ver todos os produtos e valor total do carrinho.\nDigite 4 - Encerrar programa."));

    switch (opcao) {
        case 1: //Adicionar produtos ao carrinho
            let nomeAdicionar = prompt("Qual o nome do produto que deseja adicionar ao carrinho?");
            let quantidadeAdicionar = parseInt(prompt("Qual a quantidade que deseja adicionar?"));
            AdicionarProdutosAoCarrinho(nomeAdicionar, quantidadeAdicionar);
            break;

        case 2: //Excluir Produtos do carrinho
            let nomeExcluir = prompt("Qual o nome do produto que deseja excluir do carrinho?");
            let quantidadeExcluir = parseInt(prompt("Qual a quantidade que deseja excluir?"));
            ExcluirProdutoCarrinho(nomeExcluir, quantidadeExcluir);
            break;

        case 3: //Ver todos os produtos e valor total do carrinho
            ExibirProdutosValorTotal();
            break;

        case 4:
            continuar2 = false;
            break;

        default:
            console.log("Opção inválida, tente novamente.");
            break;
    }
}

//____________________________________________________________________________________________________________________________________

//1 - Cadastrar um produto. Um produto deve ter um id, nome, preço e avaliação;
function CadastrarProduto() {
    let id = parseInt(prompt("Qual é a ID do produto?"));
    let nome = prompt("Qual é o nome do produto?");
    let preco = parseFloat(prompt("Qual é o preço do produto?"));
    let avaliacao = parseInt(prompt("Qual é a nota de avaliação do produto?"));

    //Procura por um ID igual ao informado no array ids 
    for (let i = 0; i < ids.length; i++) {
        if (ids[i] === id) {
            console.log("ID de produto já existente!");
            return; // se um ID igual foi encontrado, a função retorna e impede o registro do novo produto
        }
    }

    ids[contador] = id;
    nomes[contador] = nome;
    precos[contador] = preco;
    avaliacoes[contador] = avaliacao;
    contador++;

    console.log("produto cadastrado com sucesso!");
}

//2 - Buscar um produto por id, ou seja, passar o id como parâmetro
// e exibir as informações do produto correspondente;
//   Ex.: Entrada = 3
function BuscarPorID(id) {
    for (let i = 0; i < ids.length; i++) {
        if (id == ids[i]) {
            //console.log("ID: " + ids[i]); 
            //console.log("Nome: " + nomes[i]);
            //console.log("Preço: " + precos[i]);
            //console.log("Avaliação: " + avaliacoes[i]);
            return {
                id: ids[i],
                nome: nomes[i],
                preco: precos[i],
                avaliacao: avaliacoes[i]
            };
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
            if (ids[i2] == contadorSup + 1) { // Verifica se o ID na posição i2 é igual ao valor atual do contador (incrementado por 1).
                idsSup[contadorSup] = ids[i2]; // Se for, ele atribui o ID, nome, preço e avaliação na posição i2 aos novos arrays na posição atual do contador.
                nomesSup[contadorSup] = nomes[i2];
                precosSup[contadorSup] = precos[i2];
                avaliacoesSup[contadorSup] = avaliacoes[i2];
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
        console.log("Ids: " + ids[i] + " - Nomes: " + nomes[i] + " - Preços: " + precos[i] + " - Avaliações: " + avaliacoes[i]);
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
            if (avaliacoes[j] < avaliacoes[j + 1]) {
                idSup = ids[j];
                ids[j] = ids[j + 1];
                ids[j + 1] = idSup;

                nomeSup = nomes[j];
                nomes[j] = nomes[j + 1];
                nomes[j + 1] = nomeSup;

                precoSup = precos[j];
                precos[j] = precos[j + 1];
                precos[j + 1] = precoSup;

                avaliacaoSup = avaliacoes[j];
                avaliacoes[j] = avaliacoes[j + 1];
                avaliacoes[j + 1] = avaliacaoSup;
            }
        }
    }

    for (let i = 0; i < ids.length; i++) {                          // ja fiquei com essa duvida mais de uma vez.
        console.log("Ids: " + ids[i] + " - Nomes: " + nomes[i] + " - Preços: " + precos[i] + " - Avaliações: " + avaliacoes[i]); // O console mostra as arrays ja em ordem de avaliacoes, 
    }                                                               // pq array[0], vai ser sempre array[0], nao importa se é 
}                                                                   // j, i, etc. Se troquei de posicao, vai continuar assim no codigo.

//6 - Atualizar o preço de um produto, para isso deve receber o id do produto
// como parâmetro e o novo valor para atualizar;
//   Ex.: Id = 3, Valor = 200

function AtualizarPreco(id, novoPreco) {
    for (let i = 0; i < ids.length; i++) {
        if (id == ids[i]) {
            precos[i] = novoPreco;
        }
    }
}

//7 - Deletar um produto, não esqueça de organizar as informações para que não fique espaços vazios;
function ApagarProduto(id) {
    let idsSup = [];
    let nomesSup = [];
    let precosSup = [];
    let avaliacoesSup = [];
    let contadorSup = 0;

    for (i = 0; i < ids.length; i++) {
        if (id == ids[i]) {
            console.log("Produto excluido.");
        }
        else {
            idsSup[contadorSup] = ids[i];
            nomesSup[contadorSup] = nomes[i];
            precosSup[contadorSup] = precos[i];
            avaliacoesSup[contadorSup] = avaliacoes[i];
            contadorSup++;
        }
    }
    ids = idsSup;
    nomes = nomesSup;
    precos = precosSup;
    avaliacoes = avaliacoesSup;

}

// Abaixo está a minha solução.
//function ApagarProduto() {
//    for (let i = 0; i < ids.length; i++) {
//        if (id == ids[i]) {
//            if (i != contador - 1) {
//                for (let j = i; j < ids.length - 1; j++) { //você está acessando o produto na posição j + 1.
//                    ids[j] = ids[j + 1];                 // Se j fosse igual a contador, então j + 1 seria igual a contador + 1, 
//                    nomes[j] = nomes[j + 1];             // // que está fora dos limites do array. Portanto, para evitar acessar 
//                    precos[j] = precos[j + 1];           // um índice fora dos limites do array, o loop vai apenas até contador - 1.
//                    avaliacoes[j] = avaliacoes[j + 1];             
//               }
//            } 
//        
//        contador--;
//        ids.length = contador;
//        nomes.length = contador; // Ajusta o tamanho dos arrays nomes e senhas para o número atual de usuários 
//        precos.length = contador;//depois de mover todos os usuários. Isso garante que o usuário excluído seja completamente removido do array.
//        avaliacoes.length = contador;
//        console.log("Produto excluído.");
//        }
//
//    }
//}

//____________________________________________________________________________________________________________________________________

//Agora devemos criar funções para um “carrinho de compras” para utilizar junto com as funções
// anteriores, esse carrinho de compras deve guardar duas informações:
// o nome do produto e a quantidade deste produto.

//1 - Crie uma função para adicionar produtos no carrinho, você deve passar o nome do produto
// e a quantidade que deseja adicionar como parâmetro. Essa função deve verificar primeiro se
// já existe esse produto no carrinho, se existir apenas adicione a quantidade,
// se não adicione o produto e a quantidade;

function AdicionarProdutosAoCarrinho(nomeAdicionar, quantidadeAdicionar) {
    let i;
    for (i = 0; i < produtosCarrinho.length; i++) {
        if (nomeAdicionar == produtosCarrinho[i]) {
            quantidades[i] += quantidadeAdicionar;
            return;  // Sai da função
        }
    }
    // Se o produto não foi encontrado no carrinho, adicione-o
    produtosCarrinho[i] = nomeAdicionar;
    quantidades[i] = quantidadeAdicionar;
    console.log("Produto adicionado com sucesso");
}

//function AdicionarProdutosAoCarrinho(nomeAdicionar, quantidadeAdicionar) {
//    for (i = 0; i < produtosCarrinho.length; i++) {
//        if (nomeAdicionar == produtosCarrinho[i]) {
//            quantidades[i] += quantidadeAdicionar;
//            i = produtosCarrinho.length + 1; //encerra o loop, poderia usa break.
//        }
//        else if (i == produtosCarrinho.length) {
//            produtosCarrinho[i] = nomeAdicionar;
//           quantidades[i] = quantidadeAdicionar;
//            i++; //Não entendo essa adição!!! mas é gambiarra mesmo, não esta correta.
//        }
//    }
//    console.log("Produto adcionado com sucesso")
//}
//____________________________________________________________________________________________________________________________________

//2 - Crie uma função para excluir um produto do carrinho, essa função deve receber o nome do produto
// e a quantidade que deseja excluir como parâmetro. Se a quantidade a se excluir for o total
// desse produto no carrinho o produto como um todo deve ser removido;

function ExcluirProdutoCarrinho(nomeExcluir, quantidadeExcluir) {
    let produtosCarrinhoSup = [];
    let quantidadesSup = [];
    let contadorSup = 0;
    let produtoEncontrado = false;

    for (let i = 0; i < produtosCarrinho.length; i++) { //Pq o luiz usiu nomes.lenght?
        if (nomeExcluir == produtosCarrinho[i]) {
            produtoEncontrado = true;

            if (quantidadeExcluir >= quantidades[i]) {
                console.log("Produto excluído!");
            }

            else if (quantidadeExcluir < quantidades[i]) {
                quantidades[i] -= quantidadeExcluir;
                produtosCarrinhoSup[contadorSup] = produtosCarrinho[i];
                quantidadesSup[contadorSup] = quantidades[i];
                contadorSup++;
            }

            else {
                produtosCarrinhoSup[contadorSup] = produtosCarrinho[i];
                quantidadesSup[contadorSup] = quantidades[i];
                contadorSup++;
            }
        }
    }
    if (!produtoEncontrado) {
        console.log("Produto não encontrado, tente novamente");
    }
}

// UMA VERSAO MAIS SIMPLES, QUE NAO LEVA EM CONTA DIGITRA UM PRODUTO QUE NAO EXISTE.
//function ExcluirProdutoCarrinho(nomeExcluir, quantidadeExcluir) {
//    let produtosCarrinhoSup = [];
//    let quantidadesSup = [];
//    let contadorSup = 0;
//    let produtoEncontrado = false;
//    
//    for (i = 0; i < produtosCarrinho.length; i++) {
//        if (nomeExcluir == produtosCarrinho[i] && quantidadeExcluir >= quantidades[i]) { //excluir produto com um todo
//            console.log("Produto excluído!");
//       }
//        else if (nomeExcluir == produtosCarrinho[i] && quantidadeExcluir < quantidades[i]) { //excluir qtdd de produto, mas não o produto.
//            quantidades[i] -= quantidadeExcluir;
//            produtosCarrinhoSup[contadorSup] = produtosCarrinho[i];
//            quantidadesSup[contadorSup] = quantidades[i];
//            contadorSup++;
//        }
//        else {
//            produtosCarrinhoSup[contadorSup] = produtosCarrinho[i];
//            quantidadesSup[contadorSup] = quantidades[i];
//            contadorSup++;
//        }
//    }
//    produtosCarrinho = produtosCarrinhoSup;
//    quantidades = quantidadesSup;
//}

//____________________________________________________________________________________________________________________________________

//3 - Crie uma função que retorne o valor total de todos os produtos no carrinho;
function RetornarValorTotalCarrinho() {
    let valorTotalCarrinho = 0;
    for (let i = 0; i < produtosCarrinho.length; i++) {
        for (let i2 = 0; i < nomes.length; i2++) {
            
            if (produtosCarrinho[i] == nomes[i2]) {
                let valor = (quantidades[i] * precos[i2]);
                valorTotalCarrinho += valor;
                console.log("teste");
            }
        }
    }
    return valorTotalCarrinho;
}

//____________________________________________________________________________________________________________________________________

//4 - Crie uma função que exiba todos os produtos do carrinho e o valor total de todos os produtos;
function ExibirProdutosValorTotal() {
    for (let i = 0; i < produtosCarrinho.length; i++) {
        console.log(`${produtosCarrinho[i]} escrvere testo aqui ${produtosCarrinho}`)
        console.log(produtosCarrinho[i], quantidades[i] + " unidades.");
    }
    let teste = RetornarValorTotalCarrinho();
    console.log("Valor total :" + teste);
}



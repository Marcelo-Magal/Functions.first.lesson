// Função ou Método.
// o nome da fanção precisa claramente ser uma ação.
// Ex: function CalcularMedia() {
// }

// O que é importante em função:
// 1) Chamar uma função.
// 2) Parâmetros
// 3) Return

CalcularMedia(); // Chamando/executando a função.
console.log(PerguntarNome()); // Exibe o nome, pq retornei na função.

var nome = PerguntarNome();
console.log(nome); // Exibe o nome, pq retornei na função.

var media = CalcularMedia(); // se eu acessar media no console, vai ser Undefined, pois eu nao retornei media

function CalcularMedia() {
    console.log((2 + 2 ) / 2);
}

function PerguntarNome() {
   var nome = prompt("Qual é o seu nome?");
   return nome;
}
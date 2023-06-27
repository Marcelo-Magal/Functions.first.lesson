
//6 - Faça com que seu usuário escolha qual função ele deseja fazer
// com os números que ele inseriu, e depois de realizar essa operação
// pergunte se ele deseja fazer outra ou encerrar a aplicação.
let continuar = true;
let contador = 0;
let resultado = [];
let numeroA, numeroB;
let resultadoDaOperacao;
let operacao;

while (continuar) {
    operacao = prompt("Digite a opção desejada: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão ");
    
    PerguntarNumeros();

    RealizarOperacao();
    
    ContinuarOperacao();
}

ExibirHistorico();

// 1 - Crie um algoritmo que solicite ao seu usuário dois números A e B.
function PerguntarNumeros () {
    numeroA = parseInt(prompt("Qual é o número A?"));
    numeroB = parseInt(prompt("Qual é o número B?"));
}

function RealizarOperacao() {
    switch (operacao) {

        case "1":
            resultadoDaOperacao = SomarNumeros(numeroA, numeroB);
            break;

        case "2":
            resultadoDaOperacao = SubtrairNumeros(numeroA, numeroB);
            break;

        case "3":
            resultadoDaOperacao = MultiplicarNumeros(numeroA, numeroB);
            break;

        case "4":
            resultadoDaOperacao = DividirNumeros(numeroA, numeroB);
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
    resultado[contador] = resultadoDaOperacao;
    contador++
}

function ContinuarOperacao() {
    //console.log("O resultado da operação é " + resultadoDaOperacao)
    let resposta =  prompt("Deseja realizar outra operação?")
        if (resposta.toUpperCase() === 'N' || resposta.toUpperCase() === 'NAO' || resposta.toUpperCase() === 'NÃO') {
        continuar = false;
    }
}

function ExibirHistorico() {
    console.log("Histórico de resultados")
    for (let i = 0; i < resultado.length; i++) {
    console.log("Resultado " + (i + 1) + ": " + resultado[i]);
   }
}

//2 - Crie uma função que receba os dois valores fornecidos pelo usuário
// e faça uma soma com eles, e retorne o resultado;

function SomarNumeros(a, b) {
    return a + b;
}

//3 - Crie uma função que receba os dois valores fornecidos pelo usuário
// e faça uma subtração com eles, e retorne o resultado;

function SubtrairNumeros(a, b) {
    return a - b;
}

//4 - Crie uma função que receba os dois valores fornecidos pelo usuário
// e faça uma multiplicação com eles, e retorne o resultado;

function MultiplicarNumeros(a, b) {
    return a * b;
}

//5 - Crie uma função que receba os dois valores fornecidos pelo usuário
// e faça uma divisão com eles, e retorne o resultado;

function DividirNumeros(a, b) {
    return a / b;
}
